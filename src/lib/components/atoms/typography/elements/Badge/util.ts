import type { BadgeVariant, BadgeSize } from './type';
import { VARIANT_CLASSES, SIZE_CLASSES, BASE_BADGE_CLASSES } from './constant';

/**
 * Gets the CSS classes for the badge based on variant, size and additional classes
 * 
 * @param variant - The badge variant
 * @param size - The badge size
 * @param className - Additional CSS classes
 * @returns Combined CSS classes string
 */
export function getBadgeClasses(
  variant: BadgeVariant, 
  size: BadgeSize, 
  className: string = ''
): string {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.default;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  
  return `${BASE_BADGE_CLASSES} ${variantClass} ${sizeClass} ${className}`.trim();
}