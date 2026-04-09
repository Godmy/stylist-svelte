export class DataTableStyleManager {
  static root(className: string): string {
    return `c-data-table overflow-auto ${className}`.trim();
  }
}
