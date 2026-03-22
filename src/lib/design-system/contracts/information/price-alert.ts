import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenMonitoringType } from '$stylist/design-system/tokens/interaction/monitoring-type';
import type { Props } from '$stylist/design-system/contracts/information/common';

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




