/**
 * Менеджер стилей для компонента Hero
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { HeroBackgroundVariant, HeroHeight } from './types';

export class HeroStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера Hero
   */
  static getContainerClasses(height: HeroHeight = 'screen', className?: string): string {
    const heightClasses = {
      screen: 'min-h-screen',
      large: 'min-h-[80vh]',
      medium: 'min-h-[60vh]'
    };

    return `hero relative w-full flex items-center justify-center overflow-hidden ${heightClasses[height]} ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для фонового элемента
   */
  static getBackgroundClasses(backgroundVariant: HeroBackgroundVariant = 'gradient'): string {
    const variantClasses = {
      gradient: 'absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
      particles: 'absolute inset-0',
      image: 'absolute inset-0 bg-cover bg-center'
    };

    return variantClasses[backgroundVariant];
  }

  /**
   * Возвращает CSS-классы для контента Hero
   */
  static getContentClasses(): string {
    return 'relative z-10 container mx-auto px-4 py-16 text-center max-w-4xl';
  }

  /**
   * Возвращает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-4xl md:text-6xl font-bold text-gray-900 mb-4';
  }

  /**
   * Возвращает CSS-классы для подзаголовка
   */
  static getSubtitleClasses(): string {
    return 'text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto';
  }

  /**
   * Возвращает CSS-классы для контейнера статистики
   */
  static getStatsContainerClasses(): string {
    return 'flex flex-wrap justify-center gap-8 mb-10';
  }

  /**
   * Возвращает CSS-классы для элемента статистики
   */
  static getStatItemClasses(): string {
    return 'flex flex-col items-center';
  }

  /**
   * Возвращает CSS-классы для значения статистики
   */
  static getStatValueClasses(): string {
    return 'text-3xl font-bold text-blue-600';
  }

  /**
   * Возвращает CSS-классы для метки статистики
   */
  static getStatLabelClasses(): string {
    return 'text-sm text-gray-500 mt-1';
  }

  /**
   * Возвращает CSS-классы для контейнера CTA кнопок
   */
  static getCTAContainerClasses(): string {
    return 'flex flex-wrap justify-center gap-4';
  }

  /**
   * Возвращает CSS-классы для CTA кнопки
   */
  static getCTAButtonClasses(isPrimary: boolean): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = isPrimary 
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' 
      : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 focus:ring-blue-500';

    return `${baseClasses} ${variantClasses}`;
  }
}