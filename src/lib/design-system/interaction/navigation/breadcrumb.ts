/**
 * Типы для компонента Breadcrumb
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента Breadcrumb
 */

/**
 * Интерфейс элемента навигационной цепочки
 */
export interface IBreadcrumbItem {
  /**
   * Отображаемая метка элемента
   */
  label: string;
  
  /**
   * URL-адрес элемента
   */
  href?: string;
}

/**
 * Интерфейс пропсов компонента Breadcrumb
 */
export interface IBreadcrumbProps {
  /**
   * Массив элементов навигационной цепочки
   */
  items: IBreadcrumbItem[];
  
  /**
   * Дополнительный CSS класс для контейнера
   */
  class?: string;
}

/**
 * Менеджер стилей для компонента Breadcrumb
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента Breadcrumb
 */

export class BreadcrumbStyleManager {
  /**
   * Получает CSS-классы для основного контейнера навигационной цепочки
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'flex items-center space-x-2 text-sm text-[--color-text-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для элемента навигационной цепочки
   */
  static getItemClasses(isLast: boolean = false): string {
    const baseClasses = 'flex items-center';
    return baseClasses;
  }

  /**
   * Получает CSS-классы для разделителя
   */
  static getSeparatorClasses(): string {
    return 'flex-shrink-0 h-5 w-5 text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для ссылки элемента
   */
  static getLinkClasses(isLast: boolean = false): string {
    const baseClasses = 'ml-2 text-sm font-medium';
    const colorClasses = isLast 
      ? 'text-[--color-text-primary] cursor-default' 
      : 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
    return `${baseClasses} ${colorClasses}`;
  }
}

