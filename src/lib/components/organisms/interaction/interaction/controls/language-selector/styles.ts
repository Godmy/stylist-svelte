import type { ILanguageSelectorStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing LanguageSelector styling logic
 * Uses CSS variables from the theme system
 */
export class LanguageSelectorStyleManager {
  static getBaseClasses(className?: string): string {
    const baseClasses = 'c-language-selector relative inline-block';

    return className ? `${baseClasses} ${className}` : baseClasses;
  }

  static getButtonBaseClasses(): string {
    return 'inline-flex items-center justify-between rounded-md border border-[--color-border-default] bg-[--color-background-primary] px-3 py-2 text-sm font-medium shadow-sm hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2';
  }

  static getButtonVariantClasses(variant: string): string {
    switch (variant) {
      case 'minimal':
        return 'border-none bg-transparent hover:bg-transparent';
      case 'compact':
        return 'px-2 py-1 text-xs';
      default:
        return '';
    }
  }

  static getButtonSizeClasses(size: string): string {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'lg':
        return 'px-4 py-3 text-base';
      default:
        return 'px-3 py-2 text-sm'; // md
    }
  }

  static getDropdownBaseClasses(): string {
    return 'absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-[--color-background-primary] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none';
  }

  static getDropdownPositionClasses(position: string): string {
    return position === 'top' ? 'bottom-full mb-1' : 'top-full mt-1';
  }

  static getLanguageItemBaseClasses(isActive: boolean): string {
    const baseClasses = 'flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-[--color-background-secondary]';
    const activeClasses = isActive ? 'bg-[--color-background-selected] font-medium' : '';

    return `${baseClasses} ${activeClasses}`;
  }

  static getSearchInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-default] bg-[--color-background-primary] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
  }

  static getFlagClasses(): string {
    return 'mr-2 h-4 w-4';
  }

  static getCheckIconClasses(): string {
    return 'ml-auto h-4 w-4 text-[--color-icon-accent]';
  }

  static getAllClasses(
    className: string,
    variant: string,
    size: string,
    position: string
  ): string {
    const baseClasses = this.getBaseClasses(className);
    const buttonClasses = this.getButtonBaseClasses();
    const buttonVariantClasses = this.getButtonVariantClasses(variant);
    const buttonSizeClasses = this.getButtonSizeClasses(size);
    const dropdownClasses = this.getDropdownBaseClasses();
    const positionClasses = this.getDropdownPositionClasses(position);

    return `${baseClasses} ${buttonClasses} ${buttonVariantClasses} ${buttonSizeClasses} ${dropdownClasses} ${positionClasses}`;
  }
}