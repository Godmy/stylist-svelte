import type { DialogVariant, DialogWidth } from './types';

/**
 * Менеджер стилей для компонента Dialog
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class DialogStyleManager {
  /**
   * Получить CSS-классы для основного контейнера диалога
   */
  static getContainerClasses(): string {
    return [
      'fixed',
      'inset-0',
      'z-50',
      'overflow-y-auto'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для центрирующего контейнера
   */
  static getCenteringContainerClasses(): string {
    return [
      'flex',
      'items-center',
      'justify-center',
      'min-h-screen',
      'pt-4',
      'px-4',
      'pb-20',
      'text-center',
      'sm:block',
      'sm:p-0'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для бэкдропа
   */
  static getBackdropClasses(): string {
    return [
      'fixed',
      'inset-0',
      'bg-[--color-backdrop-overlay]',
      'transition-opacity'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для основного окна диалога
   */
  static getDialogWindowClasses(width: DialogWidth, variant: DialogVariant, className?: string): string {
    const widthClasses: Record<DialogWidth, string> = {
      'sm': 'max-w-[--dialog-width-sm]',
      'md': 'max-w-[--dialog-width-md]',
      'lg': 'max-w-[--dialog-width-lg]',
      'xl': 'max-w-[--dialog-width-xl]',
      'full': 'max-w-full'
    };

    const baseClasses = [
      'inline-block',
      'align-bottom',
      'rounded-lg',
      'text-left',
      'overflow-hidden',
      'shadow-xl',
      'transform',
      'transition-all',
      'sm:my-8',
      'sm:align-middle',
      'sm:w-full',
      widthClasses[width],
      'bg-[--color-surface-primary]',
      'border',
      'border-[--color-border-default]'
    ];

    // Добавляем специфичные стили для варианта
    switch (variant) {
      case 'success':
        baseClasses.push('border-[--color-success]');
        break;
      case 'warning':
        baseClasses.push('border-[--color-warning]');
        break;
      case 'error':
        baseClasses.push('border-[--color-danger]');
        break;
      case 'info':
        baseClasses.push('border-[--color-info]');
        break;
      default:
        break;
    }

    if (className) {
      baseClasses.push(className);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для содержимого диалога
   */
  static getContentClasses(contentClass?: string): string {
    const baseClasses = [
      'px-4',
      'pt-5',
      'pb-4',
      'sm:p-6',
      'sm:pb-4'
    ];

    if (contentClass) {
      baseClasses.push(contentClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для заголовка диалога
   */
  static getHeaderClasses(headerClass?: string): string {
    const baseClasses = [
      'flex',
      'items-start',
      'justify-between'
    ];

    if (headerClass) {
      baseClasses.push(headerClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return [
      'text-[--text-size-lg]',
      'leading-6',
      'font-medium',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для описания
   */
  static getDescriptionContainerClasses(): string {
    return [
      'mt-2'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return [
      'text-[--text-size-sm]',
      'text-[--color-text-secondary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки закрытия
   */
  static getCloseButtonClasses(): string {
    return [
      'bg-[--color-surface-primary]',
      'rounded-md',
      'text-[--color-text-secondary]',
      'hover:text-[--color-text-primary]',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-[--color-primary-500]',
      'focus:ring-offset-2'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для иконки закрытия
   */
  static getCloseIconClasses(): string {
    return [
      'h-5',
      'w-5'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для тела диалога
   */
  static getBodyClasses(bodyClass?: string): string {
    const baseClasses = [
      'mt-4'
    ];

    if (bodyClass) {
      baseClasses.push(bodyClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для футера диалога
   */
  static getFooterClasses(footerClass?: string): string {
    const baseClasses = [
      'bg-[--color-surface-secondary]',
      'px-4',
      'py-3',
      'sm:px-6',
      'sm:flex',
      'sm:flex-row-reverse'
    ];

    if (footerClass) {
      baseClasses.push(footerClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для скрытия вспомогательного элемента
   */
  static getHiddenSpanClasses(): string {
    return [
      'hidden',
      'sm:inline-block',
      'sm:align-middle',
      'sm:h-screen'
    ].join(' ');
  }
}