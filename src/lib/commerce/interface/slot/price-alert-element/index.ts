import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

export interface SlotPriceAlertElement {
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
}
