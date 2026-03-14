import type { HTMLAttributes } from 'svelte/elements';

import type { AdvancedColumnDefinition, ColumnConfig, DataTableColumn, SortableListItem } from '../../types/interaction/table-controls';
export interface ColumnManagerProps extends HTMLAttributes<HTMLDivElement> {
  columns: ColumnConfig[];
  onColumnsChange?: (columns: ColumnConfig[]) => void;
  class?: string;
}

export interface DataTableProps<T extends Record<string, unknown>> extends HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: DataTableColumn<T>[];
  striped?: boolean;
  hoverable?: boolean;
  maxHeight?: string;
  class?: string;
  onRowClick?: (row: T) => void;
}

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


