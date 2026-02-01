/**
 * Типы и интерфейсы для компонента Breadcrumbs
 *
 * Этот компонент следует принципу единственной ответственности (SRP) из SOLID,
 * вынося определения типов в отдельный файл для лучшей изолированности и переиспользуемости.
 */

import type { IBreadcrumbItem } from './breadcrumb';

/**
 * Интерфейс для пропсов компонента Breadcrumbs
 */
export interface IBreadcrumbsProps {
  /** Массив хлебных крошек для отображения */
  crumbs: IBreadcrumbItem[];
}

/**
 * Тип для вариантов отображения хлебных крошек
 */
export type TBreadcrumbVariant = 'default' | 'compact';

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

