import type { HTMLAttributes } from 'svelte/elements';

/**
 * Spacer Props
 * Used for adding spacing between elements
 */
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the spacer */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Axis of the spacer */
  axis?: 'horizontal' | 'vertical';
  /** Custom class name */
  class?: string;
}
