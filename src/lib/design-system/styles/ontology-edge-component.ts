export class OntologyEdgeComponentStyleManager {
  static getEdgeStyle(relationshipType: string) {
    switch (relationshipType) {
      case 'subClassOf': return { color: 'stroke-[--color-blue-500]', style: 'stroke-dasharray: 5, 5', marker: 'url(#arrowhead-subclass)' };
      case 'equivalentClass': return { color: 'stroke-[--color-purple-500]', style: 'stroke-dasharray: 2, 6', marker: 'url(#arrowhead-equivalent)' };
      case 'disjointWith': return { color: 'stroke-[--color-red-500]', style: 'stroke-dasharray: 10, 5', marker: 'url(#arrowhead-disjoint)' };
      case 'domain':
      case 'range': return { color: 'stroke-[--color-green-500]', style: 'stroke: 2', marker: 'url(#arrowhead-domain-range)' };
      case 'subPropertyOf': return { color: 'stroke-[--color-yellow-500]', style: 'stroke-dasharray: 5, 5', marker: 'url(#arrowhead-subproperty)' };
      default: return { color: 'stroke-[--color-gray-400]', style: 'stroke: 1', marker: 'url(#arrowhead-default)' };
    }
  }

  static getBaseClasses(additionalClass: string = ''): string {
    return `c-ontology-edge-component absolute top-0 left-0 w-full h-full ${additionalClass}`.trim();
  }
}