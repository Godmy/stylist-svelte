import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type { Props } from './common';

export interface IBaseCardElementProps extends Omit<Props, 'variant' | 'size' | 'onclick'>, Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: DefaultVariants;
  size?: ComponentSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  title?: string;
  description?: string;
  headerClass?: string;
  bodyClass?: string;
  children?: Snippet;
}

export type BaseCardElementProps = IBaseCardElementProps;