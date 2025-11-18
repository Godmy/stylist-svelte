import type { IconSize, IconName, IIconStyleClasses } from './types';
import { ICON_PATHS, DEFAULT_ICON_PATH, ICON_SIZE_CLASSES } from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing icon styling logic
 */
export class IconStyleManager {
  static getBaseClasses(): string {
    return 'inline-block';
  }

  static getSizeClasses(size: IconSize): string {
    return ICON_SIZE_CLASSES[size] || ICON_SIZE_CLASSES.md;
  }

  static getAllClasses(size: IconSize, className: string): string {
    const baseClasses = this.getBaseClasses();
    const sizeClasses = this.getSizeClasses(size);

    return `${baseClasses} ${sizeClasses} ${className}`;
  }

  static getIconPath(name: IconName): string {
    return ICON_PATHS[name as keyof typeof ICON_PATHS] || DEFAULT_ICON_PATH;
  }

  static getAvailableIcons(): (keyof typeof ICON_PATHS)[] {
    return Object.keys(ICON_PATHS) as (keyof typeof ICON_PATHS)[];
  }
}