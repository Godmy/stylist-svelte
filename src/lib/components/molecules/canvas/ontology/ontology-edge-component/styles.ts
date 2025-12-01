/**
 * Менеджер стилей для компонента OntologyEdgeComponent
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только управление стилями компонента
 * - Не содержит бизнес-логики
 * - Генерирует CSS-классы на основе входных параметров
 */

/**
 * @class OntologyEdgeComponentStyleManager
 * @description Класс для управления стилями компонента OntologyEdgeComponent
 */
export class OntologyEdgeComponentStyleManager {
  /**
   * Возвращает стиль для ребра на основе типа отношения
   * @param {string} relationshipType - тип отношения (subClassOf, equivalentClass и т.д.)
   * @returns {Object} объект со стилями для ребра
   */
  static getEdgeStyle(relationshipType: string) {
    switch (relationshipType) {
      case 'subClassOf':
        return {
          color: 'stroke-[--color-blue-500]',
          style: 'stroke-dasharray: 5, 5',
          marker: 'url(#arrowhead-subclass)'
        };
      case 'equivalentClass':
        return {
          color: 'stroke-[--color-purple-500]',
          style: 'stroke-dasharray: 2, 6',
          marker: 'url(#arrowhead-equivalent)'
        };
      case 'disjointWith':
        return {
          color: 'stroke-[--color-red-500]',
          style: 'stroke-dasharray: 10, 5',
          marker: 'url(#arrowhead-disjoint)'
        };
      case 'domain':
      case 'range':
        return {
          color: 'stroke-[--color-green-500]',
          style: 'stroke: 2',
          marker: 'url(#arrowhead-domain-range)'
        };
      case 'subPropertyOf':
        return {
          color: 'stroke-[--color-yellow-500]',
          style: 'stroke-dasharray: 5, 5',
          marker: 'url(#arrowhead-subproperty)'
        };
      default:
        return {
          color: 'stroke-[--color-gray-400]',
          style: 'stroke: 1',
          marker: 'url(#arrowhead-default)'
        };
    }
  }

  /**
   * Возвращает основные CSS-классы для компонента
   * @param {string} additionalClass - дополнительные CSS-классы
   * @returns {string} строка с CSS-классами
   */
  static getBaseClasses(additionalClass: string = ''): string {
    return `absolute top-0 left-0 w-full h-full ${additionalClass}`.trim();
  }
}