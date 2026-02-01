import type { Snippet } from 'svelte';

export interface AspectRatioProps {
  children: Snippet;
  ratio?: number;
  class?: string;
}

export const getAspectRatioClasses = (className = '') => {
  return `relative w-full [aspect-ratio:var(--aspect-ratio)] ${className}`.trim();
};
