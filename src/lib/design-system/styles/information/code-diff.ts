export class CodeDiffStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-code-diff rounded-lg border border-gray-200 overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getHeaderClass(extraClasses: string = ''): string {
    const baseClass = 'bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getMainContentClass(): string {
    return 'flex';
  }

  static getLineNumbersContainerClass(): string {
    return 'w-16 bg-gray-100 text-right select-none text-gray-500 text-sm py-2';
  }

  static getLineNumberItemClass(): string {
    return 'pr-2';
  }

  static getContentContainerClass(extraClasses: string = ''): string {
    const baseClass = 'flex-1 overflow-x-auto';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getDiffContentClass(): string {
    return 'text-sm';
  }

  static getDiffLineClass(type: string): string {
    switch (type) {
      case 'added':
        return 'px-4 py-1 bg-green-50 border-l-4 border-green-500';
      case 'removed':
        return 'px-4 py-1 bg-red-50 border-l-4 border-red-500';
      case 'unchanged':
        return 'px-4 py-1 bg-white';
      default:
        return 'px-4 py-1 bg-white';
    }
  }

  static getDiffSpanClass(type: string): string {
    switch (type) {
      case 'added':
        return 'text-green-700';
      case 'removed':
        return 'text-red-700';
      case 'unchanged':
        return 'text-gray-700';
      default:
        return 'text-gray-700';
    }
  }

  static getChangedContainerClass(): string {
    return 'bg-white';
  }
}