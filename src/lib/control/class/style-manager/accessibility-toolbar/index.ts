/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class AccessibilityToolbarStyleManager {
  static getContainerClass(className?: string): string {
    return `accessibility-toolbar ${className ?? ''}`.trim();
  }

  static getToolbarClass(className?: string): string {
    return `flex items-center gap-2 ${className ?? ''}`.trim();
  }

  static getButtonClass(className?: string): string {
    return `inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors ${className ?? ''}`.trim();
  }

  static getActiveButtonClass(className?: string): string {
    return `bg-primary-100 text-primary-700 ${className ?? ''}`.trim();
  }

  static getFontSizeDisplayClass(): string {
    return 'text-sm font-medium min-w-[3rem] text-center';
  }
}
