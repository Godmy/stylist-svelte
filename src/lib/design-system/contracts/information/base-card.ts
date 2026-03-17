import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { Props } from '$stylist/design-system/contracts/information/common';

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



