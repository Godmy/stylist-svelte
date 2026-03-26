export class BurnDownChartStyleManager {
  static getContainerClass(): string {
    return 'c-burn-down-chart chart-container';
  }

  static getTitleClass(): string {
    return 'chart-title mb-3 text-lg font-semibold text-[var(--color-text-primary)]';
  }

  static getSvgClass(): string {
    return 'rounded border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]';
  }

  static getGridLineClass(): string {
    return 'stroke-[var(--color-border-primary)] stroke-1';
  }

  static getAxisClass(): string {
    return 'stroke-[var(--color-text-secondary)] stroke-2';
  }

  static getIdealLineClass(): string {
    return 'fill-none stroke-[var(--color-primary-500)] stroke-2';
  }

  static getActualLineClass(): string {
    return 'fill-none stroke-[var(--color-danger-500)] stroke-2';
  }

  static getDataPointClass(): string {
    return 'fill-[var(--color-danger-500)] stroke-[var(--color-background-primary)] stroke-2';
  }

  static getXAxisLabelClass(): string {
    return 'fill-[var(--color-text-secondary)] text-xs text-anchor-middle';
  }

  static getYAxisLabelClass(): string {
    return 'fill-[var(--color-text-secondary)] text-xs text-anchor-end';
  }

  static getLegendContainerClass(): string {
    return '';
  }

  static getLegendLineClass(): string {
    return 'stroke-[var(--color-primary-500)] stroke-2';
  }

  static getLegendTextClass(): string {
    return 'fill-[var(--color-text-secondary)] text-xs';
  }
}
