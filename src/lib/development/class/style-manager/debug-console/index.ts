/**
 * Менеджер стилей для компонента RecipeDebugConsole
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class DebugConsoleStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'fixed bottom-0 left-0 right-0 h-64 bg-[--color-background-primary] border-t border-[--color-border-primary] shadow-lg z-[var(--z-index-modal)]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(): string {
    return 'flex items-center justify-between px-4 py-2 border-b border-[--color-border-primary] bg-[--color-background-tertiary]';
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'flex items-center space-x-2';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(): string {
    return 'p-1 rounded hover:bg-[--color-background-secondary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки действия
   */
  static getActionIconClasses(): string {
    return 'w-4 h-4 text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера логов
   */
  static getLogsContainerClasses(): string {
    return 'flex-1 overflow-auto p-4 font-mono text-sm';
  }

  /**
   * Получает CSS-классы для элемента лога
   */
  static getLogEntryClasses(): string {
    return 'py-1 border-b border-[--color-border-divider] last:border-b-0';
  }

  /**
   * Получает CSS-классы для метки времени
   */
  static getTimestampClasses(): string {
    return 'text-[--color-text-tertiary] mr-2';
  }

  /**
   * Получает CSS-классы для уровня лога
   */
  static getLogLevelClasses(level: 'info' | 'warn' | 'error' | 'debug'): string {
    const baseClasses = 'inline-block px-2 py-0.5 rounded text-xs font-medium mr-2';
    switch (level) {
      case 'info':
        return `${baseClasses} bg-[--color-info-100] text-[--color-info-800]`;
      case 'warn':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      case 'error':
        return `${baseClasses} bg-[--color-error-100] text-[--color-error-800]`;
      case 'debug':
        return `${baseClasses} bg-[--color-neutral-100] text-[--color-neutral-800]`;
    }
  }

  /**
   * Получает CSS-классы для сообщения лога
   */
  static getLogMessageClasses(): string {
    return 'text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера ввода
   */
  static getInputContainerClasses(): string {
    return 'border-t border-[--color-border-primary] p-2';
  }

  /**
   * Получает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'w-full px-3 py-2 border border-[--color-border-primary] rounded-md bg-[--color-background-secondary] text-[--color-text-primary] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для кнопки отправки
   */
  static getSubmitButtonClasses(): string {
    return 'mt-2 px-4 py-2 bg-[--color-primary-600] text-[--color-text-inverse] rounded-md text-sm font-medium hover:bg-[--color-primary-700] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для кнопки очистки
   */
  static getClearButtonClasses(): string {
    return 'px-3 py-1 bg-[--color-background-secondary] text-[--color-text-primary] rounded-md text-sm hover:bg-[--color-background-tertiary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для кнопки закрытия
   */
  static getCloseButtonClasses(): string {
    return 'p-1 rounded hover:bg-[--color-background-secondary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки закрытия
   */
  static getCloseIconClasses(): string {
    return 'w-4 h-4 text-[--color-text-secondary]';
  }
}
