/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing prompt builder styling logic
 * Uses CSS variables from the theme system
 */
export class PromptBuilderStyleManager {
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
   * Creates CSS class string for the header title
   * @returns CSS class string for the header title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the header buttons container
   * @returns CSS class string for the header buttons container
   */
  static getHeaderButtonsClass(): string {
    return 'flex space-x-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the copy button
   * @param isCopied - Whether the content has been copied
   * @returns CSS class string for the copy button
   */
  static getCopyButtonClass(isCopied: boolean): string {
    const baseClass = 'inline-flex items-center px-[--spacing-sm] py-[--spacing-xs] border border-[--color-border-primary] text-sm font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none';
    const activeClass = isCopied ? 'text-[--color-success-600]' : '';
    
    return `${baseClass} ${activeClass}`.trim();
  }

  /**
   * Creates CSS class string for the run button
   * @param isRunning - Whether the prompt is running
   * @returns CSS class string for the run button
   */
  static getRunButtonClass(isRunning: boolean): string {
    const baseClass = 'inline-flex items-center px-[--spacing-sm] py-[--spacing-xs] border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
    const disabledClass = isRunning ? 'opacity-50 cursor-not-allowed' : '';
    
    return [baseClass, disabledClass].filter(Boolean).join(' ').trim();
  }

  /**
   * Creates CSS class string for the loading spinner
   * @returns CSS class string for the loading spinner
   */
  static getLoadingSpinnerClass(): string {
    return 'h-4 w-4 mr-[--spacing-xs] animate-spin';
  }

  /**
   * Creates CSS class string for the main layout container
   * @returns CSS class string for the main layout container
   */
  static getMainLayoutClass(): string {
    return 'flex';
  }

  /**
   * Creates CSS class string for the templates sidebar
   * @returns CSS class string for the templates sidebar
   */
  static getTemplatesSidebarClass(): string {
    return 'w-[--width-sidebar-md] border-r p-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the templates header
   * @returns CSS class string for the templates header
   */
  static getTemplatesHeaderClass(): string {
    return 'flex items-center justify-between mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the templates section title
   * @returns CSS class string for the templates section title
   */
  static getTemplatesTitleClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the add template button
   * @returns CSS class string for the add template button
   */
  static getAddTemplateButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-tertiary]';
  }

  /**
   * Creates CSS class string for the templates list
   * @returns CSS class string for the templates list
   */
  static getTemplatesListClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for a template item
   * @param isSelected - Whether the template is selected
   * @returns CSS class string for a template item
   */
  static getTemplateItemClass(isSelected: boolean): string {
    const baseClass = 'w-full text-left p-[--spacing-sm] rounded-md text-sm';
    const selectedClass = isSelected 
      ? 'bg-[--color-primary-100] text-[--color-primary-800]' 
      : 'hover:bg-[--color-background-secondary]';
    
    return `${baseClass} ${selectedClass}`.trim();
  }

  /**
   * Creates CSS class string for the template name
   * @returns CSS class string for the template name
   */
  static getTemplateNameClass(): string {
    return 'font-medium';
  }

  /**
   * Creates CSS class string for the template description
   * @returns CSS class string for the template description
   */
  static getTemplateDescriptionClass(): string {
    return 'text-xs text-[--color-text-secondary] truncate';
  }

  /**
   * Creates CSS class string for the main content area
   * @returns CSS class string for the main content area
   */
  static getMainContentClass(): string {
    return 'flex-1 flex flex-col';
  }

  /**
   * Creates CSS class string for the prompt editor section
   * @returns CSS class string for the prompt editor section
   */
  static getPromptEditorSectionClass(): string {
    return 'flex-1 p-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the prompt editor label
   * @returns CSS class string for the prompt editor label
   */
  static getPromptEditorLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the prompt editor textarea
   * @param editorClass - Additional CSS classes for the editor
   * @returns Combined CSS class string for the prompt editor textarea
   */
  static getPromptEditorClass(editorClass: string = ''): string {
    const baseClass = 'w-full h-48 p-[--spacing-sm] border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] font-mono text-sm';
    
    return editorClass ? `${baseClass} ${editorClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the variables section
   * @returns CSS class string for the variables section
   */
  static getVariablesSectionClass(): string {
    return 'border-t p-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the variables header
   * @returns CSS class string for the variables header
   */
  static getVariablesHeaderClass(): string {
    return 'flex items-center justify-between mb-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the variables title
   * @returns CSS class string for the variables title
   */
  static getVariablesTitleClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the add variable button
   * @returns CSS class string for the add variable button
   */
  static getAddVariableButtonClass(): string {
    return 'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
  }

  /**
   * Creates CSS class string for the variables list
   * @returns CSS class string for the variables list
   */
  static getVariablesListClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for a variable item
   * @param variableClass - Additional CSS classes for the variable
   * @returns Combined CSS class string for a variable item
   */
  static getVariableItemClass(variableClass: string = ''): string {
    const baseClass = 'border rounded-md p-[--spacing-sm]';
    
    return variableClass ? `${baseClass} ${variableClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the variable info container
   * @returns CSS class string for the variable info container
   */
  static getVariableInfoContainerClass(): string {
    return 'flex items-center justify-between';
  }

  /**
   * Creates CSS class string for the variable name
   * @returns CSS class string for the variable name
   */
  static getVariableNameClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the variable type badge
   * @returns CSS class string for the variable type badge
   */
  static getVariableTypeBadgeClass(): string {
    return 'ml-[--spacing-sm] inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[--color-background-tertiary] text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the required badge
   * @returns CSS class string for the required badge
   */
  static getRequiredBadgeClass(): string {
    return 'ml-[--spacing-sm] inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[--color-danger-100] text-[--color-danger-800]';
  }

  /**
   * Creates CSS class string for the variable actions container
   * @returns CSS class string for the variable actions container
   */
  static getVariableActionsClass(): string {
    return 'flex space-x-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the variable action buttons
   * @returns CSS class string for the variable action buttons
   */
  static getVariableActionButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the variable description
   * @returns CSS class string for the variable description
   */
  static getVariableDescriptionClass(): string {
    return 'mt-[--spacing-xs] text-xs text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the footer section
   * @param footerClass - Additional CSS classes for the footer
   * @returns Combined CSS class string for the footer section
   */
  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t p-[--spacing-md] flex justify-end space-x-[--spacing-md]';
    
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the cancel button
   * @returns CSS class string for the cancel button
   */
  static getCancelButtonClass(): string {
    return 'inline-flex items-center px-[--spacing-sm] py-2 border border-[--color-border-primary] shadow-sm text-sm font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none';
  }

  /**
   * Creates CSS class string for the save button
   * @returns CSS class string for the save button
   */
  static getSaveButtonClass(): string {
    return 'inline-flex items-center px-[--spacing-sm] py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
  }
}