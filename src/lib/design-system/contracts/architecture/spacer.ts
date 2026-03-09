import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

/**
 * Spacer Props
 * Used for adding spacing between elements
 */
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the spacer */
  size?: ComponentSize;
  /** Axis of the spacer */
  axis?: Orientation;
  /** Custom class name */
  class?: string;
}
