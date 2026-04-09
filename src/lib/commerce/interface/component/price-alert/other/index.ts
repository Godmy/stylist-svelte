import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes, Props } from '$stylist/information/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

export interface IPriceAlertElementProps extends Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>, Omit<InformationHTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: TokenMonitoringType;
  size?: TokenSize;
  onclick?: ((event: MouseEvent) => void) | undefined;
  currentPrice?: number;
  targetPrice?: number;
  currency?: string;
  status?: TokenMonitoringType;
  productName?: string;
  onStatusChange?: (status: TokenMonitoringType) => void;
  children?: Snippet;
}




