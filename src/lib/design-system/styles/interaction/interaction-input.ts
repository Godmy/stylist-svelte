export class InteractionInputStyleManager {
  static root(base: string, className: string): string {
    return `${base} ${className}`.trim();
  }

  static panel(className: string): string {
    return `bg-[--color-background-primary] border border-[--color-border-default] rounded-lg shadow-sm ${className}`.trim();
  }

  static input(className: string): string {
    return `border border-[--color-border-default] rounded-md ${className}`.trim();
  }
}
