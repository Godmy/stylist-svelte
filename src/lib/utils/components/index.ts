/**
 * Component utility functions for getting CSS classes
 * Generic utility functions that can be used across the application
 */

// Import STATE_CLASSES if needed from design system
// import { STATE_CLASSES } from '$stylist/design-system/tokens/classes';

/**
 * Get CSS classes based on variant
 * @param variant The variant to get classes for
 * @param variantClassesMap Mapping of variants to their CSS classes
 * @param defaultVariantClass Default class to use if variant is not found
 * @returns The appropriate CSS classes
 */
export const getVariantClasses = (
  variant: string,
  variantClassesMap: Record<string, string>,
  defaultVariantClass: string = ''
): string => {
  return variantClassesMap[variant] || defaultVariantClass;
};

/**
 * Get CSS classes based on size
 * @param size The size to get classes for
 * @param sizeClassesMap Mapping of sizes to their CSS classes
 * @param defaultSizeClass Default class to use if size is not found
 * @returns The appropriate CSS classes
 */
export const getSizeClasses = (
  size: string,
  sizeClassesMap: Record<string, string>,
  defaultSizeClass: string = ''
): string => {
  return sizeClassesMap[size] || defaultSizeClass;
};

/**
 * Type definition for component state classes
 */
export type ComponentStateClasses = {
  disabled?: string;
  loading?: string;
  block?: string;
  readonly?: string;
};

/**
 * Get CSS classes based on component state
 * @param stateFlags Object containing state flags (disabled, loading, etc.)
 * @param customStateClasses Custom classes for specific states
 * @param stateClasses Optional design system state classes mapping
 * @returns The appropriate CSS classes
 */
export const getStateClasses = (
  stateFlags: {
    disabled?: boolean;
    loading?: boolean;
    error?: boolean;
    readonly?: boolean;
    block?: boolean;
    [key: string]: any;
  },
  customStateClasses?: Record<string, string>,
  stateClasses?: ComponentStateClasses
): string => {
  const classes: string[] = [];

  // Add standard state classes with fallback defaults
  if (stateFlags.disabled) classes.push(stateClasses?.disabled || 'opacity-50 cursor-not-allowed');
  if (stateFlags.loading) classes.push(stateClasses?.loading || 'opacity-70');
  if (stateFlags.block) classes.push(stateClasses?.block || 'block w-full');
  if (stateFlags.readonly) classes.push(stateClasses?.readonly || 'bg-gray-100');

  // Add custom state classes
  if (customStateClasses) {
    Object.entries(stateFlags).forEach(([key, value]) => {
      if (value && customStateClasses[key]) {
        classes.push(customStateClasses[key]);
      }
    });
  }

  return classes.join(' ');
};

/**
 * Get comprehensive CSS classes for a component
 * @param baseClass Base CSS class for the component
 * @param variant Component variant
 * @param size Component size
 * @param stateFlags Component state flags
 * @param variantClassesMap Mapping of variants to their CSS classes
 * @param sizeClassesMap Mapping of sizes to their CSS classes
 * @param customStateClasses Custom classes for specific states
 * @param additionalClass Additional CSS class to append
 * @param stateClasses Optional design system state classes mapping
 * @returns The combined CSS classes
 */
export const getComponentClasses = (
  baseClass: string,
  variant?: string,
  size?: string,
  stateFlags: { [key: string]: any } = {},
  variantClassesMap?: Record<string, string>,
  sizeClassesMap?: Record<string, string>,
  customStateClasses?: Record<string, string>,
  additionalClass: string = '',
  stateClasses?: ComponentStateClasses
): string => {
  const classes: string[] = [baseClass];

  if (variant && variantClassesMap) {
    classes.push(getVariantClasses(variant, variantClassesMap));
  }

  if (size && sizeClassesMap) {
    classes.push(getSizeClasses(size, sizeClassesMap));
  }

  if (Object.keys(stateFlags).length > 0) {
    classes.push(getStateClasses(stateFlags, customStateClasses, stateClasses));
  }

  if (additionalClass) {
    classes.push(additionalClass);
  }

  return classes.filter(Boolean).join(' ');
};