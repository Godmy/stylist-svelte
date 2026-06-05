import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { Props } from '$stylist/information/type/struct/props';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

export interface SlotPriceAlertElement
	extends Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>,
		Omit<InformationHTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'> {
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
