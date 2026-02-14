export class CodeSectionStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-code-section rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getHeaderContainerClass(): string {
    return 'bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700';
  }

  static getHeaderContentClass(): string {
    return 'flex justify-between items-center';
  }

  static getTitleClass(): string {
    return 'font-semibold text-gray-800 dark:text-gray-200';
  }

  static getTagsContainerClass(): string {
    return 'flex gap-2';
  }

  static getTagClass(): string {
    return 'text-xs';
  }
}