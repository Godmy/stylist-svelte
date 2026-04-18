/**
 * Менеджер стилей для компонента RecipeDesignTokens
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class DesignTokensStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(): string {
    return 'mb-6';
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для сетки токенов
   */
  static getTokensGridClasses(): string {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  }

  /**
   * Получает CSS-классы для карточки токена
   */
  static getTokenCardClasses(): string {
    return 'border border-[--color-border-primary] rounded-lg p-4 hover:shadow-md transition-shadow';
  }

  /**
   * Получает CSS-классы для превью токена
   */
  static getTokenPreviewClasses(color: string): string {
    return `${color} h-16 rounded-md mb-3 border border-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для названия токена
   */
  static getTokenNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для значения токена
   */
  static getTokenValueClasses(): string {
    return 'text-xs text-[--color-text-secondary] font-mono mt-1';
  }

  /**
   * Получает CSS-классы для категории токенов
   */
  static getTokenCategoryClasses(): string {
    return 'inline-block px-2 py-1 rounded text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800] mt-2';
  }

  /**
   * Получает CSS-классы для контейнера секции
   */
  static getSectionContainerClasses(): string {
    return 'mb-8';
  }

  /**
   * Получает CSS-классы для заголовка секции
   */
  static getSectionTitleClasses(): string {
    return 'text-lg font-semibold text-[--color-text-primary] mb-4';
  }

  /**
   * Получает CSS-классы для таблицы токенов
   */
  static getTokensTableClasses(): string {
    return 'w-full border-collapse';
  }

  /**
   * Получает CSS-классы для строки таблицы
   */
  static getTableRowClasses(): string {
    return 'border-b border-[--color-border-divider] hover:bg-[--color-background-secondary]';
  }

  /**
   * Получает CSS-классы для ячейки таблицы
   */
  static getTableCellClasses(): string {
    return 'px-4 py-3 text-sm';
  }

  /**
   * Получает CSS-классы для ячейки-превью
   */
  static getPreviewCellClasses(): string {
    return 'w-24';
  }

  /**
   * Получает CSS-классы для превью цвета
   */
  static getColorPreviewClasses(color: string): string {
    return `${color} w-12 h-8 rounded border border-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для ячейки названия
   */
  static getNameCellClasses(): string {
    return 'font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для ячейки значения
   */
  static getValueCellClasses(): string {
    return 'font-mono text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для кнопки копирования
   */
  static getCopyButtonClasses(): string {
    return 'p-1 rounded hover:bg-[--color-background-tertiary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки копирования
   */
  static getCopyIconClasses(): string {
    return 'w-4 h-4 text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера фильтров
   */
  static getFiltersContainerClasses(): string {
    return 'mb-6 flex flex-wrap gap-2';
  }

  /**
   * Получает CSS-классы для кнопки фильтра
   */
  static getFilterButtonClasses(isActive: boolean): string {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium transition-colors';
    return isActive
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-secondary] hover:text-[--color-text-primary]`;
  }
}
