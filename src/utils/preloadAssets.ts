export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve();
    img.onerror = () => reject();
  });
};

export const preloadImages = async (sources: string[]) => {
  await Promise.allSettled(sources.map((src) => preloadImage(src)));
};