import { cn } from '$stylist/design-system/utils/cn/index';

export class CodeWithCopyStyleManager {
  static getContainerClass(): string {
    return 'c-code-with-copy relative group';
  }

  static getCodeContentClass(): string {
    return 'code-content';
  }

  static getCopyButtonClass(): string {
    return 'absolute right-2 top-2 rounded-md bg-[var(--color-background-secondary)] p-1.5 opacity-[var(--opacity-0)] transition-colors transition-opacity hover:bg-[var(--color-neutral-200)] group-hover:opacity-[var(--opacity-100)]';
  }

  static getIconClass(isCopied: boolean): string {
    return cn('h-4 w-4', isCopied ? 'text-[var(--color-success-600)]' : '');
  }
}


