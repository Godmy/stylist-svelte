/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class CanvasImageEditorStyleManager {
  static getCanvasClasses(className?: string): string {
    return `w-full h-full rounded-lg border border-gray-200 ${className ?? ''}`.trim();
  }

  static getContainerClasses(className?: string): string {
    return `relative overflow-hidden ${className ?? ''}`.trim();
  }

  static getToolbarClasses(): string {
    return 'absolute top-0 left-0 right-0 flex items-center gap-2 p-2 bg-black bg-opacity-50';
  }

  static getToolButtonClasses(): string {
    return 'p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 transition-colors';
  }
}
