import type { HTMLAttributes } from 'svelte/elements';

export type SyntaxHighlightedCodeVariant = 'default' | 'terminal' | 'diff';
export type SyntaxHighlightedCodeSize = 'sm' | 'md' | 'lg';

export interface ISyntaxHighlightedCodeProps extends HTMLAttributes<HTMLElement> {
  /**
   * Language for syntax highlighting
   */
  language?: string;
  /**
   * Code content to highlight
   */
  code: string;
  /**
   * Variant style
   */
  variant?: SyntaxHighlightedCodeVariant;
  /**
   * Size of the code block
   */
  size?: SyntaxHighlightedCodeSize;
  /**
   * Whether to show line numbers
   */
  showLineNumbers?: boolean;
  /**
   * Starting line number
   */
  startLineNumber?: number;
  /**
   * Additional CSS classes
   */
  class?: string;
}