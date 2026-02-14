/**
 * Менеджер стилей для компонента PageHeader
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

export class PageHeaderStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера PageHeader
   */
  static getContainerClasses(className?: string): string {
    return `page-header border-b border-gray-200 bg-white ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для контейнера хлебных крошек
   */
  static getBreadcrumbsContainerClasses(): string {
    return 'mb-2';
  }

  /**
   * Возвращает CSS-классы для списка хлебных крошек
   */
  static getBreadcrumbsListClasses(): string {
    return 'flex items-center text-sm text-gray-500';
  }

  /**
   * Возвращает CSS-классы для элемента хлебных крошек
   */
  static getBreadcrumbItemClasses(isLast: boolean): string {
    return isLast 
      ? 'text-gray-900 font-medium' 
      : 'hover:text-gray-700 transition-colors duration-150';
  }

  /**
   * Возвращает CSS-классы для разделителя хлебных крошек
   */
  static getBreadcrumbSeparatorClasses(): string {
    return 'mx-2 text-gray-400';
  }

  /**
   * Возвращает CSS-классы для основного заголовка
   */
  static getTitleClasses(): string {
    return 'text-2xl font-bold text-gray-900 mb-1';
  }

  /**
   * Возвращает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-gray-600';
  }

  /**
   * Возвращает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'flex items-center justify-between';
  }

  /**
   * Возвращает CSS-классы для контента (заголовок, описание, хлебные крошки)
   */
  static getContentClasses(): string {
    return 'flex-1';
  }
}