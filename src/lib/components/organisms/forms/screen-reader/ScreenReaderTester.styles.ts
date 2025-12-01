/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing screen reader tester styling logic
 * Uses CSS variables from the theme system
 */
export class ScreenReaderTesterStyleManager {
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
    const baseClass = 'border-b px-[--spacing-lg] py-[--spacing-md]';
    
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the main content area
   * @returns CSS class string for the main content area
   */
  static getContentAreaClass(): string {
    return 'p-[--spacing-lg]';
  }

  /**
   * Creates CSS class string for the audio player controls
   * @param playerClass - Additional CSS classes for the player
   * @returns Combined CSS class string for the player controls
   */
  static getPlayerClass(playerClass: string = ''): string {
    const baseClass = 'flex items-center justify-between mb-[--spacing-lg] p-[--spacing-md] bg-[--color-background-secondary] rounded-lg';
    
    return playerClass ? `${baseClass} ${playerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the playback indicator
   * @returns CSS class string for the playback indicator
   */
  static getPlaybackIndicatorClass(): string {
    return 'animate-pulse flex space-x-1';
  }

  /**
   * Creates CSS class string for the playback indicator dots
   * @returns CSS class string for the playback indicator dots
   */
  static getPlaybackDotClass(): string {
    return 'h-2 w-2 bg-[--color-primary-500] rounded-full';
  }

  /**
   * Creates CSS class string for the playback text
   * @returns CSS class string for the playback text
   */
  static getPlaybackTextClass(): string {
    return 'ml-[--spacing-sm] text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the ready state text
   * @returns CSS class string for the ready state text
   */
  static getReadyStateTextClass(): string {
    return 'flex items-center text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the volume control container
   * @returns CSS class string for the volume control container
   */
  static getVolumeControlContainerClass(): string {
    return 'flex items-center';
  }

  /**
   * Creates CSS class string for the volume icon
   * @returns CSS class string for the volume icon
   */
  static getVolumeIconClass(): string {
    return 'h-4 w-4 text-[--color-text-secondary] mr-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the volume input
   * @returns CSS class string for the volume input
   */
  static getVolumeInputClass(): string {
    return 'w-24 h-2 bg-[--color-background-tertiary] rounded-lg appearance-none cursor-pointer';
  }

  /**
   * Creates CSS class string for the volume percentage text
   * @returns CSS class string for the volume percentage text
   */
  static getVolumePercentageClass(): string {
    return 'ml-[--spacing-sm] text-sm text-[--color-text-secondary] w-10';
  }

  /**
   * Creates CSS class string for the stop button
   * @returns CSS class string for the stop button
   */
  static getStopButtonClass(): string {
    return 'p-2 text-[--color-danger-600] hover:text-[--color-danger-800]';
  }

  /**
   * Creates CSS class string for the test elements container
   * @returns CSS class string for the test elements container
   */
  static getTestElementsContainerClass(): string {
    return 'space-y-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the test elements header
   * @returns CSS class string for the test elements header
   */
  static getTestElementsHeaderClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for each test item
   * @param isActive - Whether the item is currently being tested
   * @param itemClass - Additional CSS classes for the item
   * @returns Combined CSS class string for each test item
   */
  static getTestItemClass(isActive: boolean, itemClass: string = ''): string {
    const baseClass = 'border rounded-lg p-[--spacing-md] flex items-start justify-between';
    const activeClass = isActive 
      ? 'border-[--color-primary-500] bg-[--color-primary-50]' 
      : 'border-[--color-border-primary]';
    
    return [baseClass, activeClass, itemClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the tips section
   * @returns CSS class string for the tips section
   */
  static getTipsSectionClass(): string {
    return 'mt-[--spacing-lg] p-[--spacing-md] bg-[--color-primary-50] rounded-lg';
  }

  /**
   * Creates CSS class string for the tips header
   * @returns CSS class string for the tips header
   */
  static getTipsHeaderClass(): string {
    return 'text-sm font-medium text-[--color-primary-800] flex items-center';
  }

  /**
   * Creates CSS class string for the tips icon
   * @returns CSS class string for the tips icon
   */
  static getTipsIconClass(): string {
    return 'h-4 w-4 mr-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the tips list
   * @returns CSS class string for the tips list
   */
  static getTipsListClass(): string {
    return 'mt-[--spacing-sm] text-sm text-[--color-primary-700] list-disc pl-5 space-y-1';
  }

  /**
   * Creates CSS class string for the element preview
   * @returns CSS class string for the element preview
   */
  static getElementPreviewClass(): string {
    return 'mt-[--spacing-sm] p-2 bg-[--color-background-tertiary] rounded text-sm';
  }

  /**
   * Creates CSS class string for the test button
   * @param isActive - Whether the button is currently active
   * @returns CSS class string for the test button
   */
  static getTestButtonClass(isActive: boolean): string {
    return isActive 
      ? 'p-2 rounded-full bg-[--color-danger-100] text-[--color-danger-600]' 
      : 'p-2 rounded-full bg-[--color-primary-100] text-[--color-primary-600] hover:bg-[--color-primary-200]';
  }
}