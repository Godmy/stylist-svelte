import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { Props } from '$stylist/information/type/attribute/common';

export interface IBaseCardElementProps extends Omit<Props, 'variant' | 'size' | 'onclick'>, Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: TokenAppearance;
  size?: TokenSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  title?: string;
  description?: string;
  headerClass?: string;
  bodyClass?: string;
  children?: Snippet;
}




