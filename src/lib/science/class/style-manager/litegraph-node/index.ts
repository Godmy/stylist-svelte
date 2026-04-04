/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class LiteGraphNodeStyleManager {
  static getNodeClasses(className?: string): string {
    return `litegraph-node ${className ?? ''}`.trim();
  }

  static getHeaderClasses(): string {
    return 'litegraph-node__header';
  }

  static getBodyClasses(): string {
    return 'litegraph-node__body';
  }

  static getPortsClasses(): string {
    return 'litegraph-node__ports';
  }

  static getPropertiesClasses(): string {
    return 'litegraph-node__properties';
  }

  static getContentClasses(): string {
    return 'litegraph-node__content';
  }

  static getSemanticShellClasses(): string {
    return 'litegraph-node__semantic-shell';
  }

  static getSemanticIconClasses(): string {
    return 'litegraph-node__semantic-icon';
  }

  static getSemanticTitleClasses(): string {
    return 'litegraph-node__semantic-title';
  }

  static getSemanticDescriptionClasses(): string {
    return 'litegraph-node__semantic-description';
  }
}
