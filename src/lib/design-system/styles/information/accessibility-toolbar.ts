export class AccessibilityToolbarStyleManager {
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'c-accessibility-toolbar fixed bottom-[--spacing-md] left-1/2 transform -translate-x-1/2 bg-[--color-background-primary] shadow-lg rounded-full p-[--spacing-sm] z-50';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getToolbarClass(toolbarClass: string = ''): string {
    const baseClass = 'flex items-center space-x-1 p-[--spacing-xs]';

    return toolbarClass ? `${baseClass} ${toolbarClass}`.trim() : baseClass;
  }

  static getButtonClass(buttonClass: string = ''): string {
    const baseClass = 'p-2 rounded-full hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] text-[--color-text-primary]';

    return buttonClass ? `${baseClass} ${buttonClass}`.trim() : baseClass;
  }

  static getActiveButtonClass(buttonClass: string = ''): string {
    const baseClass = 'p-2 rounded-full hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] bg-[--color-primary-500] text-[--color-text-inverse]';

    return buttonClass ? `${baseClass} ${buttonClass}`.trim() : baseClass;
  }

  static getFontSizeDisplayClass(): string {
    return 'text-sm font-medium px-[--spacing-sm] text-[--color-text-primary]';
  }
}