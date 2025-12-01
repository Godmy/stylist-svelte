import type { HTMLAttributes } from 'svelte/elements';

export interface ITabListProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
  content?: any; // Snippet type replacement
}