export class CommentSystemStyleManager {
  static getWrapperClass(hostClass = ''): string {
    return `c-comment-system ${hostClass}`.trim();
  }

  static getCardClass(): string {
    return 'bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] shadow-sm';
  }

  static getComposerClass(formClass = ''): string {
    return `p-6 ${formClass}`.trim();
  }

  static getInputClass(inputClass = ''): string {
    const base = 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
    return `${base} ${inputClass}`.trim();
  }

  static getHeaderClass(headerClass = ''): string {
    return `border-t border-[--color-border-primary] px-6 py-4 bg-[--color-background-secondary] ${headerClass}`.trim();
  }

  static getCommentItemClass(commentClass = '', depth = 0): string {
    const nested = depth > 0 ? 'ml-6' : '';
    return `border-b border-[--color-border-primary] pb-4 ${nested} ${commentClass}`.trim();
  }

  static getActionsClass(actionsClass = ''): string {
    return `mt-3 flex flex-wrap items-center gap-4 text-sm text-[--color-text-secondary] ${actionsClass}`.trim();
  }

  static getPrimaryButtonClass(buttonClass = ''): string {
    return `inline-flex items-center rounded-md bg-[--color-primary-600] px-3 py-2 text-sm font-medium text-[--color-text-inverse] hover:bg-[--color-primary-700] ${buttonClass}`.trim();
  }
}
