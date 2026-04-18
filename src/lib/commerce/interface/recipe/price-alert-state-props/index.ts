import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';
import type { Props } from '$stylist/information/type/struct';

export interface PriceAlertStateProps extends StructIntersectAll<[Omit<Props, 'variant' | 'size'>]> {
	variant?: string;
	size?: string;
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	onStatusChange?: (status: TokenMonitoringType) => void;
}
