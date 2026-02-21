/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing accordion styling logic
 * Uses CSS variables from the theme system
 */
export class AccordionStyleManager {
  /**
   * Creates CSS class string for the main accordion container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'accordion-container';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for each accordion item
   * @param itemClass - Additional CSS classes for the item
   * @returns Combined CSS class string for the accordion item
   */
  static getItemClass(itemClass: string = ''): string {
    const baseClass = 'accordion-item border border-[--color-border-primary] rounded-lg mb-[--spacing-sm]';

    return itemClass ? `${baseClass} ${itemClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the accordion header/button
   * @param expanded - Whether the accordion is expanded
   * @param disabled - Whether the accordion is disabled
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the accordion header
   */
  static getHeaderClass(expanded: boolean, disabled: boolean, headerClass: string = ''): string {
    const baseClass = 'w-full flex justify-between items-center p-[--spacing-md] text-left font-medium text-[--color-text-primary] hover:bg-[--color-background-secondary] rounded-lg';
    const expandedClass = expanded ? 'bg-[--color-background-secondary]' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return [baseClass, expandedClass, disabledClass, headerClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the chevron icon
   * @param expanded - Whether the accordion is expanded
   * @returns CSS class string for the chevron icon
   */
  static getChevronClass(expanded: boolean): string {
    const baseClass = 'w-5 h-5 transition-transform duration-200 ease-in-out';
    const rotationClass = expanded ? 'rotate-180' : '';

    return `${baseClass} ${rotationClass}`;
  }

  /**
   * Creates CSS class string for the accordion content panel
   * @param expanded - Whether the content panel is expanded
   * @param contentClass - Additional CSS classes for the content
   * @returns Combined CSS class string for the content panel
   */
  static getContentPanelClass(expanded: boolean, contentClass: string = ''): string {
    const baseClass = 'overflow-hidden transition-all duration-200 ease-in-out';
    const sizeClass = expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0';

    return [baseClass, sizeClass, contentClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the content wrapper inside the panel
   * @returns CSS class string for the content wrapper
   */
  static getContentWrapperClass(): string {
    return 'p-[--spacing-md] border-t border-[--color-border-primary]';
  }
}