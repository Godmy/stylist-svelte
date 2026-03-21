import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { AlertType } from '$stylist/design-system/tokens/interaction/alert-types';
import type { Props } from '$stylist/design-system/contracts/information/common';

export interface IPriceAlertElementProps extends Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>, Omit<InformationHTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: AlertType;
  size?: ComponentSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  currentPrice?: number;
  targetPrice?: number;
  currency?: string;
  status?: AlertType;
  productName?: string;
  onStatusChange?: (status: AlertType) => void;
  children?: Snippet;
}



