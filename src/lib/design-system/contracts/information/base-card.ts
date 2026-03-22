import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { Props } from '$stylist/design-system/contracts/information/common';

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




