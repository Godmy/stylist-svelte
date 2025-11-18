import type { IChipStyleClasses } from './types';
import {
  CHIP_BASE_CLASSES,
  CHIP_SIZE_CLASSES,
  CHIP_VARIANT_CLASSES,
  CLOSE_BUTTON_BASE_CLASSES,
  CLOSE_BUTTON_SIZE_CLASSES,
  CLOSE_BUTTON_VARIANT_CLASSES
} from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing chip styling logic
 */
export class ChipStyleManager {
  static getContainerClasses(size: 'sm' | 'md' | 'lg', variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger', className: string): string {
    const sizeClass = CHIP_SIZE_CLASSES[size];
    const variantClass = CHIP_VARIANT_CLASSES[variant];
    
    return `${CHIP_BASE_CLASSES} ${sizeClass} ${variantClass} ${className}`.trim();
  }

  static getCloseButtonClasses(size: 'sm' | 'md' | 'lg', variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'): string {
    const sizeClass = CLOSE_BUTTON_SIZE_CLASSES[size];
    const variantClass = CLOSE_BUTTON_VARIANT_CLASSES[variant];
    
    return `${CLOSE_BUTTON_BASE_CLASSES} ${sizeClass} ${variantClass}`.trim();
  }

  static getAllClasses(
    size: 'sm' | 'md' | 'lg', 
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger', 
    closable: boolean,
    className: string
  ): string {
    const containerClasses = this.getContainerClasses(size, variant, className);
    const closeButtonClasses = closable ? this.getCloseButtonClasses(size, variant) : '';
    
    return `${containerClasses} ${closeButtonClasses}`.trim();
  }
}