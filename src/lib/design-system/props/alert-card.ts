import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type { IDisableable, ILoadable, IStyleable } from './common';

/** Действие в алерте */
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

export type AlertCardElementProps = IAlertCardElementProps;
