import type { HTMLAttributes } from 'svelte/elements';

export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
  selectedId?: string;
  onTabChange?: (id: string) => void;
  class?: string;
  content?: any; // Snippet type replacement
}