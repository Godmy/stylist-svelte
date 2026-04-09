export class ColumnManagerStyleManager {
  static root(className: string): string {
    return `c-column-manager bg-[--color-background-primary] rounded-lg shadow p-4 ${className}`.trim();
  }
}
