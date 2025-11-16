const FALLBACK_ICON_CLASSES = 'flex items-center justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 font-bold text-gray-700 dark:text-gray-300 uppercase select-none';
const FAVICON_IMAGE_CLASSES = 'object-cover rounded';

/**
 * Generates the favicon URL from a website URL
 *
 * @param websiteUrl - The URL of the website
 * @returns The favicon URL or empty string if the input is invalid
 */
export function generateFaviconUrl(websiteUrl?: string): string {
  if (!websiteUrl) return '';

  try {
    const parsedUrl = new URL(websiteUrl);
    return `${parsedUrl.protocol}//${parsedUrl.host}/favicon.ico`;
  } catch (e) {
    console.error('Invalid URL provided:', websiteUrl, e);
    return '';
  }
}

/**
 * Creates CSS class string for the fallback element with dynamic size
 *
 * @param size - Size of the icon in pixels
 * @param additionalClasses - Additional CSS classes to append
 * @returns CSS class string
 */
export function getFallbackClasses(size: number, additionalClasses: string = ''): string {
  return `${FALLBACK_ICON_CLASSES} w-[${size}px] h-[${size}px] text-[${size * 0.6}px] ${additionalClasses}`.trim();
}

/**
 * Creates CSS class string for the image element with dynamic size
 *
 * @param additionalClasses - Additional CSS classes to append
 * @returns CSS class string
 */
export function getFaviconImageClasses(additionalClasses: string = ''): string {
  return `${FAVICON_IMAGE_CLASSES} ${additionalClasses}`.trim();
}