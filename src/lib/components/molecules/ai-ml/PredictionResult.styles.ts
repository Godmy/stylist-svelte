/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing prediction result styling logic
 * Uses CSS variables from the theme system
 */
export class PredictionResultStyleManager {
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
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the header section
   */
  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'border-b p-[--spacing-md] flex items-center justify-between';
    
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the status icon
   * @param status - Status of the prediction
   * @returns CSS class string for the status icon
   */
  static getStatusIconClass(status: 'success' | 'error' | 'loading' | 'warning'): string {
    const baseClass = 'h-5 w-5 mr-[--spacing-sm]';
    const statusClasses = {
      loading: 'text-[--color-primary-500] animate-spin',
      error: 'text-[--color-danger-500]',
      warning: 'text-[--color-warning-500]',
      success: 'text-[--color-primary-500]'
    };
    
    return `${baseClass} ${statusClasses[status]}`;
  }

  /**
   * Creates CSS class string for the header title
   * @returns CSS class string for the header title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the model tag
   * @returns CSS class string for the model tag
   */
  static getModelTagClass(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800]';
  }

  /**
   * Creates CSS class string for the content section
   * @param contentClass - Additional CSS classes for the content
   * @returns Combined CSS class string for the content section
   */
  static getContentClass(contentClass: string = ''): string {
    const baseClass = 'p-[--spacing-md]';
    
    return contentClass ? `${baseClass} ${contentClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the description text
   * @returns CSS class string for the description text
   */
  static getDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary] mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the centered loading/error display
   * @returns CSS class string for the centered display
   */
  static getCenteredDisplayClass(): string {
    return 'flex flex-col items-center justify-center py-8';
  }

  /**
   * Creates CSS class string for the retry button
   * @returns CSS class string for the retry button
   */
  static getRetryButtonClass(): string {
    return 'mt-[--spacing-lg] px-[--spacing-md] py-[--spacing-sm] text-sm font-medium text-[--color-text-inverse] bg-[--color-danger-600] rounded-md hover:bg-[--color-danger-700] focus:outline-none';
  }

  /**
   * Creates CSS class string for the prediction summary grid
   * @returns CSS class string for the prediction summary grid
   */
  static getPredictionSummaryGridClass(): string {
    return 'grid grid-cols-2 gap-[--spacing-md] mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the prediction/actual boxes
   * @param isPredicted - Whether this is the predicted value box
   * @returns CSS class string for the prediction/actual boxes
   */
  static getPredictionBoxClass(isPredicted: boolean): string {
    const baseClass = 'bg-[--color-background-secondary] p-[--spacing-sm] rounded-lg';
    const colorClass = isPredicted ? 'bg-[--color-primary-50]' : 'bg-[--color-success-50]';
    
    return `${baseClass} ${colorClass}`;
  }

  /**
   * Creates CSS class string for the label in prediction boxes
   * @returns CSS class string for the label in prediction boxes
   */
  static getPredictionLabelClass(): string {
    return 'text-sm font-medium text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the value in prediction boxes
   * @returns CSS class string for the value in prediction boxes
   */
  static getPredictionValueClass(): string {
    return 'text-2xl font-bold text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the confidence section
   * @returns CSS class string for the confidence section
   */
  static getConfidenceSectionClass(): string {
    return 'mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for confidence labels
   * @returns CSS class string for confidence labels
   */
  static getConfidenceLabelClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for confidence percentage
   * @returns CSS class string for confidence percentage
   */
  static getConfidencePercentageClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the confidence bar container
   * @returns CSS class string for the confidence bar container
   */
  static getConfidenceBarContainerClass(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2';
  }

  /**
   * Creates CSS class string for the confidence bar fill
   * @returns CSS class string for the confidence bar fill
   */
  static getConfidenceBarFillClass(): string {
    return 'h-2 rounded-full bg-[--color-primary-600]';
  }

  /**
   * Creates CSS class string for the breakdown header
   * @returns CSS class string for the breakdown header
   */
  static getBreakdownHeaderClass(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for individual prediction items
   * @returns CSS class string for individual prediction items
   */
  static getPredictionItemClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for prediction item labels
   * @returns CSS class string for prediction item labels
   */
  static getPredictionItemLabelClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for prediction item values
   * @returns CSS class string for prediction item values
   */
  static getPredictionItemValueClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the chart bar container
   * @returns CSS class string for the chart bar container
   */
  static getChartBarContainerClass(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2';
  }

  /**
   * Creates CSS class string for the chart bar fill
   * @returns CSS class string for the chart bar fill
   */
  static getChartBarFillClass(): string {
    return 'h-2 rounded-full bg-[--color-primary-500]';
  }

  /**
   * Creates CSS class string for the footer section
   * @param footerClass - Additional CSS classes for the footer
   * @returns Combined CSS class string for the footer section
   */
  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t p-[--spacing-md]';
    
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the trend indicator
   * @param isPositive - Whether the trend is positive
   * @returns CSS class string for the trend indicator
   */
  static getTrendIndicatorClass(isPositive: boolean): string {
    const baseClass = 'h-5 w-5';
    const colorClass = isPositive ? 'text-[--color-success-500]' : 'text-[--color-danger-500]';
    
    return `${baseClass} ${colorClass}`;
  }

  /**
   * Creates CSS class string for the trend description
   * @param isPositive - Whether the trend is positive
   * @returns CSS class string for the trend description
   */
  static getTrendDescriptionClass(isPositive: boolean): string {
    const baseClass = 'ml-[--spacing-sm] text-sm';
    const colorClass = isPositive ? 'text-[--color-success-600]' : 'text-[--color-danger-600]';
    
    return `${baseClass} ${colorClass}`;
  }
}