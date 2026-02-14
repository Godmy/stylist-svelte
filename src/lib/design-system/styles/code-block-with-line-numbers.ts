export class CodeBlockWithLineNumbersStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-code-block-with-line-numbers rounded-lg border border-gray-200 overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getMainContentClass(): string {
    return 'flex';
  }

  static getHeaderClass(extraClasses: string = ''): string {
    const baseClass = 'bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getLineNumbersContainerClass(extraClasses: string = ''): string {
    const baseClass = 'bg-gray-100 py-4 text-right select-none text-gray-500 text-sm';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getLineNumberItemClass(isHighlighted: boolean): string {
    const baseClass = 'pr-3 pl-2';
    return isHighlighted ? `${baseClass} bg-yellow-100` : baseClass;
  }

  static getContentContainerClass(extraClasses: string = ''): string {
    const baseClass = 'flex-1 overflow-x-auto';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getPreClass(extraClasses: string = ''): string {
    const baseClass = 'p-4 text-sm overflow-x-auto max-w-full';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getCopyButtonContainerClass(): string {
    return 'absolute top-2 right-2';
  }

  static getIconClass(): string {
    return 'h-4 w-4';
  }
}