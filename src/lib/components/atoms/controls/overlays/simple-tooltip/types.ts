/**
 * SimpleTooltip types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ISimpleTooltipProps extends HTMLAttributes<HTMLDivElement> {
  position?: TooltipPosition;
  visible?: boolean;
  content?: string;
  class?: string;
}