import type { HTMLAttributes } from 'svelte/elements';

/**
 * Divider Props
 * Used for visual dividers/separators
 */
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the divider is inset */
  inset?: boolean;
  /** Custom class name */
  class?: string;
  /** Alignment of the divider content */
  align?: 'start' | 'center' | 'end';
  /** Whether the divider is dashed */
  dashed?: boolean;
  /** Label text to display on the divider */
  label?: string;
}
