import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { IDisableable, ILoadable, IStyleable } from '$stylist/design-system/contracts/information/common';

export interface IAlertAction {
  label: string;
  onClick: () => void;
}

export interface IAlertCardProps extends IDisableable, ILoadable, IStyleable<DefaultVariants, ComponentSize>, Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick' | 'icon'> {
  class?: string;
  variant?: DefaultVariants;
  size?: ComponentSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  title?: string;
  subtitle?: string;
  icon?: string | Snippet;
  actions?: IAlertAction[];
  children?: Snippet;
  ariaLabel?: string;
  block?: boolean;
  loadingLabel?: string;
}

export interface IAlertCardElementProps extends IDisableable, ILoadable, IStyleable<DefaultVariants, ComponentSize>, Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick' | 'icon'> {
  class?: string;
  variant?: DefaultVariants;
  size?: ComponentSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  title?: string;
  subtitle?: string;
  icon?: string | Snippet;
  actions?: IAlertAction[];
  children?: Snippet;
  ariaLabel?: string;
  block?: boolean;
  loadingLabel?: string;
}



