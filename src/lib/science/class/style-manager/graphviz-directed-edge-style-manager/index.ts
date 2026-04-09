export class GraphvizDirectedEdgeStyleManager {
  static root(className: string): string {
    return `c-graphviz-directed-edge absolute inset-0 ${className}`.trim();
  }
}
