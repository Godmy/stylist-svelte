import type { HTMLAttributes } from 'svelte/elements';

export interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  content?: any; // Snippet type replacement
}