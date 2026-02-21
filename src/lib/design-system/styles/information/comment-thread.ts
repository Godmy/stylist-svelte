export class CommentThreadStyleManager {
  static getWrapperClass(hostClass = ''): string {
    return `c-comment-thread border border-[--color-border-primary] rounded-lg overflow-hidden ${hostClass}`.trim();
  }

  static getHeaderClass(headerClass = ''): string {
    return `border-b px-4 py-3 flex items-center ${headerClass}`.trim();
  }

  static getComposerInputClass(inputClass = ''): string {
    const base = 'w-full px-4 py-2 border border-[--color-border-primary] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
    return `${base} ${inputClass}`.trim();
  }

  static getCommentClass(commentClass = ''): string {
    return `border-b pb-6 last:border-0 last:pb-0 ${commentClass}`.trim();
  }

  static getReplyClass(replyClass = ''): string {
    return `pt-4 border-t border-[--color-border-primary] ${replyClass}`.trim();
  }

  static getActionButtonClass(active = false): string {
    return active ? 'flex items-center text-sm text-[--color-primary-600]' : 'flex items-center text-sm text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }
}
