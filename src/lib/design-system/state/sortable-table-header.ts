import type { SortableTableHeaderProps } from '../props/sortable-table-header';

export const sortableTableHeaderPresets: Record<string, Partial<SortableTableHeaderProps>> = {
  default: {
    title: 'Column',
    currentSortDirection: null
  },
  ascending: {
    title: 'Column',
    currentSortDirection: 'asc'
  },
  descending: {
    title: 'Column',
    currentSortDirection: 'desc'
  }
};