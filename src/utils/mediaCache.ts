export const MEDIA_CACHE_CONSENT_KEY = "mediaCacheConsent";
export const MEDIA_CACHE_VERSION = "v1";
export const MEDIA_CACHE_NAME = `sonyah-media-${MEDIA_CACHE_VERSION}`;

export type MediaCacheConsent = "accepted" | "declined";

export const supportsMediaCache = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return "caches" in window && "serviceWorker" in navigator;
};

export const getMediaCacheConsent = (): MediaCacheConsent | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(MEDIA_CACHE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
};

export const setMediaCacheConsent = (value: MediaCacheConsent): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(MEDIA_CACHE_CONSENT_KEY, value);
  } catch (error) {
    console.warn("Unable to persist media cache consent:", error);
  }
};

export const clearMediaCache = async (): Promise<void> => {
  try {
    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
    }
  } catch (error) {
    console.warn("Unable to clear media cache:", error);
  }

  try {
    window.localStorage.removeItem(MEDIA_CACHE_CONSENT_KEY);
  } catch (error) {
    console.warn("Unable to remove consent flag:", error);
  }

  if ("serviceWorker" in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    } catch (error) {
      console.warn("Unable to unregister service worker:", error);
    }
  }
};

export const registerMediaCache = async (): Promise<ServiceWorkerRegistration | null> => {
  if (!supportsMediaCache()) {
    return null;
  }

  if (getMediaCacheConsent() !== "accepted") {
    return null;
  }

  try {
    return await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  } catch (error) {
    console.warn("Unable to register media cache service worker:", error);
    return null;
  }
};

export const unregisterMediaCache = async (): Promise<void> => {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  } catch (error) {
    console.warn("Unable to unregister media cache service worker:", error);
  }
};

export const isVideoUrl = (url: string): boolean => {
  return /\.(mp4|webm|ogg|m4v)(\?.*)?$/i.test(url);
};

export const isImageUrl = (url: string): boolean => {
  return /\.(png|jpe?g|gif|webp|svg|avif|ico)(\?.*)?$/i.test(url);
};

export const isCacheableVideo = (url: string, sizeBytes?: number): boolean => {
  if (!isVideoUrl(url)) {
    return false;
  }

  if (typeof sizeBytes !== "number") {
    return true;
  }

  return sizeBytes <= 12 * 1024 * 1024;
};
