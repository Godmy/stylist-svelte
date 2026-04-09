export class CodeEditorStyleManager {
  static root(className: string): string {
    return `c-code-editor border border-[var(--color-border-primary)] rounded-lg bg-[var(--color-background-primary)] ${className}`.trim();
  }

  static button(): string {
    return 'px-2 py-1 text-xs border border-[var(--color-border-primary)] rounded hover:bg-[var(--color-background-secondary)]';
  }
}
