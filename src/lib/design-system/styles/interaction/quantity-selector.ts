/**
 * StyleManager для компонента QuantitySelector
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID - 
 * только генерирует CSS-классы на основе переданных props
 */
import type { QuantitySelectorSize, QuantitySelectorVariant } from '$stylist/design-system/props/interaction/quantity-selector';

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
    return 'block text-sm font-medium text-[--color-gray-700] mb-1';
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
    size: QuantitySelectorSize,
    buttonClass?: string
  ): string {
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    const borderClasses = isLeftButton 
      ? 'rounded-l-md border border-r-0 border-[--color-gray-300]' 
      : 'rounded-r-md border border-l-0 border-[--color-gray-300]';
    
    return `flex items-center justify-center ${borderClasses} bg-[--color-white] text-[--color-gray-500] hover:text-[--color-gray-700] focus:outline-none focus:ring-1 focus:ring-[--color-blue-500] focus:z-10 ${disabledClass} ${sizeClasses} ${buttonClass || ''}`.trim();
  }

  /**
   * Получает CSS-классы для элемента input
   */
  static getInputClasses(
    showButtons: boolean, 
    size: QuantitySelectorSize, 
    variant: QuantitySelectorVariant,
    inputClass?: string
  ): string {
    const sizeClasses = this.getSizeClasses(size);
    const variantClasses = this.getVariantClasses(variant);
    
    const roundedClasses = showButtons 
      ? '' 
      : 'rounded-l-md rounded-r-md';
    
    return `block w-16 text-center border-t border-b border-[--color-gray-300] focus:outline-none focus:ring-1 focus:ring-[--color-blue-500] focus:border-[--color-blue-500] ${roundedClasses} ${sizeClasses} ${variantClasses} ${inputClass || ''}`.trim();
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
  static getSizeClasses(size: QuantitySelectorSize): string {
    const sizeClasses: Record<QuantitySelectorSize, string> = {
      'sm': 'text-sm px-2 py-1',
      'md': 'text-base px-3 py-2',
      'lg': 'text-lg px-4 py-3'
    };
    
    return sizeClasses[size];
  }

  /**
   * Возвращает CSS-классы варианта на основе параметра
   */
  static getVariantClasses(variant: QuantitySelectorVariant): string {
    const variantClasses: Record<QuantitySelectorVariant, string> = {
      'default': 'border border-[--color-gray-300] rounded-md shadow-sm',
      'minimal': 'border-b border-[--color-gray-300] focus:border-[--color-blue-500] focus:outline-none',
      'filled': 'bg-[--color-gray-100] border border-transparent rounded-md'
    };
    
    return variantClasses[variant];
  }
}