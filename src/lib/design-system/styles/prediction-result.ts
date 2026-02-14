import type { PredictionResultStatus } from '$stylist/design-system/props/prediction-result';

export class PredictionResultStyleManager {
  static getContainerClass(customClass = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getHeaderClass(headerClass = ''): string {
    const baseClass = 'border-b p-[--spacing-md] flex items-center justify-between';
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  static getStatusIconClass(status: PredictionResultStatus): string {
    const baseClass = 'h-5 w-5 mr-[--spacing-sm]';
    const statusClasses: Record<PredictionResultStatus, string> = {
      loading: 'text-[--color-primary-500] animate-spin',
      error: 'text-[--color-danger-500]',
      warning: 'text-[--color-warning-500]',
      success: 'text-[--color-primary-500]'
    };

    return `${baseClass} ${statusClasses[status]}`;
  }

  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  static getModelTagClass(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800]';
  }

  static getContentClass(contentClass = ''): string {
    const baseClass = 'p-[--spacing-md]';
    return contentClass ? `${baseClass} ${contentClass}`.trim() : baseClass;
  }

  static getDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary] mb-[--spacing-md]';
  }

  static getCenteredDisplayClass(): string {
    return 'flex flex-col items-center justify-center py-8';
  }

  static getRetryButtonClass(): string {
    return 'mt-[--spacing-lg] px-[--spacing-md] py-[--spacing-sm] text-sm font-medium text-[--color-text-inverse] bg-[--color-danger-600] rounded-md hover:bg-[--color-danger-700] focus:outline-none';
  }

  static getPredictionSummaryGridClass(): string {
    return 'grid grid-cols-2 gap-[--spacing-md] mb-[--spacing-md]';
  }

  static getPredictionBoxClass(isPredicted: boolean): string {
    const baseClass = 'bg-[--color-background-secondary] p-[--spacing-sm] rounded-lg';
    const colorClass = isPredicted ? 'bg-[--color-primary-50]' : 'bg-[--color-success-50]';
    return `${baseClass} ${colorClass}`;
  }

  static getPredictionLabelClass(): string {
    return 'text-sm font-medium text-[--color-text-secondary]';
  }

  static getPredictionValueClass(): string {
    return 'text-2xl font-bold text-[--color-text-primary]';
  }

  static getConfidenceSectionClass(): string {
    return 'mb-[--spacing-md]';
  }

  static getConfidenceLabelClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getConfidencePercentageClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getConfidenceBarContainerClass(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2';
  }

  static getConfidenceBarFillClass(): string {
    return 'h-2 rounded-full bg-[--color-primary-600]';
  }

  static getBreakdownHeaderClass(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-[--spacing-sm]';
  }

  static getPredictionItemClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  static getPredictionItemLabelClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  static getPredictionItemValueClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getChartBarContainerClass(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2';
  }

  static getChartBarFillClass(): string {
    return 'h-2 rounded-full bg-[--color-primary-500]';
  }

  static getFooterClass(footerClass = ''): string {
    const baseClass = 'border-t p-[--spacing-md]';
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  static getTrendIndicatorClass(isPositive: boolean): string {
    const baseClass = 'h-5 w-5';
    const colorClass = isPositive ? 'text-[--color-success-500]' : 'text-[--color-danger-500]';
    return `${baseClass} ${colorClass}`;
  }

  static getTrendDescriptionClass(isPositive: boolean): string {
    const baseClass = 'ml-[--spacing-sm] text-sm';
    const colorClass = isPositive ? 'text-[--color-success-600]' : 'text-[--color-danger-600]';
    return `${baseClass} ${colorClass}`;
  }
}
