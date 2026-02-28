import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from './card';

export class PriceHistoryStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    return cn(
      'c-price-history border border-[var(--color-border-primary)] p-4 shadow-sm',
      CARD_BASE_CLASSES,
      extraClasses
    );
  }

  static getTitleClass(): string {
    return 'mb-4 font-semibold text-[var(--color-text-primary)]';
  }

  static getChartContainerClass(): string {
    return 'relative';
  }

  static getSVGClass(): string {
    return 'w-full';
  }

  static getGridLineClass(): string {
    return 'stroke-[var(--color-border-primary)] stroke-1';
  }

  static getGridTextClass(): string {
    return 'fill-[var(--color-text-tertiary)] text-xs';
  }

  static getPriceLineClass(): string {
    return '';
  }

  static getDataPointClass(): string {
    return '';
  }

  static getNoDataClass(): string {
    return 'flex h-48 items-center justify-center text-[var(--color-text-tertiary)]';
  }

  static getInfoClass(): string {
    return 'mt-4 text-sm text-[var(--color-text-secondary)]';
  }

  static getInfoTextClass(): string {
    return '';
  }
}
