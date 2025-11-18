/**
 * Blockquote types and interfaces following SOLID principles
 */

import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IBlockquoteProps {
  children: Snippet;
  cite?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  class?: string;
}

export interface IBlockquoteStyleClasses {
  blockquote: string;
  footer: string;
}

export type BlockquoteProps = IBlockquoteProps & HTMLBlockquoteAttributes;