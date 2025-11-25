import type { IconChevronSize } from './types';
import { ICON_CHEVRON_BASE_CLASSES, ROTATED_CLASS } from './constant';

/**
 * Gets the CSS classes for the accordion icon container
 * 
 * @param isOpen - Whether the accordion is open
 * @param className - Additional CSS classes
 * @returns Combined CSS classes string
 */
export function getContainerClasses(isOpen: boolean, className: string = ''): string {
  const rotationClass = isOpen ? ROTATED_CLASS : '';
  return `${ICON_CHEVRON_BASE_CLASSES} ${rotationClass} ${className}`.trim();
}