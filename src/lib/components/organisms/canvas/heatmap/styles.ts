/**
 * Менеджер стилей для компонента Heatmap
 *
 * Этот класс отвечает исключительно за генерацию CSS-классов в зависимости от пропсов,
 * следуя принципу единственной ответственности (SRP) из SOLID.
 */

import type { IHeatmapProps, THeatmapColorScheme } from './types';

export class HeatmapStyleManager {
  /**
   * Получает основные CSS-классы для контейнера компонента
   */
  static getContainerClasses(additionalClass?: string): string {
    const baseClasses = [
      'heatmap',
      'relative'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получает CSS-классы для контейнера диаграммы
   */
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

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return [
      'text-lg',
      'font-medium',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для элемента SVG
   */
  static getSvgClasses(): string {
    return [
      'overflow-visible'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для ячейки
   */
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

  /**
   * Получает CSS-классы для текста в ячейке
   */
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

  /**
   * Получает CSS-классы для осей
   */
  static getAxisClasses(): string {
    return [
      'stroke-[--color-border-default]'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для текста осей
   */
  static getAxisTextClasses(): string {
    return [
      'text-xs',
      'fill-[--color-text-secondary]',
      'text-[--color-text-secondary]'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для легенды
   */
  static getLegendClasses(): string {
    return [
      'mt-4'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для заголовка легенды
   */
  static getLegendTitleClasses(): string {
    return [
      'text-xs',
      'text-[--color-text-primary]',
      'mt-1',
      'text-center'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для градиентного элемента легенды
   */
  static getLegendGradientClasses(): string {
    return [
      'h-4',
      'w-full',
      'rounded-full'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для меток легенды
   */
  static getLegendLabelsClasses(): string {
    return [
      'flex',
      'justify-between',
      'text-xs',
      'text-[--color-text-secondary]',
      'mb-1'
    ].join(' ');
  }

  /**
   * Получает CSS-классы для кнопки подсказки
   */
  static getTooltipButtonClasses(): string {
    return [
      'h-4',
      'w-4',
      'text-[--color-text-tertiary]'
    ].join(' ');
  }
}