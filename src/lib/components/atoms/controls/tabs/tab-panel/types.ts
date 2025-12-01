import type { HTMLAttributes } from 'svelte/elements';

export interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  class?: string;
  children?: any;
}