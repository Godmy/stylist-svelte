import type { HTMLAttributes } from 'svelte/elements';

export interface ITableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  variant?: 'header' | 'data';
  align?: 'left' | 'center' | 'right';
  content?: any; // Snippet type replacement
}