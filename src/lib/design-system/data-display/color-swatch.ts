import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ColorSwatchProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
  class?: string;
  content?: Snippet;
}

export const getColorSwatchClasses = (className = '') => {
  return `rounded-md border border-[--color-border-primary] shadow-sm ${className}`.trim();
};

export const getColorSwatchStyle = (color: string, size: number) => {
  return `background-color: ${color}; width: ${size}px; height: ${size}px;`;
};
