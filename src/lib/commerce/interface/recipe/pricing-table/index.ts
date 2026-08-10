import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipePricingTable
	extends ComputeIntersectAll<[SlotTheme]> {
	plans?: ({
name: string;
	price: string;
	period: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
})[];
	class?: string;
	className?: string;
}
