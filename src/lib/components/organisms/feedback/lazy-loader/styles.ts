import type { LazyLoaderVariant, LazyLoaderSize } from './types';

export class LazyLoaderStyleManager {
  static getBaseClasses(): string {
    return 'space-y-6';
  }

  static getContentContainerClasses(): string {
    return 'relative rounded-lg overflow-hidden border';
  }

  static getPlaceholderContainerClasses(): string {
    return 'flex flex-col items-center justify-center p-8';
  }

  static getErrorContainerClasses(): string {
    return 'flex items-center justify-center p-8';
  }

  static getProgressContainerClasses(): string {
    return 'w-full max-w-xs';
  }

  static getProgressBarClasses(): string {
    return 'h-2 bg-[--color-bg-progress] rounded-full overflow-hidden';
  }

  static getProgressFillClasses(): string {
    return 'h-full bg-[--color-primary-500] transition-all duration-300';
  }

  static getPlaceholderTextClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  static getErrorTextClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  static getVariantClasses(variant?: LazyLoaderVariant): string {
    switch (variant) {
      case 'default':
      default:
        return 'border-[--color-border-default]';
    }
  }

  static getSizeClasses(size?: LazyLoaderSize): string {
    switch (size) {
      case 'sm':
        return '';
      case 'lg':
        return '';
      case 'md':
      default:
        return '';
    }
  }

  static getFooterClasses(): string {
    return 'p-3 bg-[--color-bg-surface-secondary] border-t border-[--color-border-default]';
  }
}