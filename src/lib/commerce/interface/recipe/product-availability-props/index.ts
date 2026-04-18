import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductAvailabilityProps extends StructIntersectAll<[]> {	available?: boolean;
	stock?: number;
	location?: string;
	estimatedRestock?: string;
	onNotifyMe?: () => void;
	className?: string;
}
