/**
 * Менеджер стилей для компонента OperationsHistory
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только управление стилями компонента
 * - Не содержит бизнес-логики
 * - Генерирует CSS-классы на основе входных параметров
 */

/**
 * @class OperationsHistoryStyleManager
 * @description Класс для управления стилями компонента OperationsHistory
 */
export class OperationsHistoryStyleManager {
  /**
   * Возвращает основные CSS-классы для компонента
   * @param {string} additionalClass - дополнительные CSS-классы
   * @returns {string} строка с CSS-классами
   */
  static getBaseClasses(additionalClass: string = ''): string {
    return `operations-history border border-[--color-gray-300] rounded-md dark:border-[--color-gray-600] bg-white dark:bg-[--color-gray-800] overflow-hidden ${additionalClass}`.trim();
  }

  /**
   * Возвращает CSS-классы для тулбара
   * @returns {string} строка с CSS-классами
   */
  static getToolbarClasses(): string {
    return 'toolbar bg-[--color-gray-100] dark:bg-[--color-gray-700] border-b border-[--color-gray-200] dark:border-[--color-gray-600] p-2 flex items-center justify-between';
  }

  /**
   * Возвращает CSS-классы для поля поиска
   * @returns {string} строка с CSS-классами
   */
  static getSearchInputClasses(): string {
    return 'px-2 py-1 text-xs border border-[--color-gray-300] rounded-sm focus:outline-none focus:ring-1 focus:ring-[--color-indigo-500] dark:bg-[--color-gray-600] dark:border-[--color-gray-500] dark:text-white';
  }

  /**
   * Возвращает CSS-классы для элемента операции
   * @param {boolean} isSelected - является ли операция выбранной
   * @returns {string} строка с CSS-классами
   */
  static getOperationItemClasses(isSelected: boolean): string {
    const baseClasses = 'p-3 hover:bg-[--color-gray-50] dark:hover:bg-[--color-gray-750] cursor-pointer transition-colors w-full text-left border border-transparent rounded hover:shadow-sm';
    const selectedClasses = isSelected ? 'bg-[--color-indigo-50] dark:bg-[--color-indigo-900]/30 border-[--color-indigo-200] dark:border-[--color-indigo-700]' : '';
    return `${baseClasses} ${selectedClasses}`.trim();
  }

  /**
   * Возвращает CSS-классы для текста статуса
   * @param {'success' | 'error' | 'pending'} status - статус операции
   * @returns {string} строка с CSS-классами
   */
  static getStatusTextClasses(status: 'success' | 'error' | 'pending'): string {
    switch (status) {
      case 'success':
        return 'text-[--color-green-700] dark:text-[--color-green-300]';
      case 'error':
        return 'text-[--color-red-700] dark:text-[--color-red-300]';
      case 'pending':
        return 'text-[--color-yellow-700] dark:text-[--color-yellow-300]';
      default:
        return 'text-[--color-gray-700] dark:text-[--color-gray-300]';
    }
  }

  /**
   * Возвращает CSS-классы для фона статуса в Badge
   * @param {'success' | 'error' | 'pending'} status - статус операции
   * @returns {string} строка с CSS-классами
   */
  static getStatusBadgeVariant(status: 'success' | 'error' | 'pending'): string {
    switch (status) {
      case 'success':
        return 'success';
      case 'error':
        return 'danger';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  }

  /**
   * Возвращает CSS-классы для контейнера результатов
   * @returns {string} строка с CSS-классами
   */
  static getResultsContainerClasses(): string {
    return 'overflow-y-auto max-h-64';
  }
}