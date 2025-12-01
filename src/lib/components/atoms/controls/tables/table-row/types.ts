import type { HTMLAttributes } from 'svelte/elements';

export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  striped?: boolean;
  active?: boolean;
  content?: any; // Snippet type replacement
}