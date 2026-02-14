export class BurnDownChartStyleManager {
  static getContainerClass(): string {
    return 'c-burn-down-chart chart-container';
  }

  static getTitleClass(): string {
    return 'chart-title text-lg font-semibold mb-3';
  }

  static getSvgClass(): string {
    return 'border border-gray-300 rounded';
  }

  static getGridLineClass(): string {
    return 'stroke-gray-200 stroke-1';
  }

  static getAxisClass(): string {
    return 'stroke-gray-700 stroke-2';
  }

  static getIdealLineClass(): string {
    return 'stroke-blue-500 stroke-2 fill-none';
  }

  static getActualLineClass(): string {
    return 'stroke-red-500 stroke-2 fill-none';
  }

  static getDataPointClass(): string {
    return 'fill-red-500 stroke-white stroke-2';
  }

  static getXAxisLabelClass(): string {
    return 'text-xs fill-gray-700 text-anchor-middle';
  }

  static getYAxisLabelClass(): string {
    return 'text-xs fill-gray-700 text-anchor-end';
  }

  static getLegendContainerClass(): string {
    return '';
  }

  static getLegendLineClass(): string {
    return 'stroke-blue-500 stroke-2';
  }

  static getLegendTextClass(): string {
    return 'text-xs fill-gray-700';
  }
}