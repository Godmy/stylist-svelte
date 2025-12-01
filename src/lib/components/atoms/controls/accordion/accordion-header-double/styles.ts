/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing AccordionHeader styling logic
 * Uses CSS variables from the theme system
 */
export class AccordionHeaderStyleManager {
  /**
   * Creates CSS class string for the accordion header/button
   * @param expanded - Whether the accordion is expanded
   * @param disabled - Whether the accordion is disabled
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the accordion header
   */
  static getHeaderClass(expanded: boolean, disabled: boolean, headerClass: string = ''): string {
    const baseClass = 'flex w-full items-center justify-between p-[--spacing-md] text-left font-medium text-[--color-text-primary]';
    const expandedClass = expanded ? 'bg-[--color-background-secondary]' : 'hover:bg-[--color-background-secondary]';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    const borderClass = 'rounded-[--radius-md]';

    return [baseClass, expandedClass, disabledClass, borderClass, headerClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the chevron icon
   * @param expanded - Whether the accordion is expanded
   * @returns CSS class string for the chevron icon
   */
  static getChevronClass(expanded: boolean): string {
    const baseClass = 'w-5 h-5 text-[--color-text-secondary] transition-transform duration-200 ease-in-out';
    const rotationClass = expanded ? 'rotate-180' : '';

    return `${baseClass} ${rotationClass}`;
  }
}