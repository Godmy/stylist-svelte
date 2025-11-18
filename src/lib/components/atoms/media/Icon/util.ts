import type { IconSize, IconName } from './types';
import { ICON_PATHS, DEFAULT_ICON_PATH, ICON_SIZE_CLASSES } from './constant';

/**
 * Gets the SVG path for a given icon name
 * 
 * @param name - The name of the icon
 * @returns The SVG path string for the icon
 */
export function getIconPath(name: IconName): string {
  return ICON_PATHS[name as keyof typeof ICON_PATHS] || DEFAULT_ICON_PATH;
}

/**
 * Gets the size classes for a given icon size
 * 
 * @param size - The size of the icon
 * @returns The CSS classes string for the size
 */
export function getSizeClasses(size: IconSize): string {
  return ICON_SIZE_CLASSES[size] || ICON_SIZE_CLASSES.md;
}

/**
 * Gets all available icon names
 * 
 * @returns Array of available icon names
 */
export function getAvailableIcons(): (keyof typeof ICON_PATHS)[] {
  return Object.keys(ICON_PATHS) as (keyof typeof ICON_PATHS)[];
}