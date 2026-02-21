export class PageBuilderStyleManager {
  static getContainerClasses(className: string): string {
    return `c-page-builder border border-[--color-border] rounded-lg overflow-hidden ${className}`.trim();
  }

  static getToolbarClasses(toolbarClass: string): string {
    return `flex items-center p-3 border-b border-[--color-border] bg-[--color-background-secondary] ${toolbarClass}`.trim();
  }

  static getToolbarButtonClasses(): string {
    return 'p-2 rounded hover:bg-[--color-background-hover] flex items-center';
  }

  static getCanvasClasses(canvasClass: string, isPreviewMode: boolean): string {
    const modeClass = isPreviewMode ? 'bg-[--color-background-secondary]' : 'bg-[--color-background-primary]';
    return `flex-1 p-6 min-h-[500px] ${modeClass} ${canvasClass}`.trim();
  }

  static getElementClasses(isSelected: boolean, elementClass: string): string {
    const selectedClass = isSelected ? 'border-[--color-primary-500]' : 'border-[--color-border-transparent]';
    return `relative group border ${selectedClass} p-2 mb-2 rounded ${elementClass}`.trim();
  }

  static getDragHandleClasses(): string {
    return 'absolute -left-6 top-0 p-1 cursor-move text-[--color-text-secondary] opacity-0 group-hover:opacity-100';
  }

  static getElementControlButtonClasses(isDeleteButton: boolean): string {
    return isDeleteButton
      ? 'p-1 rounded hover:bg-[--color-background-hover] text-[--color-danger]'
      : 'p-1 rounded hover:bg-[--color-background-hover]';
  }

  static getAddElementButtonClasses(): string {
    return 'inline-flex items-center px-3 py-1 border border-[--color-border] shadow-sm text-sm leading-4 font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary]';
  }

  static getPropertiesPanelClasses(): string {
    return 'w-80 border-l border-[--color-border] p-4 bg-[--color-background-primary]';
  }

  static getPropertiesPanelHeaderClasses(): string {
    return 'flex items-center justify-between mb-4';
  }

  static getInputFieldClasses(): string {
    return 'block w-full px-3 py-2 border border-[--color-border] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
  }

  static getSliderClasses(): string {
    return 'block w-full';
  }
}

