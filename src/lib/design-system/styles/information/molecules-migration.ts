export class ProductSearchStyleManager {
  static root(className: string): string {
    return `c-product-search ${className}`.trim();
  }
}

export class WishlistButtonStyleManager {
  static root(className: string): string {
    return `c-wishlist-button ${className}`.trim();
  }
}

export class CodeEditorStyleManager {
  static root(className: string): string {
    return `c-code-editor border border-[var(--color-border-default)] rounded-lg bg-[var(--color-background-primary)] ${className}`.trim();
  }

  static button(): string {
    return 'px-2 py-1 text-xs border border-[var(--color-border-default)] rounded hover:bg-[var(--color-background-secondary)]';
  }
}

export class PropsEditorStyleManager {
  static root(className: string): string {
    return `c-props-editor border border-[var(--color-border-default)] rounded-lg p-4 bg-[var(--color-background-primary)] ${className}`.trim();
  }
}

export class GraphvizDirectedEdgeStyleManager {
  static root(className: string): string {
    return `c-graphviz-directed-edge absolute inset-0 ${className}`.trim();
  }
}
