export class OntologyNodeComponentStyleManager {
  static getNodeStyle(nodeType: string) {
    switch (nodeType) {
      case 'class': return { shape: 'rounded-lg', border: 'border-[--color-info-500]', bg: 'bg-[--color-info-50]', text: 'text-[--color-info-700]', icon: 'square' };
      case 'object-property': return { shape: 'rounded-full', border: 'border-[--color-success-500]', bg: 'bg-[--color-success-50]', text: 'text-[--color-success-700]', icon: 'arrow-right' };
      case 'datatype-property': return { shape: 'rounded-md', border: 'border-[--color-secondary-500]', bg: 'bg-[--color-secondary-50]', text: 'text-[--color-secondary-700]', icon: 'database' };
      case 'datatype': return { shape: 'rounded', border: 'border-[--color-warning-500]', bg: 'bg-[--color-warning-50]', text: 'text-[--color-warning-700]', icon: 'type' };
      case 'deprecated': return { shape: 'rounded-lg line-through', border: 'border-[--color-neutral-400]', bg: 'bg-[--color-neutral-100]', text: 'text-[--color-neutral-500]', icon: 'x' };
      case 'equivalent-class': return { shape: 'rounded-lg border-dashed', border: 'border-[--color-primary-500]', bg: 'bg-[--color-primary-50]', text: 'text-[--color-primary-700]', icon: 'zap' };
      default: return { shape: 'rounded-lg', border: 'border-[--color-neutral-400]', bg: 'bg-[--color-neutral-50]', text: 'text-[--color-neutral-700]', icon: 'circle' };
    }
  }

  static getBaseClasses(nodeType: string, additionalClass: string = ''): string {
    const style = this.getNodeStyle(nodeType);
    return `c-ontology-node-component border-2 p-2 flex flex-col items-center justify-center text-center text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200 ${style.shape} ${style.border} ${style.bg} ${style.text} ${additionalClass}`.trim();
  }
}