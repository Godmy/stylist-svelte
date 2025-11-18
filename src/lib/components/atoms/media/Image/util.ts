import type { ImageState } from './types';
import { IMAGE_CLASSES_BASE, IMAGE_CLASSES_LOADED, IMAGE_CLASSES_NOT_LOADED, IMAGE_TRANSITION_CLASSES } from './constant';

/**
 * Gets the image source to display based on error state and fallback
 * 
 * @param src - Original image source
 * @param fallback - Fallback image source
 * @param error - Whether there was an error loading the image
 * @returns The appropriate image source
 */
export function getImageSrc(src: string | undefined, fallback: string | undefined, error: boolean): string | undefined {
  return (error && fallback) ? fallback : src;
}

/**
 * Gets the CSS classes for the image element based on its loaded state
 * 
 * @param className - Additional CSS classes
 * @param loaded - Whether the image has loaded
 * @returns Combined CSS classes string
 */
export function getImageClasses(className: string, loaded: boolean): string {
  const loadedStateClass = loaded ? IMAGE_CLASSES_LOADED : IMAGE_CLASSES_NOT_LOADED;
  return `${IMAGE_CLASSES_BASE} ${loadedStateClass} ${IMAGE_TRANSITION_CLASSES} ${className}`.trim();
}

/**
 * Creates the default image state
 * 
 * @returns Default image state
 */
export function createDefaultImageState(): ImageState {
  return {
    error: false,
    loaded: false
  };
}