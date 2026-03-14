import { cn } from '../../utils/cn/index';
import { CardStyleManager } from './card';

export class DocumentationBlockStyleManager {
  static getContainerClass(variantClasses: string, extraClasses: string = ''): string {
    return cn(
      'c-documentation-block border border-[var(--color-border-primary)]',
      CardStyleManager.getBaseClasses(),
      variantClasses,
      extraClasses
    );
  }

  static getHeaderContainerClass(variantHeaderClasses: string): string {
    return cn('border-b border-[var(--color-border-primary)] px-4 py-3', variantHeaderClasses);
  }

  static getHeaderContentClass(): string {
    return 'flex items-center justify-between gap-3';
  }

  static getTitleClass(): string {
    return 'font-semibold text-[var(--color-text-primary)]';
  }

  static getTagsContainerClass(): string {
    return 'flex flex-wrap gap-2';
  }

  static getTagClass(): string {
    return 'text-xs';
  }

  static getContentClass(): string {
    return 'prose max-w-none p-4 prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text-primary)]';
  }

  static getCodeExamplesContainerClass(): string {
    return 'mt-6 space-y-6';
  }

  static getCodeExampleDividerClass(): string {
    return '';
  }
}

