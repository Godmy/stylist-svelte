/**
 * Менеджер стилей для компонента RecipePlaygroundToast
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundToastStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'fixed bottom-4 right-4 z-[var(--z-index-toast)] flex flex-col space-y-2';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для элемента toast
   */
  static getToastClasses(type: 'success' | 'error' | 'warning' | 'info'): string {
    const baseClasses = 'flex items-center w-full max-w-sm p-4 rounded-lg shadow-lg border transform transition-all duration-300 ease-in-out';
    switch (type) {
      case 'success':
        return `${baseClasses} bg-[--color-success-50] border-[--color-success-200] text-[--color-success-800]`;
      case 'error':
        return `${baseClasses} bg-[--color-error-50] border-[--color-error-200] text-[--color-error-800]`;
      case 'warning':
        return `${baseClasses} bg-[--color-warning-50] border-[--color-warning-200] text-[--color-warning-800]`;
      case 'info':
        return `${baseClasses} bg-[--color-info-50] border-[--color-info-200] text-[--color-info-800]`;
    }
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(type: 'success' | 'error' | 'warning' | 'info'): string {
    const baseClasses = 'flex-shrink-0 w-5 h-5 mr-3';
    switch (type) {
      case 'success':
        return `${baseClasses} text-[--color-success-500]`;
      case 'error':
        return `${baseClasses} text-[--color-error-500]`;
      case 'warning':
        return `${baseClasses} text-[--color-warning-500]`;
      case 'info':
        return `${baseClasses} text-[--color-info-500]`;
    }
  }

  /**
   * Получает CSS-классы для сообщения
   */
  static getMessageClasses(): string {
    return 'flex-1 text-sm font-medium';
  }

  /**
   * Получает CSS-классы для кнопки закрытия
   */
  static getCloseButtonClasses(): string {
    return 'ml-4 p-1 rounded-md hover:bg-[--color-background-tertiary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки закрытия
   */
  static getCloseIconClasses(): string {
    return 'w-4 h-4 text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера прогресс-бара
   */
  static getProgressBarContainerClasses(): string {
    return 'absolute bottom-0 left-0 right-0 h-1 rounded-b-lg overflow-hidden';
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressBarClasses(type: 'success' | 'error' | 'warning' | 'info'): string {
    const baseClasses = 'h-full transition-all duration-linear';
    switch (type) {
      case 'success':
        return `${baseClasses} bg-[--color-success-500]`;
      case 'error':
        return `${baseClasses} bg-[--color-error-500]`;
      case 'warning':
        return `${baseClasses} bg-[--color-warning-500]`;
      case 'info':
        return `${baseClasses} bg-[--color-info-500]`;
    }
  }

  /**
   * Получает CSS-классы для анимации появления
   */
  static getEnterAnimationClasses(): string {
    return 'translate-x-0 opacity-100';
  }

  /**
   * Получает CSS-классы для анимации исчезновения
   */
  static getLeaveAnimationClasses(): string {
    return 'translate-x-full opacity-0';
  }

  /**
   * Получает CSS-классы для начального состояния
   */
  static getInitialAnimationClasses(): string {
    return 'translate-x-full opacity-0';
  }
}
