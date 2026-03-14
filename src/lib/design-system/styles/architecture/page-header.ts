/**
 * Менеджер стилей для компонента PageHeader
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */
import { cn } from '../../utils/cn/index';

export class PageHeaderStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера PageHeader
   */
  static getContainerClasses(className?: string): string {
    return cn(
      'page-header border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)]',
      className
    );
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
    return 'flex items-center text-sm text-[var(--color-text-tertiary)]';
  }

  /**
   * Возвращает CSS-классы для элемента хлебных крошек
   */
  static getBreadcrumbItemClasses(isLast: boolean): string {
    return isLast
      ? 'font-medium text-[var(--color-text-primary)]'
      : 'transition-colors duration-[var(--duration-150)] hover:text-[var(--color-text-primary)]';
  }

  /**
   * Возвращает CSS-классы для разделителя хлебных крошек
   */
  static getBreadcrumbSeparatorClasses(): string {
    return 'mx-2 text-[var(--color-text-tertiary)]';
  }

  /**
   * Возвращает CSS-классы для основного заголовка
   */
  static getTitleClasses(): string {
    return 'mb-1 text-2xl font-bold text-[var(--color-text-primary)]';
  }

  /**
   * Возвращает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-[var(--color-text-secondary)]';
  }

  /**
   * Возвращает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'flex items-center justify-between gap-4';
  }

  /**
   * Возвращает CSS-классы для контента (заголовок, описание, хлебные крошки)
   */
  static getContentClasses(): string {
    return 'flex-1';
  }
}



