import type { HTMLAttributes } from 'svelte/elements';
import type { ContainerMaxWidth } from '$stylist/design-system/tokens/architecture/size';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerMaxWidth;
  class?: string;
}


