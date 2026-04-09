/**
 * Менеджер стилей для компонента MetricCard
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 * 
 * НОРМАЛИЗОВАННАЯ ВЕРСИЯ - использует общие базовые классы из cards.ts
 */

import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class MetricCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера MetricCard
   * Использует нормализованные базовые классы для карточек
   */
  static getContainerClasses(className?: string): string {
    return `${CardStyleManager.getBaseClasses()} metric-card bg-[--color-background-primary] p-6 ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для заголовка метрики
   * Использует нормализованные классы заголовков
   */
  static getTitleClasses(): string {
    return CardStyleManager.getTitleBaseClasses();
  }

  /**
   * Возвращает CSS-классы для значения метрики
   */
  static getValueClasses(): string {
    return 'text-2xl font-bold text-[--color-text-primary] mt-1';
  }

  /**
   * Возвращает CSS-классы для описания метрики
   * Использует нормализованные классы описаний
   */
  static getDescriptionClasses(): string {
    return CardStyleManager.getDescriptionBaseClasses();
  }

  /**
   * Возвращает CSS-классы для контейнера прогресс-бара
   * Использует нормализованные классы прогресс-баров
   */
  static getProgressBarContainerClasses(): string {
    return CardStyleManager.getProgressContainerBaseClasses();
  }

  /**
   * Возвращает CSS-классы для самого прогресс-бара
   * Использует нормализованные классы заполнения прогресса
   */
  static getProgressBarClasses(): string {
    return 'w-full h-2 rounded-full overflow-hidden';
  }

  /**
   * Возвращает CSS-классы для заполнения прогресс-бара в зависимости от варианта
   * Использует нормализованные вариант-классы
   */
  static getProgressBarFillClasses(variant: TokenAppearance = 'info', percentage: number): string {
    const variantClasses: Partial<Record<TokenAppearance, string>> = {
      primary: CardStyleManager.getProgressVariantClass('primary'),
      secondary: CardStyleManager.getProgressVariantClass('secondary'),
      success: CardStyleManager.getProgressVariantClass('success'),
      warning: CardStyleManager.getProgressVariantClass('warning'),
      danger: CardStyleManager.getProgressVariantClass('danger'),
      error: CardStyleManager.getProgressVariantClass('danger'),
      info: CardStyleManager.getProgressVariantClass('info')
    };

    return `${CardStyleManager.getProgressFillBaseClasses()} ${variantClasses[variant] || variantClasses.info}`;
  }

  /**
   * Возвращает CSS-классы для отображения процентного значения
   */
  static getPercentageClasses(variant: TokenAppearance = 'info'): string {
    const variantClasses: Partial<Record<TokenAppearance, string>> = {
      primary: 'text-[--color-primary-600]',
      secondary: 'text-[--color-secondary-600]',
      success: 'text-[--color-success-600]',
      warning: 'text-[--color-warning-600]',
      danger: 'text-[--color-danger-600]',
      error: 'text-[--color-danger-600]',
      info: 'text-[--color-primary-600]'
    };

    return `text-xs font-medium mt-1 ${variantClasses[variant] || variantClasses.info}`;
  }
}



