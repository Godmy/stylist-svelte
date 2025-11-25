import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IBlockquoteProps {
  /**
   * Content of the blockquote
   */
  children?: Snippet;
  /**
   * Source URL for the quotation
   */
  cite?: string;
  /**
   * Whether to include border styling
   */
  withBorder?: boolean;
  /**
   * Whether to include background styling
   */
  withBackground?: boolean;
  /**
   * Additional CSS classes
   */
  class?: string;
}

export type BlockquoteProps = IBlockquoteProps & HTMLBlockquoteAttributes;