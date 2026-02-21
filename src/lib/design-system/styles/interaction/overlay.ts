import type { LoadingOverlaySpinnerSize } from '$stylist/design-system/props/interaction/overlay';

/**
 * Менеджер стилей для компонента LoadingOverlay
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class LoadingOverlayStyleManager {
  /**
   * Получить основные CSS-классы для оверлея загрузки
   */
  static getBaseClasses(): string {
    return [
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'bg-[--color-overlay-bg]',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'z-[50]',
      'transition-opacity',
      'duration-300',
      'ease-in-out'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для контента загрузки
   */
  static getContentClasses(): string {
    return [
      'flex',
      'flex-col',
      'items-center',
      'gap-4',
      'p-8',
      'bg-[--color-background-primary]',
      'dark:bg-[--color-background-primary-dark]',
      'rounded-md',
      'shadow-lg'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для сообщения загрузки
   */
  static getMessageClasses(): string {
    return [
      'text-[--text-size-md]',
      'text-[--color-text-secondary]',
      'text-center'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для спиннера
   */
  static getSpinnerBaseClasses(): string {
    return [
      'inline-block',
      'border-4',
      'border-[--color-border-light]',
      'border-t-[--color-primary-500]',
      'rounded-full',
      'animate-spin'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для спиннера определенного размера
   */
  static getSpinnerSizeClasses(size: LoadingOverlaySpinnerSize): string {
    switch (size) {
      case 'sm':
        return 'w-5 h-5 border-2';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  }
}