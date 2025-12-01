import type { TBreadcrumbVariant } from './types';

/**
 * Менеджер стилей для компонента Breadcrumbs
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID,
 * вынося логику стилизации в отдельный класс.
 * Использует CSS-переменные из темы для обеспечения темизации.
 */
export class BreadcrumbsStyleManager {
  
  /**
   * Получить CSS-классы для контейнера хлебных крошек
   */
  static getContainerClasses(): string {
    return 'flex items-center text-sm';
  }

  /**
   * Получить CSS-классы для списка хлебных крошек
   */
  static getListClasses(): string {
    return 'flex items-center space-x-2';
  }

  /**
   * Получить CSS-классы для элемента списка хлебной крошки
   */
  static getItemClasses(): string {
    return 'flex items-center';
  }

  /**
   * Получить CSS-классы для иконки разделителя
   */
  static getSeparatorClasses(): string {
    return 'h-5 w-5 text-[--color-text-secondary] mx-2';
  }

  /**
   * Получить CSS-классы для активной ссылки
   */
  static getActiveLinkClasses(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors duration-200';
  }

  /**
   * Получить CSS-классы для текущего (неактивного) элемента
   */
  static getCurrentItemClasses(): string {
    return 'text-[--color-text-primary] font-medium';
  }
}