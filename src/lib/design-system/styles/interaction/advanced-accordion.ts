/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing advanced accordion styling logic
 * Uses CSS variables from the theme system
 */
export class AdvancedAccordionStyleManager {
  /**
   * Creates CSS class string for the main accordion container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'border rounded-lg overflow-hidden';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for accordion item
   * @returns CSS class string for accordion item
   */
  static getItemClass(): string {
    return '';
  }

  /**
   * Creates CSS class string for accordion header button
   * @param isActive - Whether the accordion item is active
   * @returns CSS class string for accordion header button
   */
  static getHeaderClass(isActive: boolean): string {
    const baseClass = 'w-full text-left p-[--spacing-md] font-medium flex justify-between items-center';
    const stateClass = isActive 
      ? 'bg-[--color-primary-50] text-[--color-primary-700]' 
      : 'bg-[--color-background-primary] text-[--color-text-primary]';

    return `${baseClass} ${stateClass}`;
  }

  /**
   * Creates CSS class string for chevron icon
   * @param isActive - Whether the accordion item is active
   * @returns CSS class string for chevron icon
   */
  static getChevronClass(isActive: boolean): string {
    const baseClass = 'w-5 h-5 transform transition-transform duration-200';
    const rotationClass = isActive ? 'rotate-180' : '';

    return `${baseClass} ${rotationClass}`;
  }

  /**
   * Creates CSS class string for accordion content panel
   * @returns CSS class string for accordion content panel
   */
  static getContentPanelClass(): string {
    return 'p-[--spacing-md] border-t bg-[--color-background-primary]';
  }
}