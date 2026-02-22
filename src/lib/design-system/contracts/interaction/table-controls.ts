import type { HTMLAttributes } from 'svelte/elements';

export type ColumnConfig = {
  key: string;
  header: string;
  visible: boolean;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
};

export interface ColumnManagerProps extends HTMLAttributes<HTMLDivElement> {
  columns: ColumnConfig[];
  onColumnsChange?: (columns: ColumnConfig[]) => void;
  class?: string;
}

export type DataTableColumn<T extends Record<string, unknown>> = {
  key: keyof T;
  title: string;
  sortable?: boolean;
  headerClass?: string;
  cellClass?: string;
  render?: (value: unknown, row: T) => string;
};

export interface DataTableProps<T extends Record<string, unknown>> extends HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: DataTableColumn<T>[];
  striped?: boolean;
  hoverable?: boolean;
  maxHeight?: string;
  class?: string;
  onRowClick?: (row: T) => void;
}

export type AdvancedColumnDefinition<T extends Record<string, unknown>> = {
  key: keyof T;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  renderCell?: (item: T) => unknown;
  width?: string;
};

export interface DataTableAdvancedProps<T extends Record<string, unknown>> extends HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: AdvancedColumnDefinition<T>[];
  title?: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showFilters?: boolean;
  showExport?: boolean;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  class?: string;
  onExport?: () => void;
  onRowClick?: (item: T) => void;
  loading?: boolean;
}

export type SortableListItem = {
  id: string;
  title: string;
  description?: string;
  content?: string;
  status?: string;
  data?: unknown;
};

export interface SortableListProps extends HTMLAttributes<HTMLDivElement> {
  items: SortableListItem[];
  class?: string;
  onItemsChange?: (items: SortableListItem[]) => void;
  onItemAction?: (item: SortableListItem, action: string) => void;
  disabled?: boolean;
  showHandle?: boolean;
  showActions?: boolean;
  variant?: 'minimal' | 'card' | 'compact';
}

