import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '../../tokens/architecture/sizes';
import type { Props } from './common';

export type PriceAlertVariant = 'monitoring' | 'reached' | 'exceeded';
export type PriceAlertStatus = 'monitoring' | 'reached' | 'exceeded';

export interface IPriceAlertElementProps extends Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>, Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: PriceAlertVariant;
  size?: ComponentSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  currentPrice?: number;
  targetPrice?: number;
  currency?: string;
  status?: PriceAlertStatus;
  productName?: string;
  onStatusChange?: (status: PriceAlertStatus) => void;
  children?: Snippet;
}

export type PriceAlertElementProps = IPriceAlertElementProps;