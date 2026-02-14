export class ColumnManagerStyleManager {
  static root(className: string): string {
    return `c-column-manager bg-white rounded-lg shadow p-4 ${className}`.trim();
  }
}

export class DataTableStyleManager {
  static root(className: string): string {
    return `c-data-table overflow-auto ${className}`.trim();
  }
}

export class DataTableAdvancedStyleManager {
  static root(className: string): string {
    return `c-data-table-advanced ${className}`.trim();
  }
}

export class SortableListStyleManager {
  static root(className: string): string {
    return `c-sortable-list ${className}`.trim();
  }
}

