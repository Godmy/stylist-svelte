/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing analytics chart styling logic
 * Uses CSS variables from the theme system
 */
export class AnalyticsChartStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the header section
   * @returns CSS class string for the header section
   */
  static getHeaderClass(): string {
    return 'p-[--spacing-md] border-b border-[--color-border-primary]';
  }

  /**
   * Creates CSS class string for the title container
   * @returns CSS class string for the title container
   */
  static getTitleContainerClass(): string {
    return 'flex items-center justify-between';
  }

  /**
   * Creates CSS class string for the title
   * @returns CSS class string for the title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the subtitle
   * @returns CSS class string for the subtitle
   */
  static getSubtitleClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the trend container
   * @param trendValue - Trend value to determine color
   * @returns CSS class string for the trend container
   */
  static getTrendContainerClass(trendValue: number): string {
    const colorClass = trendValue >= 0 ? 'text-[--color-success-500]' : 'text-[--color-danger-500]';

    return `inline-flex items-center ${colorClass}`;
  }

  /**
   * Creates CSS class string for the chart container
   * @param chartClass - Additional CSS classes for the chart
   * @returns Combined CSS class string for the chart container
   */
  static getChartContainerClass(chartClass: string = ''): string {
    return `p-[--spacing-md] ${chartClass}`.trim();
  }

  /**
   * Creates CSS class string for the chart SVG
   * @returns CSS class string for the chart SVG
   */
  static getChartSVGClass(): string {
    return 'overflow-visible';
  }

  /**
   * Creates CSS class string for the axis lines
   * @returns CSS class string for the axis lines
   */
  static getAxisLineClass(): string {
    return 'stroke-[--color-border-primary] stroke-1';
  }

  /**
   * Creates CSS class string for the bar elements
   * @returns CSS class string for the bar elements
   */
  static getBarClass(): string {
    return 'hover:opacity-75 transition-opacity';
  }

  /**
   * Creates CSS class string for the value labels
   * @returns CSS class string for the value labels
   */
  static getValueLabelClass(): string {
    return 'text-xs fill-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the axis labels
   * @returns CSS class string for the axis labels
   */
  static getAxisLabelClass(): string {
    return 'text-xs fill-[--color-text-tertiary]';
  }

  /**
   * Creates CSS class string for the legend container
   * @param legendClass - Additional CSS classes for the legend
   * @returns Combined CSS class string for the legend container
   */
  static getLegendContainerClass(legendClass: string = ''): string {
    const baseClass = 'mt-[--spacing-md] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';

    return legendClass ? `${baseClass} ${legendClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the legend item
   * @returns CSS class string for the legend item
   */
  static getLegendItemClass(): string {
    return 'flex items-center mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the legend color indicator
   * @returns CSS class string for the legend color indicator
   */
  static getLegendColorClass(): string {
    return 'w-[--dimension-size-sm] h-[--dimension-size-sm] rounded-sm mr-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the legend label
   * @returns CSS class string for the legend label
   */
  static getLegendLabelClass(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the legend value
   * @returns CSS class string for the legend value
   */
  static getLegendValueClass(): string {
    return 'ml-[--spacing-xs] text-sm text-[--color-text-secondary]';
  }
}