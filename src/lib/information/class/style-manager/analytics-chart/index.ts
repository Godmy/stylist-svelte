export class AnalyticsChartStyleManager {
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'c-analytics-chart bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getHeaderClass(): string { return 'p-[--spacing-md] border-b border-[--color-border-primary]'; }
  static getTitleContainerClass(): string { return 'flex items-center justify-between'; }
  static getTitleClass(): string { return 'text-lg font-medium text-[--color-text-primary]'; }
  static getSubtitleClass(): string { return 'text-sm text-[--color-text-secondary]'; }
  static getTrendContainerClass(trendValue: number): string { return `inline-flex items-center ${trendValue >= 0 ? 'text-[--color-success-500]' : 'text-[--color-danger-500]'}`; }
  static getChartContainerClass(chartClass: string = ''): string { return `p-[--spacing-md] ${chartClass}`.trim(); }
  static getLegendContainerClass(legendClass: string = ''): string {
    const baseClass = 'mt-[--spacing-md] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
    return legendClass ? `${baseClass} ${legendClass}`.trim() : baseClass;
  }
  static getLegendItemClass(): string { return 'flex items-center mb-[--spacing-xs]'; }
  static getLegendColorClass(): string { return 'w-[--dimension-size-sm] h-[--dimension-size-sm] rounded-sm mr-[--spacing-xs]'; }
  static getLegendLabelClass(): string { return 'text-sm text-[--color-text-primary]'; }
  static getLegendValueClass(): string { return 'ml-[--spacing-xs] text-sm text-[--color-text-secondary]'; }
}