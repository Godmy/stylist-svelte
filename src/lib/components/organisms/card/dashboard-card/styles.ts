import type { DashboardCardVariant } from './types';

/**
 * Менеджер стилей для компонента DashboardCard
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class DashboardCardStyleManager {
  /**
   * Получить основные CSS-классы для компонента DashboardCard
   */
  static getBaseClasses(variant?: DashboardCardVariant): string {
    const baseClasses = [
      'rounded-lg',
      'overflow-hidden',
      'border',
      'shadow-sm'
    ];

    // Добавляем стили в зависимости от варианта
    switch (variant) {
      case 'compact':
        baseClasses.push('p-2');
        break;
      case 'minimal':
        baseClasses.push('shadow-none', 'border-transparent');
        break;
      case 'default':
      default:
        baseClasses.push('p-0');
        break;
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для контейнера
   */
  static getContainerClasses(): string {
    return 'bg-[--color-surface-primary] border-[--color-border-default]';
  }

  /**
   * Получить CSS-классы для заголовка
   */
  static getHeaderClasses(): string {
    return 'flex items-center justify-between p-4 border-b border-[--color-border-default]';
  }

  /**
   * Получить CSS-классы для основного заголовка
   */
  static getTitleClasses(): string {
    return 'text-[--text-size-lg] font-medium text-[--color-text-primary]';
  }

  /**
   * Получить CSS-классы для подзаголовка
   */
  static getSubtitleClasses(): string {
    return 'text-[--text-size-sm] text-[--color-text-secondary]';
  }

  /**
   * Получить CSS-классы для тела карточки
   */
  static getBodyClasses(): string {
    return 'p-4';
  }

  /**
   * Получить CSS-классы для футера
   */
  static getFooterClasses(): string {
    return 'border-t border-[--color-border-default] px-4 py-3';
  }

  /**
   * Получить CSS-классы для кнопки сворачивания
   */
  static getToggleClasses(isCollapsed: boolean): string {
    const baseClasses = [
      'text-[--color-text-secondary]',
      'hover:text-[--color-text-primary]',
      'transition-colors',
      'duration-200'
    ];

    if (!isCollapsed) {
      baseClasses.push('rotate-180');
    }

    return baseClasses.join(' ');
  }
}