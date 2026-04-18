/**
 * Менеджер стилей для компонента RecipeReturnPolicy
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class ReturnPolicyStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-b px-6 py-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера содержимого
   */
  static getContentContainerClasses(): string {
    return 'p-6';
  }

  /**
   * Получает CSS-классы для секции
   */
  static getSectionClasses(): string {
    return 'mb-6';
  }

  /**
   * Получает CSS-классы для заголовка секции
   */
  static getSectionTitleClasses(): string {
    return 'text-base font-medium text-[--color-text-primary] mb-3 flex items-center';
  }

  /**
   * Получает CSS-классы для описания политики
   */
  static getPolicyDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary] mb-4';
  }

  /**
   * Получает CSS-классы для списка условий
   */
  static getConditionsListClasses(): string {
    return 'space-y-3';
  }

  /**
   * Получает CSS-классы для элемента условия
   */
  static getConditionItemClasses(): string {
    return 'border rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для заголовка условия
   */
  static getConditionTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-1';
  }

  /**
   * Получает CSS-классы для описания условия
   */
  static getConditionDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для списка шагов
   */
  static getStepsListClasses(): string {
    return 'space-y-4';
  }

  /**
   * Получает CSS-классы для элемента шага
   */
  static getStepItemClasses(): string {
    return 'flex items-start';
  }

  /**
   * Получает CSS-классы для номера шага
   */
  static getStepNumberClasses(): string {
    return 'flex-shrink-0 w-8 h-8 rounded-full bg-[--color-primary-100] text-[--color-primary-700] flex items-center justify-center text-sm font-bold mr-3';
  }

  /**
   * Получает CSS-классы для содержимого шага
   */
  static getStepContentClasses(): string {
    return 'flex-1';
  }

  /**
   * Получает CSS-классы для заголовка шага
   */
  static getStepTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания шага
   */
  static getStepDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для списка FAQ
   */
  static getFaqListClasses(): string {
    return 'space-y-3';
  }

  /**
   * Получает CSS-классы для элемента FAQ
   */
  static getFaqItemClasses(): string {
    return 'border rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для вопроса FAQ
   */
  static getFaqQuestionClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-2';
  }

  /**
   * Получает CSS-классы для ответа FAQ
   */
  static getFaqAnswerClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера информации о доставке
   */
  static getShippingInfoClasses(): string {
    return 'bg-[--color-background-secondary] rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для элемента информации о доставке
   */
  static getShippingInfoItemClasses(): string {
    return 'flex items-center justify-between py-2';
  }

  /**
   * Получает CSS-классы для метки информации о доставке
   */
  static getShippingInfoLabelClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения информации о доставке
   */
  static getShippingInfoValueClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для кнопки
   */
  static getButtonClasses(variant: 'primary' | 'secondary'): string {
    const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    return variant === 'primary'
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для бейджа
   */
  static getBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-info-100] text-[--color-info-800]';
  }
}
