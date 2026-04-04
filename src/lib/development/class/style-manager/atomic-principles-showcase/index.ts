/**
 * Менеджер стилей для компонента AtomicPrinciplesShowcase
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class AtomicPrinciplesShowcaseStyleManager {
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
    return 'mb-8';
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-2xl font-bold text-[--color-text-primary] text-center mb-4';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-[--color-text-secondary] text-center max-w-3xl mx-auto';
  }

  /**
   * Получает CSS-классы для контейнера уровней
   */
  static getLevelsContainerClasses(): string {
    return 'space-y-8';
  }

  /**
   * Получает CSS-классы для секции уровня
   */
  static getLevelSectionClasses(): string {
    return 'relative';
  }

  /**
   * Получает CSS-классы для заголовка уровня
   */
  static getLevelHeaderClasses(): string {
    return 'flex items-center mb-4';
  }

  /**
   * Получает CSS-классы для номера уровня
   */
  static getLevelNumberClasses(): string {
    return 'w-10 h-10 rounded-full bg-[--color-primary-600] text-[--color-text-inverse] flex items-center justify-center font-bold text-lg mr-4';
  }

  /**
   * Получает CSS-классы для названия уровня
   */
  static getLevelNameClasses(): string {
    return 'text-xl font-semibold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания уровня
   */
  static getLevelDescriptionClasses(): string {
    return 'mt-2 text-[--color-text-secondary] ml-14';
  }

  /**
   * Получает CSS-классы для контейнера примеров
   */
  static getExamplesContainerClasses(): string {
    return 'mt-4 ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  }

  /**
   * Получает CSS-классы для карточки примера
   */
  static getExampleCardClasses(): string {
    return 'border border-[--color-border-primary] rounded-lg p-4 hover:shadow-md transition-shadow bg-[--color-background-secondary]';
  }

  /**
   * Получает CSS-классы для превью примера
   */
  static getExamplePreviewClasses(): string {
    return 'mb-3 p-4 bg-[--color-background-primary] rounded-md border border-[--color-border-divider]';
  }

  /**
   * Получает CSS-классы для названия примера
   */
  static getExampleNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания примера
   */
  static getExampleDescriptionClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1';
  }

  /**
   * Получает CSS-классы для соединительной линии
   */
  static getConnectorLineClasses(): string {
    return 'absolute left-5 top-14 bottom-0 w-0.5 bg-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для бейджа
   */
  static getBadgeClasses(): string {
    return 'inline-block px-2 py-1 rounded text-xs font-medium bg-[--color-info-100] text-[--color-info-800] ml-2';
  }

  /**
   * Получает CSS-классы для контейнера принципов
   */
  static getPrinciplesContainerClasses(): string {
    return 'mt-8 grid grid-cols-1 md:grid-cols-2 gap-4';
  }

  /**
   * Получает CSS-классы для карточки принципа
   */
  static getPrincipleCardClasses(): string {
    return 'p-4 rounded-lg bg-[--color-background-secondary] border border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для названия принципа
   */
  static getPrincipleNameClasses(): string {
    return 'text-sm font-semibold text-[--color-text-primary] mb-2';
  }

  /**
   * Получает CSS-классы для описания принципа
   */
  static getPrincipleDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для иконки принципа
   */
  static getPrincipleIconClasses(): string {
    return 'w-6 h-6 text-[--color-primary-600] mb-2';
  }
}
