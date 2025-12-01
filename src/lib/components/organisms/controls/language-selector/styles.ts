import type { LanguageSelectorVariant, LanguageSelectorSize } from './types';

export class LanguageSelectorStyleManager {
  static getBaseClasses(): string {
    return 'relative inline-block text-left';
  }

  static getButtonBaseClasses(): string {
    return 'inline-flex justify-center items-center w-full rounded-md border shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  }

  static getButtonVariantClasses(variant?: LanguageSelectorVariant): string {
    switch (variant) {
      case 'default':
      default:
        return 'border-[--color-border-default] bg-[--color-bg-surface] text-[--color-text-primary] hover:bg-[--color-bg-surface-hover] focus:ring-[--color-primary-500]';
    }
  }

  static getButtonSizeClasses(size?: LanguageSelectorSize): string {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs';
      case 'lg':
        return 'px-5 py-2.5 text-base';
      case 'md':
      default:
        return 'px-4 py-2 text-sm';
    }
  }

  static getDropdownBaseClasses(): string {
    return 'origin-top-right absolute right-0 rounded-md shadow-lg bg-[--color-bg-surface] ring-1 ring-[--color-border-default] ring-opacity-5 z-50';
  }

  static getDropdownPositionClasses(placement: 'top' | 'bottom' = 'bottom'): string {
    return placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2';
  }

  static getLanguageItemBaseClasses(isSelected: boolean): string {
    return `w-full text-left px-4 py-2 text-sm flex items-center ${
      isSelected
        ? 'bg-[--color-bg-selected] text-[--color-text-selected]'
        : 'text-[--color-text-primary] hover:bg-[--color-bg-hover]'
    }`;
  }

  static getSearchInputClasses(): string {
    return 'block w-full pl-10 pr-3 py-2 border border-[--color-border-default] rounded-md leading-5 bg-[--color-bg-input] placeholder-[--color-text-placeholder] focus:outline-none focus:placeholder-[--color-text-placeholder-hover] focus:ring-1 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
  }

  static getFlagClasses(): string {
    return 'mr-3';
  }

  static getCheckIconClasses(): string {
    return 'ml-2 h-4 w-4 text-[--color-icon-selected]';
  }
}