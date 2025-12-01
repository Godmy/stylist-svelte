import type { HTMLTableAttributes } from 'svelte/elements';

export interface ITableProps extends HTMLTableAttributes {
  caption?: string;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  content?: any; // Snippet type replacement
}