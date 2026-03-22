import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { IDisableable, ILoadable, IStyleable } from '$stylist/design-system/contracts/information/common';

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




