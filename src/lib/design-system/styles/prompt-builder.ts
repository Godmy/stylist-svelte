export class PromptBuilderStyleManager {
  static getContainerClass(customClass = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getHeaderClass(headerClass = ''): string {
    const baseClass = 'border-b p-[--spacing-md] flex items-center justify-between';
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  static getHeaderButtonsClass(): string {
    return 'flex space-x-[--spacing-sm]';
  }

  static getCopyButtonClass(isCopied: boolean): string {
    const baseClass = 'inline-flex items-center px-[--spacing-sm] py-[--spacing-xs] border border-[--color-border-primary] text-sm font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none';
    const activeClass = isCopied ? 'text-[--color-success-600]' : '';
    return `${baseClass} ${activeClass}`.trim();
  }

  static getRunButtonClass(isRunning: boolean): string {
    const baseClass = 'inline-flex items-center px-[--spacing-sm] py-[--spacing-xs] border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
    const disabledClass = isRunning ? 'opacity-50 cursor-not-allowed' : '';
    return [baseClass, disabledClass].filter(Boolean).join(' ').trim();
  }

  static getLoadingSpinnerClass(): string {
    return 'h-4 w-4 mr-[--spacing-xs] animate-spin';
  }

  static getMainLayoutClass(): string {
    return 'flex';
  }

  static getTemplatesSidebarClass(): string {
    return 'w-[--width-sidebar-md] border-r p-[--spacing-md]';
  }

  static getTemplatesHeaderClass(): string {
    return 'flex items-center justify-between mb-[--spacing-md]';
  }

  static getTemplatesTitleClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getAddTemplateButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-tertiary]';
  }

  static getTemplatesListClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  static getTemplateItemClass(isSelected: boolean): string {
    const baseClass = 'w-full text-left p-[--spacing-sm] rounded-md text-sm';
    const selectedClass = isSelected ? 'bg-[--color-primary-100] text-[--color-primary-800]' : 'hover:bg-[--color-background-secondary]';
    return `${baseClass} ${selectedClass}`.trim();
  }

  static getTemplateNameClass(): string {
    return 'font-medium';
  }

  static getTemplateDescriptionClass(): string {
    return 'text-xs text-[--color-text-secondary] truncate';
  }

  static getMainContentClass(): string {
    return 'flex-1 flex flex-col';
  }

  static getPromptEditorSectionClass(): string {
    return 'flex-1 p-[--spacing-md]';
  }

  static getPromptEditorLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-[--spacing-xs]';
  }

  static getPromptEditorClass(editorClass = ''): string {
    const baseClass = 'w-full h-48 p-[--spacing-sm] border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] font-mono text-sm';
    return editorClass ? `${baseClass} ${editorClass}`.trim() : baseClass;
  }

  static getVariablesSectionClass(): string {
    return 'border-t p-[--spacing-md]';
  }

  static getVariablesHeaderClass(): string {
    return 'flex items-center justify-between mb-[--spacing-sm]';
  }

  static getVariablesTitleClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getAddVariableButtonClass(): string {
    return 'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
  }

  static getVariablesListClass(): string {
    return 'space-y-[--spacing-sm]';
  }

  static getVariableItemClass(variableClass = ''): string {
    const baseClass = 'border rounded-md p-[--spacing-sm]';
    return variableClass ? `${baseClass} ${variableClass}`.trim() : baseClass;
  }

  static getVariableInfoContainerClass(): string {
    return 'flex items-center justify-between';
  }

  static getVariableNameClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getVariableTypeBadgeClass(): string {
    return 'ml-[--spacing-sm] inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[--color-background-tertiary] text-[--color-text-secondary]';
  }

  static getRequiredBadgeClass(): string {
    return 'ml-[--spacing-sm] inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[--color-danger-100] text-[--color-danger-800]';
  }

  static getVariableActionsClass(): string {
    return 'flex space-x-[--spacing-sm]';
  }

  static getVariableActionButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  static getVariableDescriptionClass(): string {
    return 'mt-[--spacing-xs] text-xs text-[--color-text-secondary]';
  }

  static getFooterClass(footerClass = ''): string {
    const baseClass = 'border-t p-[--spacing-md] flex justify-end space-x-[--spacing-md]';
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  static getCancelButtonClass(): string {
    return 'inline-flex items-center px-[--spacing-sm] py-2 border border-[--color-border-primary] shadow-sm text-sm font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none';
  }

  static getSaveButtonClass(): string {
    return 'inline-flex items-center px-[--spacing-sm] py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
  }
}
