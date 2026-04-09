export class PropsEditorStyleManager {
  static root(className: string): string {
    return `c-props-editor border border-[var(--color-border-primary)] rounded-lg p-4 bg-[var(--color-background-primary)] ${className}`.trim();
  }
}
