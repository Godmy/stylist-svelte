import type { HTMLAttributes } from 'svelte/elements';
import type { ContainerMaxWidth } from '$stylist/design-system/tokens/architecture/layout';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerMaxWidth;
  class?: string;
}
