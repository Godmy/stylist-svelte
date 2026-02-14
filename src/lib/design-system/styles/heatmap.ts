import type { THeatmapColorScheme } from '../props/heatmap';

export class HeatmapStyleManager {
  static getContainerClasses(additionalClass?: string): string {
    const baseClasses = [
      'c-heatmap',
      'relative'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  static getChartContainerClasses(additionalClass?: string): string {
    const baseClasses = [
      'chart-container',
      'border',
      'rounded-lg',
      'p-4',
      'bg-[var(--color-background-primary)]',
      'border-[var(--color-border-default)]'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  static getTitleClasses(): string {
    return [
      'text-lg',
      'font-medium',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  static getSvgClasses(): string {
    return [
      'overflow-visible'
    ].join(' ');
  }

  static getCellClasses(isHovered: boolean = false): string {
    const baseClasses = [
      'cursor-pointer',
      'transition-all',
      'duration-200',
      'ease-in-out'
    ];

    if (isHovered) {
      baseClasses.push('opacity-80');
    } else {
      baseClasses.push('opacity-100');
    }

    return baseClasses.join(' ');
  }

  static getCellTextClasses(isHighContrast: boolean): string {
    const baseClasses = [
      'pointer-events-none',
      'text-xs'
    ];

    if (isHighContrast) {
      baseClasses.push('fill-[--color-text-inverse]', 'text-[--color-text-inverse]');
    } else {
      baseClasses.push('fill-[--color-text-primary]', 'text-[--color-text-primary]');
    }

    return baseClasses.join(' ');
  }

  static getAxisClasses(): string {
    return [
      'stroke-[--color-border-default]'
    ].join(' ');
  }

  static getAxisTextClasses(): string {
    return [
      'text-xs',
      'fill-[--color-text-secondary]',
      'text-[--color-text-secondary]'
    ].join(' ');
  }

  static getLegendClasses(): string {
    return [
      'mt-4'
    ].join(' ');
  }

  static getLegendTitleClasses(): string {
    return [
      'text-xs',
      'text-[--color-text-primary]',
      'mt-1',
      'text-center'
    ].join(' ');
  }

  static getLegendGradientClasses(): string {
    return [
      'h-4',
      'w-full',
      'rounded-full'
    ].join(' ');
  }

  static getLegendLabelsClasses(): string {
    return [
      'flex',
      'justify-between',
      'text-xs',
      'text-[--color-text-secondary]',
      'mb-1'
    ].join(' ');
  }

  static getTooltipButtonClasses(): string {
    return [
      'h-4',
      'w-4',
      'text-[--color-text-tertiary]'
    ].join(' ');
  }
}