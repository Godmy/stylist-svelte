export class TableExtendedStyleManager {
  static root(base: string, className: string): string {
    return `${base} ${className}`.trim();
  }
}
