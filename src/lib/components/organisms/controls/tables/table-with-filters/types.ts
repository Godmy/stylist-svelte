/**
 * TableWithFilters types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type FilterType = 'text' | 'select' | 'date' | 'number';

export interface IFilterOption {
  value: string;
  label: string;
}

export interface IColumn {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: FilterType;
  filterOptions?: IFilterOption[];
  cellClass?: string;
  headerClass?: string;
  render?: (value: any, item: any) => string;
}

export interface ITableWithFiltersSortConfig {
  key: string | null;
  direction: 'asc' | 'desc';
}

export interface IFilterConfig {
  [key: string]: string;
}

export interface ITableWithFiltersProps extends HTMLAttributes<HTMLDivElement> {
  data: any[];
  columns: IColumn[];
  striped?: boolean;
  hoverable?: boolean;
  showFilters?: boolean;
  class?: string;
  tableClass?: string;
  theadClass?: string;
  tbodyClass?: string;
  trClass?: string;
  thClass?: string;
  tdClass?: string;
  onRowClick?: (item: any) => void;
}

export interface ITableStyleClasses {
  wrapper: string;
  table: string;
  thead: string;
  tbody: string;
  tr: string;
  th: string;
  td: string;
  filterContainer: string;
  filterItem: string;
  filterInput: string;
  sortIndicator: string;
}