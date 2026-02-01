import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface SliderTickProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  position?: number;
  active?: boolean;
  label?: string;
  class?: string;
  content?: Snippet;
}

export const DEFAULT_SLIDER_TICK_VALUE = 0;
export const DEFAULT_SLIDER_TICK_POSITION = 0;
export const DEFAULT_SLIDER_TICK_ACTIVE = false;

export const getSliderTickBaseClasses = (active: boolean, className = '') => {
  const baseClasses = 'absolute top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full';
  const activeClass = active ? 'bg-[--color-primary-600]' : 'bg-[--color-neutral-400]';
  return `${baseClasses} ${activeClass} ${className}`.trim();
};

export const getSliderTickLabelContainerClasses = () =>
  'absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap';

export const getSliderTickStyle = (position: number) => `left: ${position}%;`;
