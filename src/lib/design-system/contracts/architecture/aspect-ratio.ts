import type { HTMLAttributes } from 'svelte/elements';

/**
 * Aspect Ratio Props
 * Used for maintaining aspect ratios in containers
 */
export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio value (e.g., 16/9, 4/3, 1) */
  ratio?: number;
  /** Custom class name */
  class?: string;
  /** Content to display within the aspect ratio container */
  children?: any;
}
