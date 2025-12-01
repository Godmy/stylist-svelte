/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing model selector styling logic
 * Uses CSS variables from the theme system
 */
export class ModelSelectorStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'relative';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the main dropdown button
   * @param dropdownClass - Additional CSS classes for the dropdown
   * @returns Combined CSS class string for the dropdown button
   */
  static getDropdownButtonClass(dropdownClass: string = ''): string {
    const baseClass = 'w-full flex items-center justify-between px-4 py-2 text-left bg-[--color-background-primary] border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
    
    return dropdownClass ? `${baseClass} ${dropdownClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the model information container in the dropdown button
   * @returns CSS class string for the model information container
   */
  static getModelInfoContainerClass(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Creates CSS class string for the selected model name
   * @returns CSS class string for the selected model name
   */
  static getSelectedModelNameClass(): string {
    return 'block truncate font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the selected model description
   * @returns CSS class string for the selected model description
   */
  static getSelectedModelDescriptionClass(): string {
    return 'block text-sm truncate text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the placeholder text
   * @returns CSS class string for the placeholder text
   */
  static getPlaceholderClass(): string {
    return 'block truncate text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the chevron icon
   * @param isOpen - Whether the dropdown is open
   * @returns CSS class string for the chevron icon
   */
  static getChevronClass(isOpen: boolean): string {
    const baseClass = 'h-5 w-5 text-[--color-text-secondary] ml-[--spacing-sm] transition-transform';
    const rotationClass = isOpen ? 'rotate-180' : '';
    
    return [baseClass, rotationClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the dropdown menu
   * @param dropdownClass - Additional CSS classes for the dropdown
   * @returns Combined CSS class string for the dropdown menu
   */
  static getDropdownMenuClass(dropdownClass: string = ''): string {
    const baseClass = 'absolute z-10 mt-1 w-full bg-[--color-background-primary] shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm';
    
    return dropdownClass ? `${baseClass} ${dropdownClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for a model item in the dropdown
   * @param isSelected - Whether the model is selected
   * @param modelItemClass - Additional CSS classes for the model item
   * @returns Combined CSS class string for a model item
   */
  static getModelItemClass(isSelected: boolean, modelItemClass: string = ''): string {
    const baseClass = 'flex items-start p-[--spacing-md] hover:bg-[--color-background-secondary] cursor-pointer';
    const selectedClass = isSelected ? 'bg-[--color-primary-50]' : '';
    
    return [baseClass, selectedClass, modelItemClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the model details container
   * @returns CSS class string for the model details container
   */
  static getModelDetailsContainerClass(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Creates CSS class string for the model name
   * @returns CSS class string for the model name
   */
  static getModelNameClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the model provider and version
   * @returns CSS class string for the model provider and version
   */
  static getModelProviderVersionClass(): string {
    return 'ml-[--spacing-xs] text-xs text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the model description
   * @returns CSS class string for the model description
   */
  static getModelDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary] mt-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the capabilities container
   * @returns CSS class string for the capabilities container
   */
  static getCapabilitiesContainerClass(): string {
    return 'mt-[--spacing-sm] flex flex-wrap gap-1';
  }

  /**
   * Creates CSS class string for a capability tag
   * @returns CSS class string for a capability tag
   */
  static getCapabilityTagClass(): string {
    return 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800]';
  }

  /**
   * Creates CSS class string for the "more capabilities" tag
   * @returns CSS class string for the "more capabilities" tag
   */
  static getMoreCapabilitiesTagClass(): string {
    return 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[--color-background-tertiary] text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the tags container
   * @returns CSS class string for the tags container
   */
  static getTagsContainerClass(): string {
    return 'mt-[--spacing-sm] flex flex-wrap gap-1';
  }

  /**
   * Creates CSS class string for a tag
   * @returns CSS class string for a tag
   */
  static getTagClass(): string {
    return 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[--color-background-tertiary] text-[--color-text-secondary]';
  }
}