export class DocumentationBlockStyleManager {
  static getContainerClass(variantClasses: string, extraClasses: string = ''): string {
    const baseClass = 'c-documentation-block rounded-lg border overflow-hidden';
    return `${baseClass} ${variantClasses} ${extraClasses}`.trim();
  }

  static getHeaderContainerClass(variantHeaderClasses: string): string {
    return `px-4 py-3 border-b ${variantHeaderClasses}`;
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

  static getContentClass(): string {
    return 'p-4 prose prose-gray dark:prose-invert max-w-none';
  }

  static getCodeExamplesContainerClass(): string {
    return 'mt-6 space-y-6';
  }

  static getCodeExampleDividerClass(): string {
    return '';
  }
}