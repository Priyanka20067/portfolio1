// Utility to resolve project and asset images dynamically in Vite & React

let imageMap = {};

try {
  // Vite eager glob import for image assets only
  const globImages = import.meta.glob('../img/*.{png,jpg,jpeg,svg,webp,gif,PNG,JPG,JPEG}', { eager: true });
  for (const path in globImages) {
    const fileName = path.split('/').pop();
    const resolvedUrl = globImages[path].default || globImages[path];
    imageMap[fileName] = resolvedUrl;
    imageMap[`./${fileName}`] = resolvedUrl;
  }
} catch (e) {
  console.warn('Image loader context not available:', e);
}

export const resolveImage = (imgPath, fallback = '') => {
  if (!imgPath) return fallback;

  // External URL or Base64 data
  if (
    imgPath.startsWith('http://') ||
    imgPath.startsWith('https://') ||
    imgPath.startsWith('data:')
  ) {
    return imgPath;
  }

  const cleanName = imgPath.replace(/^\.\//, '');
  if (imageMap[cleanName]) {
    return imageMap[cleanName];
  }
  if (imageMap[imgPath]) {
    return imageMap[imgPath];
  }

  // Check with common extensions
  if (imageMap[`${cleanName}.png`]) return imageMap[`${cleanName}.png`];
  if (imageMap[`${cleanName}.jpg`]) return imageMap[`${cleanName}.jpg`];

  return fallback || imgPath;
};
