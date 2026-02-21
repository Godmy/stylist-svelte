export class SentimentAnalysisStyleManager {
  static getContainerClass(customClass = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getHeaderClass(headerClass = ''): string {
    const baseClass = 'border-b p-[--spacing-md] flex items-center';
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  static getContentClass(contentClass = ''): string {
    const baseClass = 'p-[--spacing-md]';
    return contentClass ? `${baseClass} ${contentClass}`.trim() : baseClass;
  }

  static getInputLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  static getInputAreaClass(inputClass = ''): string {
    const baseClass = 'w-full h-32 p-[--spacing-md] border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    return inputClass ? `${baseClass} ${inputClass}`.trim() : baseClass;
  }

  static getAnalyzeButtonClass(isAnalyzing: boolean, isDisabled: boolean): string {
    const baseClass = 'w-full inline-flex justify-center items-center px-[--spacing-md] py-[--spacing-sm] border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse]';
    const enabledClass = isAnalyzing || isDisabled ? 'bg-[--color-primary-400] cursor-not-allowed' : 'bg-[--color-primary-600] hover:bg-[--color-primary-700]';
    return `${baseClass} ${enabledClass}`.trim();
  }

  static getLoadingSpinnerClass(): string {
    return 'h-4 w-4 mr-[--spacing-sm] animate-spin';
  }

  static getErrorMessageContainerClass(): string {
    return 'mt-[--spacing-md] p-[--spacing-md] bg-[--color-danger-50] rounded-md flex items-center';
  }

  static getErrorIconClass(): string {
    return 'h-5 w-5 text-[--color-danger-500] mr-[--spacing-sm]';
  }

  static getErrorMessageClass(): string {
    return 'text-sm text-[--color-danger-700]';
  }

  static getResultSectionClass(resultClass = ''): string {
    const baseClass = 'mt-[--spacing-lg] p-[--spacing-lg] border rounded-lg';
    return resultClass ? `${baseClass} ${resultClass}`.trim() : baseClass;
  }

  static getSentimentIconContainerClass(): string {
    return 'flex items-center justify-center mb-[--spacing-md]';
  }

  static getSentimentIconClass(score: number): string {
    const baseClass = 'h-12 w-12';
    if (score < -0.3) return `${baseClass} text-[--color-danger-500]`;
    if (score < 0.3) return `${baseClass} text-[--color-warning-500]`;
    return `${baseClass} text-[--color-success-500]`;
  }

  static getSentimentLabelClass(): string {
    return 'text-lg font-semibold text-[--color-text-primary] capitalize';
  }

  static getSentimentScoreClass(score: number): string {
    const baseClass = 'text-3xl font-bold';
    if (score < -0.3) return `${baseClass} text-[--color-danger-500]`;
    if (score < 0.3) return `${baseClass} text-[--color-warning-500]`;
    return `${baseClass} text-[--color-success-500]`;
  }

  static getConfidenceLabelClass(): string {
    return 'text-sm text-[--color-text-secondary] mt-[--spacing-xs]';
  }

  static getBreakdownHeaderClass(): string {
    return 'flex justify-between text-sm text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  static getBreakdownBarClass(): string {
    return 'w-full h-2 bg-[--color-background-tertiary] rounded-full overflow-hidden flex';
  }

  static getNegativeSegmentClass(): string {
    return 'h-full bg-[--color-danger-500]';
  }

  static getNeutralSegmentClass(): string {
    return 'h-full bg-[--color-warning-500]';
  }

  static getPositiveSegmentClass(): string {
    return 'h-full bg-[--color-success-500]';
  }

  static getSentimentScaleContainerClass(): string {
    return 'mt-[--spacing-md]';
  }

  static getGradientScaleClass(): string {
    return 'w-full h-4 bg-gradient-to-r from-[--color-danger-500] via-[--color-warning-500] to-[--color-success-500] rounded-full relative';
  }

  static getScoreIndicatorClass(score: number): string {
    const baseClass = 'absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full';
    if (score < -0.3) return `${baseClass} bg-[--color-danger-500]`;
    if (score < 0.3) return `${baseClass} bg-[--color-warning-500]`;
    return `${baseClass} bg-[--color-success-500]`;
  }

  static getScaleLabelsClass(): string {
    return 'flex justify-between text-xs text-[--color-text-secondary] mt-[--spacing-xs]';
  }

  static getFooterClass(footerClass = ''): string {
    const baseClass = 'border-t p-[--spacing-md] text-xs text-[--color-text-secondary]';
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }
}
