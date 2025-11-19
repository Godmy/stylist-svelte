/**
 * Менеджер стилей для компонента LinkCard
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { LinkCardVariant } from './types';

export class LinkCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера LinkCard
   */
  static getContainerClasses(variant: LinkCardVariant = 'default'): string {
    const variantClasses = {
      default: 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm',
      primary: 'bg-blue-50 border-blue-200 hover:border-blue-300 hover:shadow-blue-100',
      secondary: 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-sm',
      outline: 'bg-transparent border-gray-300 hover:border-gray-400 hover:shadow-sm'
    };

    return `link-card group block p-6 border rounded-lg shadow-sm transition-all duration-200 ${variantClasses[variant]}`;
  }

  /**
   * Возвращает CSS-классы для контента карточки
   */
  static getContentClasses(): string {
    return 'flex items-start';
  }

  /**
   * Возвращает CSS-классы для иконки
   */
  static getIconContainerClasses(): string {
    return 'flex-shrink-0 mt-0.5 mr-4';
  }

  /**
   * Возвращает CSS-классы для иконки в зависимости от варианта
   */
  static getIconClasses(): string {
    return 'w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200';
  }

  /**
   * Возвращает CSS-классы для контейнера текста
   */
  static getTextContainerClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Возвращает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200';
  }

  /**
   * Возвращает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-500 mt-1';
  }

  /**
   * Возвращает CSS-классы для стрелки перехода
   */
  static getArrowClasses(): string {
    return 'ml-2 flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors duration-200';
  }
}