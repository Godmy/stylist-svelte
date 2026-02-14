export class CopyableCodeBlockStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-copyable-code-block rounded-lg border border-gray-200 overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getHeaderClass(extraClasses: string = ''): string {
    const baseClass = 'bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getRelativeContainerClass(): string {
    return 'relative';
  }

  static getPreClass(extraClasses: string = ''): string {
    const baseClass = 'p-4 text-sm overflow-x-auto max-w-full';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getCopyButtonContainerClass(): string {
    return 'absolute top-2 right-2';
  }

  static getIconClass(isCopied: boolean): string {
    return isCopied ? 'h-4 w-4 text-green-500' : 'h-4 w-4';
  }
}