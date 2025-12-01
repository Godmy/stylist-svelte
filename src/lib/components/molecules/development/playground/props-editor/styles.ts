/**
 * Менеджер стилей для компонента PropsEditor
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

export class PropsEditorStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера PropsEditor
   */
  static getContainerClasses(className?: string): string {
    return `props-editor border rounded-lg bg-white shadow-sm overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для заголовка редактора
   */
  static getHeaderClasses(): string {
    return 'p-4 border-b bg-gray-50 font-semibold text-gray-800';
  }

  /**
   * Возвращает CSS-классы для контейнера пропсов
   */
  static getPropsContainerClasses(): string {
    return 'p-4 space-y-4 max-h-96 overflow-y-auto';
  }

  /**
   * Возвращает CSS-классы для элемента пропса
   */
  static getPropItemClasses(): string {
    return 'flex flex-col space-y-2 p-3 border rounded bg-gray-50';
  }

  /**
   * Возвращает CSS-классы для метки пропса
   */
  static getPropLabelClasses(): string {
    return 'text-sm font-medium text-gray-700 flex items-center';
  }

  /**
   * Возвращает CSS-классы для описания пропса
   */
  static getPropDescriptionClasses(): string {
    return 'text-xs text-gray-500 mt-1';
  }

  /**
   * Возвращает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  }

  /**
   * Возвращает CSS-классы для чекбокса
   */
  static getCheckboxClasses(): string {
    return 'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded';
  }

  /**
   * Возвращает CSS-классы для селекта
   */
  static getSelectClasses(): string {
    return 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  }
}