import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type CodeBlockVariant = 'default' | 'terminal' | 'diff';
export type CodeBlockSize = 'sm' | 'md' | 'lg';

export interface ICodeBlockProps {
  /**
   * Language for syntax highlighting
   * @default 'text'
   */
  language?: string;
  /**
   * Visual variant ('default' | 'terminal' | 'diff')
   * @default 'default'
   */
  variant?: CodeBlockVariant;
  /**
   * Size of the code block ('sm' | 'md' | 'lg')
   * @default 'md'
   */
  size?: CodeBlockSize;
  /**
   * Whether to show line numbers
   * @default false
   */
  showLineNumbers?: boolean;
  /**
   * Starting line number
   * @default 1
   */
  startLineNumber?: number;
  /**
   * Snippet containing the code content
   */
  children?: Snippet;
  /**
   * Additional CSS classes
   */
  class?: string;
}

export type CodeBlockProps = ICodeBlockProps & HTMLAttributes<HTMLElement>;
