import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ITabProps extends HTMLButtonAttributes {
  id: string;
  selected?: boolean;
  class?: string;
  children?: any;
}