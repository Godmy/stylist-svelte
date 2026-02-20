/**
 * Менеджер стилей для компонента MetricCard
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 * 
 * НОРМАЛИЗОВАННАЯ ВЕРСИЯ - использует общие базовые классы из cards.ts
 */

import type { MetricCardVariant } from '$stylist/design-system/props/metric-card';
import { 
  CARD_BASE_CLASSES,
  CARD_TITLE_CLASSES,
  CARD_DESCRIPTION_CLASSES,
  CARD_PROGRESS_CONTAINER_CLASSES,
  CARD_PROGRESS_FILL_CLASSES,
  CARD_PROGRESS_VARIANT_CLASSES
} from '$stylist/design-system/classes/cards';

export class MetricCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера MetricCard
   * Использует нормализованные базовые классы для карточек
   */
  static getContainerClasses(className?: string): string {
    return `${CARD_BASE_CLASSES} metric-card bg-[--color-background-primary] p-6 ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для заголовка метрики
   * Использует нормализованные классы заголовков
   */
  static getTitleClasses(): string {
    return CARD_TITLE_CLASSES;
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
    return CARD_DESCRIPTION_CLASSES;
  }

  /**
   * Возвращает CSS-классы для контейнера прогресс-бара
   * Использует нормализованные классы прогресс-баров
   */
  static getProgressBarContainerClasses(): string {
    return CARD_PROGRESS_CONTAINER_CLASSES;
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
  static getProgressBarFillClasses(variant: MetricCardVariant = 'info', percentage: number): string {
    const variantClasses = {
      success: CARD_PROGRESS_VARIANT_CLASSES.success,
      warning: CARD_PROGRESS_VARIANT_CLASSES.warning,
      danger: CARD_PROGRESS_VARIANT_CLASSES.danger,
      info: CARD_PROGRESS_VARIANT_CLASSES.info
    };

    return `${CARD_PROGRESS_FILL_CLASSES} ${variantClasses[variant] || variantClasses.info}`;
  }

  /**
   * Возвращает CSS-классы для отображения процентного значения
   */
  static getPercentageClasses(variant: MetricCardVariant = 'info'): string {
    const variantClasses = {
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600',
      info: 'text-blue-600'
    };

    return `text-xs font-medium mt-1 ${variantClasses[variant] || variantClasses.info}`;
  }
}