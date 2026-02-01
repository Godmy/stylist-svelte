/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { Preset } from '$stylist/design-system/interaction/preset';
import { twJoin, twMerge, cn } from './types';

/**
 * Merge multiple class strings, filtering out falsy values
 */
export function mergeClasses(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Conditionally add classes based on conditions
 */
export function conditionalClasses(
  baseClasses: string,
  conditionalClasses: Record<string, string | undefined>
): string {
  const additional = Object.entries(conditionalClasses)
    .filter(([condition]) => Boolean(condition))
    .map(([, classes]) => classes)
    .filter(Boolean);

  return mergeClasses(baseClasses, ...additional);
}

/**
 * Build CSS classes from preset configuration for interactive components
 */
export function buildClasses<V extends string, S extends string>(
  preset: Preset<V, S>,
  options: {
    variant: V;
    size: S;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    className?: string;
    extra?: Array<string | undefined>;
  }
): string {
  const { variant, size, disabled, loading, block, className, extra = [] } = options;

  return [
    preset.classes.base,
    preset.classes.focusVisible ?? '',
    preset.classes.variant[variant],
    preset.classes.size[size],
    disabled || loading ? preset.classes.state.disabled : '',
    block ? preset.classes.state.block : '',
    ...extra,
    className
  ]
    .filter(Boolean)
    .join(' ');
}

export { twJoin, twMerge, cn };
