import type { DividerAlign } from '$stylist/design-system/tokens/architecture/divider-aligns';
import type { DividerOrientation } from '$stylist/design-system/tokens/architecture/divider-orientations';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Divider Props
 * Used for visual dividers/separators
 */
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Orientation of the divider */
  orientation?: DividerOrientation;
  /** Whether the divider is inset */
  inset?: boolean;
  /** Custom class name */
  class?: string;
  /** Alignment of the divider content */
  align?: DividerAlign;
  /** Whether the divider is dashed */
  dashed?: boolean;
  /** Label text to display on the divider */
  label?: string;
}
