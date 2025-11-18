import type { IAccordionIconStyleClasses } from './types';
import { BASE_CLASSES, ROTATED_CLASS } from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing accordion icon styling logic
 */
export class AccordionIconStyleManager {
  static getContainerClasses(isOpen: boolean, className: string): string {
    const rotationClass = isOpen ? ROTATED_CLASS : '';
    return `${BASE_CLASSES} ${rotationClass} ${className}`.trim();
  }

  static getAllClasses(isOpen: boolean, className: string): string {
    return this.getContainerClasses(isOpen, className);
  }
}