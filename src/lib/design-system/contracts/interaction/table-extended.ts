import type { HTMLAttributes } from 'svelte/elements';

import type { TableRecord } from '../../types/interaction/table-extended';
export interface TableWithFiltersProps extends HTMLAttributes<HTMLDivElement> {
  data: TableRecord[];
  columns: string[];
  class?: string;
}

export interface TableWithGroupingProps extends HTMLAttributes<HTMLDivElement> {
  data: TableRecord[];
  groupBy: string;
  class?: string;
}

export interface TableWithStripesProps extends HTMLAttributes<HTMLDivElement> {
  data: TableRecord[];
  columns: string[];
  class?: string;
}


