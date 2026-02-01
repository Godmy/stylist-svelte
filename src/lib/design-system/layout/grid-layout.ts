import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type GridItemContent = Snippet | string;

export type GridItem = {
  id: string;
  content: GridItemContent;
  colSpan?: number;
  rowSpan?: number;
  class?: string;
};

export interface GridLayoutProps extends HTMLAttributes<HTMLDivElement> {
  items: GridItem[];
  columns?: string;
  gap?: string;
  class?: string;
  itemClass?: string;
}

export const getGridLayoutContainerClass = (className = '') => {
  return `grid ${className}`.trim();
};

export const getGridLayoutItemClass = (className = '', itemClass = '') => {
  return `bg-white rounded-lg shadow p-4 ${className} ${itemClass}`.trim();
};

export const getGridLayoutStyle = (columns: string, gap: string) => {
  return `grid-template-columns: ${columns}; gap: ${gap};`;
};
