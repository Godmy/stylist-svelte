export class LocaleSwitcherStyleManager {
  static getRootClass(className: string): string {
    return `c-locale-switcher bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`.trim();
  }

  static getHeaderClass(headerClass: string): string {
    return `border-b px-6 py-5 ${headerClass}`.trim();
  }

  static getContentClass(contentClass: string): string {
    return `p-6 ${contentClass}`.trim();
  }

  static getLocaleButtonClass(isActive: boolean, localeClass: string): string {
    const stateClass = isActive
      ? 'border-blue-500 ring-2 ring-blue-200'
      : 'border-gray-200 hover:border-gray-300';
    return `border rounded-lg p-4 flex items-center cursor-pointer ${stateClass} ${localeClass}`.trim();
  }

  static getTimezoneSelectClass(): string {
    return 'block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md';
  }

  static getFooterClass(footerClass: string): string {
    return `border-t px-6 py-4 ${footerClass}`.trim();
  }
}

