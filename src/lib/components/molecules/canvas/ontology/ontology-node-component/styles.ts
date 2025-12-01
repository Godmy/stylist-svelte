/**
 * Менеджер стилей для компонента OntologyNodeComponent
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только управление стилями компонента
 * - Не содержит бизнес-логики
 * - Генерирует CSS-классы на основе входных параметров
 */

/**
 * @class OntologyNodeComponentStyleManager
 * @description Класс для управления стилями компонента OntologyNodeComponent
 */
export class OntologyNodeComponentStyleManager {
  /**
   * Возвращает стили для узла на основе его типа
   * @param {string} nodeType - тип узла (class, object-property и т.д.)
   * @returns {Object} объект со стилями для узла
   */
  static getNodeStyle(nodeType: string) {
    switch (nodeType) {
      case 'class':
        return {
          shape: 'rounded-lg',
          border: 'border-[--color-blue-500]',
          bg: 'bg-[--color-blue-50]',
          text: 'text-[--color-blue-700]',
          icon: 'square'
        };
      case 'object-property':
        return {
          shape: 'rounded-full',
          border: 'border-[--color-green-500]',
          bg: 'bg-[--color-green-50]',
          text: 'text-[--color-green-700]',
          icon: 'arrow-right'
        };
      case 'datatype-property':
        return {
          shape: 'rounded-md',
          border: 'border-[--color-purple-500]',
          bg: 'bg-[--color-purple-50]',
          text: 'text-[--color-purple-700]',
          icon: 'database'
        };
      case 'datatype':
        return {
          shape: 'rounded',
          border: 'border-[--color-yellow-500]',
          bg: 'bg-[--color-yellow-50]',
          text: 'text-[--color-yellow-700]',
          icon: 'type'
        };
      case 'deprecated':
        return {
          shape: 'rounded-lg line-through',
          border: 'border-[--color-gray-400]',
          bg: 'bg-[--color-gray-100]',
          text: 'text-[--color-gray-500]',
          icon: 'x'
        };
      case 'equivalent-class':
        return {
          shape: 'rounded-lg border-dashed',
          border: 'border-[--color-indigo-500]',
          bg: 'bg-[--color-indigo-50]',
          text: 'text-[--color-indigo-700]',
          icon: 'zap'
        };
      default:
        return {
          shape: 'rounded-lg',
          border: 'border-[--color-gray-400]',
          bg: 'bg-[--color-gray-50]',
          text: 'text-[--color-gray-700]',
          icon: 'circle'
        };
    }
  }

  /**
   * Возвращает основные CSS-классы для компонента
   * @param {string} nodeType - тип узла
   * @param {string} additionalClass - дополнительные CSS-классы
   * @returns {string} строка с CSS-классами
   */
  static getBaseClasses(nodeType: string, additionalClass: string = ''): string {
    const style = this.getNodeStyle(nodeType);
    return `border-2 p-2 flex flex-col items-center justify-center text-center text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200 ${style.shape} ${style.border} ${style.bg} ${style.text} ${additionalClass}`.trim();
  }
}