/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing sentiment analysis styling logic
 * Uses CSS variables from the theme system
 */
export class SentimentAnalysisStyleManager {
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
    const baseClass = 'border-b p-[--spacing-md] flex items-center';
    
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the header title
   * @returns CSS class string for the header title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
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
   * Creates CSS class string for the input label
   * @returns CSS class string for the input label
   */
  static getInputLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the text input area
   * @param inputClass - Additional CSS classes for the input
   * @returns Combined CSS class string for the text input area
   */
  static getInputAreaClass(inputClass: string = ''): string {
    const baseClass = 'w-full h-32 p-[--spacing-md] border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    
    return inputClass ? `${baseClass} ${inputClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the analyze button
   * @param isAnalyzing - Whether the analysis is in progress
   * @param isDisabled - Whether the button is disabled
   * @returns Combined CSS class string for the analyze button
   */
  static getAnalyzeButtonClass(isAnalyzing: boolean, isDisabled: boolean): string {
    const baseClass = 'w-full inline-flex justify-center items-center px-[--spacing-md] py-[--spacing-sm] border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse]';
    const enabledClass = isAnalyzing || isDisabled
      ? 'bg-[--color-primary-400] cursor-not-allowed'
      : 'bg-[--color-primary-600] hover:bg-[--color-primary-700]';
    
    return `${baseClass} ${enabledClass}`.trim();
  }

  /**
   * Creates CSS class string for the loading spinner
   * @returns CSS class string for the loading spinner
   */
  static getLoadingSpinnerClass(): string {
    return 'h-4 w-4 mr-[--spacing-sm] animate-spin';
  }

  /**
   * Creates CSS class string for the error message container
   * @returns CSS class string for the error message container
   */
  static getErrorMessageContainerClass(): string {
    return 'mt-[--spacing-md] p-[--spacing-md] bg-[--color-danger-50] rounded-md flex items-center';
  }

  /**
   * Creates CSS class string for the error icon
   * @returns CSS class string for the error icon
   */
  static getErrorIconClass(): string {
    return 'h-5 w-5 text-[--color-danger-500] mr-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the error message text
   * @returns CSS class string for the error message text
   */
  static getErrorMessageClass(): string {
    return 'text-sm text-[--color-danger-700]';
  }

  /**
   * Creates CSS class string for the result section
   * @param resultClass - Additional CSS classes for the result
   * @returns Combined CSS class string for the result section
   */
  static getResultSectionClass(resultClass: string = ''): string {
    const baseClass = 'mt-[--spacing-lg] p-[--spacing-lg] border rounded-lg';
    
    return resultClass ? `${baseClass} ${resultClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the sentiment icon container
   * @returns CSS class string for the sentiment icon container
   */
  static getSentimentIconContainerClass(): string {
    return 'flex items-center justify-center mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the sentiment icon
   * @param score - Sentiment score (-1 to 1)
   * @returns CSS class string for the sentiment icon
   */
  static getSentimentIconClass(score: number): string {
    const baseClass = 'h-12 w-12';
    let colorClass = '';
    
    if (score < -0.3) {
      colorClass = 'text-[--color-danger-500]';
    } else if (score < 0.3) {
      colorClass = 'text-[--color-warning-500]';
    } else {
      colorClass = 'text-[--color-success-500]';
    }
    
    return `${baseClass} ${colorClass}`.trim();
  }

  /**
   * Creates CSS class string for the sentiment label
   * @returns CSS class string for the sentiment label
   */
  static getSentimentLabelClass(): string {
    return 'text-lg font-semibold text-[--color-text-primary] capitalize';
  }

  /**
   * Creates CSS class string for the sentiment score
   * @param score - Sentiment score (-1 to 1)
   * @returns CSS class string for the sentiment score
   */
  static getSentimentScoreClass(score: number): string {
    const baseClass = 'text-3xl font-bold';
    let colorClass = '';
    
    if (score < -0.3) {
      colorClass = 'text-[--color-danger-500]';
    } else if (score < 0.3) {
      colorClass = 'text-[--color-warning-500]';
    } else {
      colorClass = 'text-[--color-success-500]';
    }
    
    return `${baseClass} ${colorClass}`.trim();
  }

  /**
   * Creates CSS class string for the confidence label
   * @returns CSS class string for the confidence label
   */
  static getConfidenceLabelClass(): string {
    return 'text-sm text-[--color-text-secondary] mt-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the breakdown header
   * @returns CSS class string for the breakdown header
   */
  static getBreakdownHeaderClass(): string {
    return 'flex justify-between text-sm text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the sentiment breakdown bar
   * @returns CSS class string for the sentiment breakdown bar
   */
  static getBreakdownBarClass(): string {
    return 'w-full h-2 bg-[--color-background-tertiary] rounded-full overflow-hidden flex';
  }

  /**
   * Creates CSS class string for the negative sentiment segment
   * @returns CSS class string for the negative sentiment segment
   */
  static getNegativeSegmentClass(): string {
    return 'h-full bg-[--color-danger-500]';
  }

  /**
   * Creates CSS class string for the neutral sentiment segment
   * @returns CSS class string for the neutral sentiment segment
   */
  static getNeutralSegmentClass(): string {
    return 'h-full bg-[--color-warning-500]';
  }

  /**
   * Creates CSS class string for the positive sentiment segment
   * @returns CSS class string for the positive sentiment segment
   */
  static getPositiveSegmentClass(): string {
    return 'h-full bg-[--color-success-500]';
  }

  /**
   * Creates CSS class string for the sentiment scale container
   * @returns CSS class string for the sentiment scale container
   */
  static getSentimentScaleContainerClass(): string {
    return 'mt-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the gradient scale bar
   * @returns CSS class string for the gradient scale bar
   */
  static getGradientScaleClass(): string {
    return 'w-full h-4 bg-gradient-to-r from-[--color-danger-500] via-[--color-warning-500] to-[--color-success-500] rounded-full relative';
  }

  /**
   * Creates CSS class string for the score indicator
   * @param score - Sentiment score (-1 to 1)
   * @returns CSS class string for the score indicator
   */
  static getScoreIndicatorClass(score: number): string {
    const baseClass = 'absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full';
    let colorClass = '';
    
    if (score < -0.3) {
      colorClass = 'bg-[--color-danger-500]';
    } else if (score < 0.3) {
      colorClass = 'bg-[--color-warning-500]';
    } else {
      colorClass = 'bg-[--color-success-500]';
    }
    
    return `${baseClass} ${colorClass}`.trim();
  }

  /**
   * Creates CSS class string for the scale labels
   * @returns CSS class string for the scale labels
   */
  static getScaleLabelsClass(): string {
    return 'flex justify-between text-xs text-[--color-text-secondary] mt-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the footer section
   * @param footerClass - Additional CSS classes for the footer
   * @returns Combined CSS class string for the footer section
   */
  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t p-[--spacing-md] text-xs text-[--color-text-secondary]';
    
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }
}