import type { IIconChevronStyleClasses } from './types';
import { ICON_CHEVRON_BASE_CLASSES, ROTATED_CLASS } from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing accordion icon styling logic
 */
export class IconChevronStyleManager {
  static getContainerClasses(isOpen: boolean, className: string): string {
    const rotationClass = isOpen ? ROTATED_CLASS : '';
    return `${ICON_CHEVRON_BASE_CLASSES} ${rotationClass} ${className}`.trim();
  }

  static getAllClasses(isOpen: boolean, className: string): string {
    return this.getContainerClasses(isOpen, className);
  }
}