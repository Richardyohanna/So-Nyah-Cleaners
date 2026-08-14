const CACHE_VERSION = "v1";
const APP_CACHE = `sonyah-media-${CACHE_VERSION}`;
const MAX_CACHE_BYTES = 200 * 1024 * 1024;
const SAFE_VIDEO_SIZE_BYTES = 12 * 1024 * 1024;
const ASSET_PATTERNS = [
  /\.(png|jpg|jpeg|gif|webp|svg|avif|ico|css|js)$/i,
  /\.(mp4|webm|ogg|m4v)$/i,
];

const STATIC_CACHE_ALLOWLIST = [
  "/",
  "/index.html",
  "/gallery",
  "/about",
  "/contact",
  "/services",
  "/blog",
  "/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(STATIC_CACHE_ALLOWLIST)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("sonyah-media-") && key !== APP_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

const getResponseSize = (response) => {
  const lengthHeader = response.headers.get("Content-Length");

  if (!lengthHeader) {
    return null;
  }

  const value = Number.parseInt(lengthHeader, 10);
  return Number.isFinite(value) ? value : null;
};

const shouldCacheResponse = (request, response) => {
  if (!response || response.type !== "basic" || response.status !== 200) {
    return false;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return false;
  }

  if (request.method !== "GET") {
    return false;
  }

  if (url.pathname.match(/\.(mp4|webm|ogg|m4v)$/i)) {
    const size = getResponseSize(response);
    if (size !== null && size > SAFE_VIDEO_SIZE_BYTES) {
      return false;
    }
    if (size === null) {
      return false;
    }
  }

  return ASSET_PATTERNS.some((pattern) => pattern.test(url.pathname));
};

const trimCache = async (cacheName) => {
  const cache = await caches.open(cacheName);
  const requests = await cache.keys();
  let totalSize = 0;

  for (const request of requests) {
    const response = await cache.match(request);
    const size = response ? getResponseSize(response) ?? 0 : 0;
    totalSize += size;
  }

  if (totalSize <= MAX_CACHE_BYTES) {
    return;
  }

  const ordered = requests
    .map(async (request) => {
      const response = await cache.match(request);
      return {
        request,
        size: getResponseSize(response) ?? 0,
      };
    });

  const entries = await Promise.all(ordered);
  entries.sort((a, b) => b.size - a.size);

  for (const entry of entries) {
    if (totalSize <= MAX_CACHE_BYTES) {
      break;
    }
    await cache.delete(entry.request);
    totalSize -= entry.size;
  }
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  const isNavigationRequest = request.mode === "navigate";

  if (isNavigationRequest) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(APP_CACHE).then((cache) => cache.put(request, clone)).catch(() => undefined);
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || Response.error()))
    );
    return;
  }

  if (url.pathname.endsWith(".mp4") || url.pathname.endsWith(".webm") || url.pathname.endsWith(".ogg") || url.pathname.endsWith(".m4v")) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }

        return fetch(request)
          .then((response) => {
            if (response.ok && response.body) {
              const clone = response.clone();
              if (shouldCacheResponse(request, clone)) {
                caches.open(APP_CACHE).then((cache) => {
                  return cache.put(request, clone).then(() => trimCache(APP_CACHE));
                }).catch(() => undefined);
              }
            }
            return response;
          })
          .catch(() => cached || Response.error());
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(request)
        .then((response) => {
          if (shouldCacheResponse(request, response)) {
            const clone = response.clone();
            caches.open(APP_CACHE).then((cache) => {
              return cache.put(request, clone).then(() => trimCache(APP_CACHE));
            }).catch(() => undefined);
          }
          return response;
        })
        .catch((error) => {
          console.warn("Cache fallback failed for request:", request.url, error);
          return Response.error();
        });
    })
  );
});
