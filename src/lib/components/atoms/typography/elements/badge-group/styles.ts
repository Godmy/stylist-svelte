/**
 * Менеджер стилей для компонента BadgeGroup
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента BadgeGroup
 */

import type { BadgeVariant, BadgeSize } from '$lib/components/atoms/typography/elements/badge/types';

export class BadgeGroupStyleManager {
  /**
   * Получает CSS-классы для контейнера группы бейджей
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'flex flex-wrap items-center gap-2';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для отдельного бейджа
   */
  static getBadgeClasses(
    variant: BadgeVariant = 'default',
    size: BadgeSize = 'md',
    isDisabled: boolean = false,
    additionalClass: string = ''
  ): string {
    // Базовые классы для всех бейджей
    let baseClasses = 'inline-flex items-center rounded-full font-medium';
    
    // Размерные классы
    let sizeClasses = '';
    switch (size) {
      case 'sm':
        sizeClasses = 'px-2 py-0.5 text-xs';
        break;
      case 'md':
        sizeClasses = 'px-2.5 py-0.5 text-xs';
        break;
      case 'lg':
        sizeClasses = 'px-3 py-1 text-sm';
        break;
    }
    
    // Классы вариантов
    let variantClasses = '';
    switch (variant) {
      case 'primary':
        variantClasses = 'bg-[--color-primary-100] text-[--color-primary-800]';
        break;
      case 'secondary':
        variantClasses = 'bg-[--color-secondary-100] text-[--color-secondary-800]';
        break;
      case 'success':
        variantClasses = 'bg-[--color-success-100] text-[--color-success-800]';
        break;
      case 'warning':
        variantClasses = 'bg-[--color-warning-100] text-[--color-warning-800]';
        break;
      case 'error':
        variantClasses = 'bg-[--color-error-100] text-[--color-error-800]';
        break;
      case 'info':
        variantClasses = 'bg-[--color-info-100] text-[--color-info-800]';
        break;
      default: // default
        variantClasses = 'bg-[--color-neutral-100] text-[--color-neutral-800]';
        break;
    }
    
    // Классы для отключенного состояния
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    // Формируем итоговый класс
    const allClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClass}`;
    
    return additionalClass ? `${allClasses} ${additionalClass}` : allClasses;
  }

  /**
   * Получает CSS-классы для элемента переполнения
   */
  static getOverflowClasses(additionalClass: string = ''): string {
    const baseClasses = 
      'inline-flex items-center rounded-full text-xs font-medium ' +
      'bg-[--color-neutral-100] text-[--color-neutral-800] ' +
      'px-2.5 py-0.5';
    
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }
}