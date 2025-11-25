import type { TabIndicatorColor } from './types';

/**
 * Style manager responsible for TabIndicator presentation details
 */
export class TabIndicatorStyleManager {
  static getClasses(color: TabIndicatorColor, className: string): string {
    const baseClasses =
      'absolute bottom-0 h-0.5 rounded-full transition-all duration-300 ease-out bg-[--color-primary-500]';
    const colorClasses: Record<TabIndicatorColor, string> = {
      primary: 'bg-[--color-primary-500]',
      secondary: 'bg-[--color-secondary-500]',
      success: 'bg-[--color-success-500]',
      warning: 'bg-[--color-warning-500]',
      danger: 'bg-[--color-danger-500]',
      gray: 'bg-[--color-neutral-500]'
    };

    return `${baseClasses} ${colorClasses[color]} ${className}`.trim();
  }

  static getStyle(width: string, left: string): string {
    return `width: ${width}; left: ${left};`;
  }
}
