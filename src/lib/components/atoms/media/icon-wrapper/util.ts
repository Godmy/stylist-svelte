import type { IconWrapperSize, IconVariant, IconShape, IconColor } from './types';
import { ICON_WRAPPER_SIZE_CLASSES, SHAPE_CLASSES, ICON_WRAPPER_BASE_CLASSES } from './constant';

/**
 * Gets the size classes for a given icon size
 *
 * @param size - The size of the icon wrapper
 * @returns The CSS classes string for the size
 */
export function getIconWrapperSizeClasses(size: IconWrapperSize): string {
  return ICON_WRAPPER_SIZE_CLASSES[size] || ICON_WRAPPER_SIZE_CLASSES.md;
}

/**
 * Gets the shape classes for a given icon shape
 * 
 * @param shape - The shape of the icon wrapper
 * @returns The CSS classes string for the shape
 */
export function getShapeClasses(shape: IconShape): string {
  return SHAPE_CLASSES[shape] || SHAPE_CLASSES.circle;
}

/**
 * Gets the color classes based on variant and color
 * 
 * @param variant - The variant of the icon wrapper
 * @param color - The color of the icon wrapper
 * @returns The CSS classes string for the color and variant combination
 */
export function getColorClasses(variant: IconVariant, color: IconColor): string {
  switch (variant) {
    case 'solid':
      return {
        primary: 'bg-[--color-primary-600] text-[--color-text-inverse]',
        secondary: 'bg-[--color-secondary-600] text-[--color-text-inverse]',
        success: 'bg-[--color-success-600] text-[--color-text-inverse]',
        warning: 'bg-[--color-warning-500] text-[--color-text-inverse]',
        danger: 'bg-[--color-danger-600] text-[--color-text-inverse]'
      }[color] || '';
    case 'outline':
      return {
        primary: 'bg-transparent border border-[--color-primary-600] text-[--color-primary-600]',
        secondary: 'bg-transparent border border-[--color-secondary-600] text-[--color-secondary-600]',
        success: 'bg-transparent border border-[--color-success-600] text-[--color-success-600]',
        warning: 'bg-transparent border border-[--color-warning-500] text-[--color-warning-500]',
        danger: 'bg-transparent border border-[--color-danger-600] text-[--color-danger-600]'
      }[color] || '';
    case 'ghost':
      return {
        primary: 'bg-[--color-primary-100] text-[--color-primary-600] dark:bg-[--color-primary-900] dark:text-[--color-primary-200]',
        secondary: 'bg-[--color-secondary-100] text-[--color-secondary-600] dark:bg-[--color-secondary-900] dark:text-[--color-secondary-200]',
        success: 'bg-[--color-success-100] text-[--color-success-600] dark:bg-[--color-success-900] dark:text-[--color-success-200]',
        warning: 'bg-[--color-warning-100] text-[--color-warning-600] dark:bg-[--color-warning-900] dark:text-[--color-warning-200]',
        danger: 'bg-[--color-danger-100] text-[--color-danger-600] dark:bg-[--color-danger-900] dark:text-[--color-danger-200]'
      }[color] || '';
    default:
      return '';
  }
}

/**
 * Combines all classes for the icon wrapper
 *
 * @param size - The size of the icon wrapper
 * @param shape - The shape of the icon wrapper
 * @param variant - The variant of the icon wrapper
 * @param color - The color of the icon wrapper
 * @param className - Additional CSS classes
 * @returns Combined CSS classes string
 */
export function getCombinedClasses(
  size: IconWrapperSize,
  shape: IconShape,
  variant: IconVariant,
  color: IconColor,
  className: string = ''
): string {
  const sizeClasses = getIconWrapperSizeClasses(size);
  const shapeClasses = getShapeClasses(shape);
  const colorClasses = getColorClasses(variant, color);

  return `${sizeClasses} ${ICON_WRAPPER_BASE_CLASSES} ${shapeClasses} ${colorClasses} ${className}`.trim();
}