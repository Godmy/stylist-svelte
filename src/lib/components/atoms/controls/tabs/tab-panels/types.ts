import type { HTMLAttributes } from 'svelte/elements';

export interface ITabPanelsProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
  content?: any; // Snippet type replacement
}