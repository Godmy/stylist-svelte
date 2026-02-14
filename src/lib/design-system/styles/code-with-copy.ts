export class CodeWithCopyStyleManager {
  static getContainerClass(): string {
    return 'c-code-with-copy relative group';
  }

  static getCodeContentClass(): string {
    return 'code-content';
  }

  static getCopyButtonClass(): string {
    return 'absolute top-2 right-2 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity';
  }

  static getIconClass(isCopied: boolean): string {
    return isCopied ? 'w-4 h-4 text-green-600' : 'w-4 h-4';
  }
}