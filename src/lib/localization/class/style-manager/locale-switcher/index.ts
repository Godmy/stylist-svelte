export class LocaleSwitcherStyleManager {
  static getRootClass(className: string | undefined): string {
    return `c-locale-switcher bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary] overflow-hidden ${className ?? ''}`.trim();
  }

  static getHeaderClass(headerClass: string | undefined): string {
    return `border-b px-6 py-5 ${headerClass ?? ''}`.trim();
  }

  static getContentClass(contentClass: string | undefined): string {
    return `p-6 ${contentClass ?? ''}`.trim();
  }

  static getLocaleButtonClass(isActive: boolean, localeClass: string | undefined): string {
    const stateClass = isActive
      ? 'border-[--color-primary-500] ring-2 ring-[--color-primary-200]'
      : 'border-[--color-border-secondary] hover:border-[--color-border-tertiary]';
    return `border rounded-lg p-4 flex items-center cursor-pointer ${stateClass} ${localeClass ?? ''}`.trim();
  }

  static getTimezoneSelectClass(): string {
    return 'block w-full pl-3 pr-10 py-2 text-base border-[--color-border-secondary] focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm rounded-md';
  }

  static getFooterClass(footerClass: string | undefined): string {
    return `border-t px-6 py-4 ${footerClass ?? ''}`.trim();
  }
}

