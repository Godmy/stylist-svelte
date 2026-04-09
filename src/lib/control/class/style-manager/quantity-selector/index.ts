/**
 * StyleManager для компонента QuantitySelector
 *
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * только генерирует CSS-классы на основе переданных props
 */
import type { TokenSelectorKind } from '$stylist/control/type/record/selection-kind';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class QuantitySelectorStyleManager {
  /**
   * Получает CSS-классы для корневого элемента компонента QuantitySelector
   */
  static getRootClasses(hostClass?: string): string {
    return `quantity-selector ${hostClass || ''}`.trim();
  }

  /**
   * Получает CSS-классы для label элемента
   */
  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-1';
  }

  /**
   * Получает CSS-классы для контейнера элементов
   */
  static getContainerClasses(): string {
    return 'flex items-center';
  }

  /**
   * Получает CSS-классы для кнопки изменения количества
   */
  static getButtonClasses(
    isDisabled: boolean,
    showButtons: boolean,
    isLeftButton: boolean,
    size: TokenSize,
    buttonClass?: string
  ): string {
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = isDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer';
    const borderClasses = isLeftButton
      ? 'rounded-l-md border border-r-0 border-[--color-border-secondary]'
      : 'rounded-r-md border border-l-0 border-[--color-border-secondary]';

    return `flex items-center justify-center ${borderClasses} bg-[--color-background-primary] text-[--color-text-secondary] hover:text-[--color-text-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500] focus:z-[var(--z-index-docked)] ${disabledClass} ${sizeClasses} ${buttonClass || ''}`.trim();
  }

  /**
   * Получает CSS-классы для элемента input
   */
  static getInputClasses(
    showButtons: boolean,
    size: TokenSize,
    variant: TokenSelectorKind,
    inputClass?: string
  ): string {
    const sizeClasses = this.getSizeClasses(size);
    const variantClasses = this.getVariantClasses(variant);

    const roundedClasses = showButtons
      ? ''
      : 'rounded-l-md rounded-r-md';

    return `block w-16 text-center border-t border-b border-[--color-border-secondary] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] ${roundedClasses} ${sizeClasses} ${variantClasses} ${inputClass || ''}`.trim();
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-4 w-4';
  }

  /**
   * Возвращает CSS-классы размера на основе параметра
   */
  static getSizeClasses(size: TokenSize): string {
    const sizeClasses: Record<TokenSize, string> = {
      'xs': 'text-xs px-1 py-0.5',
      'sm': 'text-sm px-2 py-1',
      'md': 'text-base px-3 py-2',
      'lg': 'text-lg px-4 py-3',
      'xl': 'text-xl px-5 py-4',
      '2xl': 'text-2xl px-6 py-5',
      '1/4': 'text-xs px-1 py-0.5',
      '1/3': 'text-sm px-2 py-1',
      '2/5': 'text-sm px-2 py-1',
      '1/2': 'text-base px-3 py-2',
      '3/5': 'text-base px-3 py-2',
      '2/3': 'text-lg px-4 py-3',
      '3/4': 'text-xl px-5 py-4',
      full: 'text-2xl px-6 py-5 w-full'
    };

    return sizeClasses[size];
  }

  /**
   * Возвращает CSS-классы варианта на основе параметра
   */
  static getVariantClasses(variant: TokenSelectorKind): string {
    const variantClasses: Record<TokenSelectorKind, string> = {
      'default': 'border border-[--color-border-secondary] rounded-md shadow-sm',
      'minimal': 'border-b border-[--color-border-secondary] focus:border-[--color-primary-500] focus:outline-none',
      'filled': 'bg-[--color-background-secondary] border border-transparent rounded-md'
    };

    return variantClasses[variant];
  }
}







