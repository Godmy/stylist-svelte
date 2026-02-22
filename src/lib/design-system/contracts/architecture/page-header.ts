import type { HTMLAttributes } from 'svelte/elements';

export interface IPageHeaderProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  class?: string;
}
