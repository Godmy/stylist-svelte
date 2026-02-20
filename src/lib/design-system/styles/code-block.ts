/**
 * StyleManager for unified CodeBlock component
 * 
 * Consolidates styles from:
 * - code-block-with-line-numbers
 * - copyable-code-block
 * - code-editor
 */

export class CodeBlockStyleManager {
  /**
   * Get container classes
   */
  static getContainerClass(className?: string): string {
    return `c-code-block rounded-lg border border-gray-200 bg-white overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Get header classes
   */
  static getHeaderClass(className?: string): string {
    return `flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50 ${className || ''}`.trim();
  }

  /**
   * Get line numbers container classes
   */
  static getLineNumbersContainerClass(className?: string): string {
    return `select-none text-right pr-4 pl-2 py-4 bg-gray-100 border-r border-gray-200 text-gray-400 text-sm font-mono ${className || ''}`.trim();
  }

  /**
   * Get line number item classes
   */
  static getLineNumberItemClass(isHighlighted: boolean): string {
    return isHighlighted 
      ? 'bg-yellow-200 text-gray-900' 
      : 'text-gray-400';
  }

  /**
   * Get content container classes
   */
  static getContentContainerClass(className?: string): string {
    return `flex-1 overflow-auto ${className || ''}`.trim();
  }

  /**
   * Get pre classes
   */
  static getPreClass(className?: string): string {
    return `p-4 overflow-auto text-sm ${className || ''}`.trim();
  }

  /**
   * Get copy button container classes
   */
  static getCopyButtonContainerClass(): string {
    return 'absolute top-2 right-2';
  }

  /**
   * Get icon classes
   */
  static getIconClass(): string {
    return 'w-4 h-4';
  }

  /**
   * Get main content wrapper classes (for layout with line numbers)
   */
  static getMainContentClass(): string {
    return 'flex';
  }
}

export default CodeBlockStyleManager;
