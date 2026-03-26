import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { IDisableable, ILoadable, IStyleable } from '$stylist/information/type/attribute/common';

export interface IAlertAction {
  label: string;
  onClick: () => void;
}

export interface IAlertCardProps extends IDisableable, ILoadable, IStyleable<TokenAppearance, TokenSize>, Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick' | 'icon'> {
  class?: string;
  variant?: TokenAppearance;
  size?: TokenSize;
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

export interface IAlertCardElementProps extends IDisableable, ILoadable, IStyleable<TokenAppearance, TokenSize>, Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick' | 'icon'> {
  class?: string;
  variant?: TokenAppearance;
  size?: TokenSize;
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




