/**
 * Менеджер стилей для компонента RecipePlaygroundShellHeader
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundShellHeaderStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'sticky top-0 z-[var(--z-index-docked)] bg-[--color-background-primary]/80 backdrop-blur-md border-b border-[--color-border-primary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для внутреннего контейнера
   */
  static getInnerContainerClasses(): string {
    return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  }

  /**
   * Получает CSS-классы для содержимого заголовка
   */
  static getHeaderContentClasses(): string {
    return 'flex items-center justify-between h-16';
  }

  /**
   * Получает CSS-классы для контейнера логотипа
   */
  static getLogoContainerClasses(): string {
    return 'flex items-center space-x-3';
  }

  /**
   * Получает CSS-классы для логотипа
   */
  static getLogoClasses(): string {
    return 'h-8 w-8 text-[--color-primary-600]';
  }

  /**
   * Получает CSS-классы для названия
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для навигации
   */
  static getNavigationClasses(): string {
    return 'hidden md:flex items-center space-x-1';
  }

  /**
   * Получает CSS-классы для элемента навигации
   */
  static getNavItemClasses(isActive: boolean): string {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
    return isActive
      ? `${baseClasses} bg-[--color-primary-100] text-[--color-primary-700] dark:bg-[--color-primary-900/30] dark:text-[--color-primary-300]`
      : `${baseClasses} text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-background-secondary]`;
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'flex items-center space-x-2';
  }

  /**
   * Получает CSS-классы для кнопки действий
   */
  static getActionButtonClasses(): string {
    return 'p-2 rounded-lg text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-background-secondary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки действий
   */
  static getActionIconClasses(): string {
    return 'h-5 w-5';
  }

  /**
   * Получает CSS-классы для контейнера поиска
   */
  static getSearchContainerClasses(): string {
    return 'relative mx-4';
  }

  /**
   * Получает CSS-классы для поля поиска
   */
  static getSearchInputClasses(): string {
    return 'w-64 pl-10 pr-4 py-2 rounded-lg border border-[--color-border-primary] bg-[--color-background-secondary] text-[--color-text-primary] placeholder-[--color-text-tertiary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent';
  }

  /**
   * Получает CSS-классы для иконки поиска
   */
  static getSearchIconClasses(): string {
    return 'absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для контейнера темы
   */
  static getThemeToggleClasses(): string {
    return 'p-2 rounded-lg text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-background-secondary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера пользователя
   */
  static getUserMenuContainerClasses(): string {
    return 'ml-4 relative';
  }

  /**
   * Получает CSS-классы для аватара пользователя
   */
  static getUserAvatarClasses(): string {
    return 'h-8 w-8 rounded-full bg-[--color-primary-600] text-[--color-text-inverse] flex items-center justify-center text-sm font-medium cursor-pointer';
  }

  /**
   * Получает CSS-классы для выпадающего меню
   */
  static getDropdownMenuClasses(): string {
    return 'absolute right-0 mt-2 w-48 rounded-lg border border-[--color-border-primary] bg-[--color-background-primary] shadow-lg py-1 z-[var(--z-index-dropdown)]';
  }

  /**
   * Получает CSS-классы для элемента выпадающего меню
   */
  static getDropdownItemClasses(): string {
    return 'px-4 py-2 text-sm text-[--color-text-primary] hover:bg-[--color-background-secondary] transition-colors cursor-pointer';
  }
}
