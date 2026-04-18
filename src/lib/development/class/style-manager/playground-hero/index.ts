/**
 * Менеджер стилей для компонента RecipePlaygroundHero
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundHeroStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'relative overflow-hidden bg-gradient-to-br from-[--color-primary-50] to-[--color-background-secondary] dark:from-[--color-primary-900/20] dark:to-[--color-background-primary] rounded-2xl p-8 md:p-12';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-text-primary] mb-4';
  }

  /**
   * Получает CSS-классы для подзаголовка
   */
  static getSubtitleClasses(): string {
    return 'text-lg md:text-xl text-[--color-text-secondary] mb-6';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-base md:text-lg text-[--color-text-secondary] max-w-3xl mb-8';
  }

  /**
   * Получает CSS-классы для бейджа
   */
  static getBadgeClasses(): string {
    return 'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[--color-primary-100] text-[--color-primary-800] dark:bg-[--color-primary-900/30] dark:text-[--color-primary-300] mb-6';
  }

  /**
   * Получает CSS-классы для контейнера AI моделей
   */
  static getAiModelsContainerClasses(): string {
    return 'mt-8 grid grid-cols-2 md:grid-cols-4 gap-4';
  }

  /**
   * Получает CSS-классы для карточки AI модели
   */
  static getAiModelCardClasses(bgColor: string): string {
    return `${bgColor} rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105`;
  }

  /**
   * Получает CSS-классы для названия AI модели
   */
  static getAiModelNameClasses(): string {
    return 'text-sm font-semibold text-[--color-text-primary] mt-2';
  }

  /**
   * Получает CSS-классы для описания AI модели
   */
  static getAiModelDescriptionClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1';
  }

  /**
   * Получает CSS-классы для контейнера частиц
   */
  static getParticlesContainerClasses(): string {
    return 'absolute inset-0 pointer-events-none';
  }

  /**
   * Получает CSS-классы для частицы
   */
  static getParticleClasses(): string {
    return 'absolute w-2 h-2 bg-[--color-primary-400/20] rounded-full animate-float';
  }

  /**
   * Получает CSS-классы для контейнера кнопок действий
   */
  static getActionsContainerClasses(): string {
    return 'mt-8 flex flex-wrap gap-4';
  }

  /**
   * Получает CSS-классы для основной кнопки
   */
  static getPrimaryButtonClasses(): string {
    return 'px-6 py-3 bg-[--color-primary-600] text-[--color-text-inverse] font-medium rounded-lg hover:bg-[--color-primary-700] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для вторичной кнопки
   */
  static getSecondaryButtonClasses(): string {
    return 'px-6 py-3 bg-[--color-background-primary] text-[--color-text-primary] font-medium rounded-lg border border-[--color-border-primary] hover:bg-[--color-background-secondary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-6 w-6 mr-2';
  }

  /**
   * Получает CSS-классы для контейнера "Powered by"
   */
  static getPoweredByContainerClasses(): string {
    return 'mt-8 text-center';
  }

  /**
   * Получает CSS-классы для текста "Powered by"
   */
  static getPoweredByTextClasses(): string {
    return 'text-sm text-[--color-text-tertiary]';
  }
}
