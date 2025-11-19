/**
 * Менеджер стилей для компонента CTABanner
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { CTABannerBackgroundVariant } from './types';

export class CTABannerStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера CTABanner
   */
  static getContainerClasses(): string {
    return 'cta-banner relative py-16 overflow-hidden';
  }

  /**
   * Возвращает CSS-классы для фонового элемента
   */
  static getBackgroundClasses(backgroundVariant: CTABannerBackgroundVariant = 'gradient'): string {
    const variantClasses = {
      gradient: 'absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600',
      solid: 'absolute inset-0 bg-gray-100',
      image: 'absolute inset-0 bg-cover bg-center opacity-30'
    };

    return variantClasses[backgroundVariant];
  }

  /**
   * Возвращает CSS-классы для контента баннера
   */
  static getContentClasses(): string {
    return 'relative z-10 container mx-auto px-4 text-center max-w-3xl';
  }

  /**
   * Возвращает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-3xl md:text-4xl font-bold text-white mb-4';
  }

  /**
   * Возвращает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'text-xl text-blue-100 mb-8';
  }

  /**
   * Возвращает CSS-классы для контейнера кнопок
   */
  static getButtonsContainerClasses(): string {
    return 'flex flex-wrap justify-center gap-4';
  }

  /**
   * Возвращает CSS-классы для кнопки в зависимости от варианта
   */
  static getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses = {
      primary: 'bg-white text-blue-600 hover:bg-gray-100 focus:ring-white',
      secondary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500',
      outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white'
    };

    return `${baseClasses} ${variantClasses[variant]}`;
  }
}