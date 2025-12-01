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