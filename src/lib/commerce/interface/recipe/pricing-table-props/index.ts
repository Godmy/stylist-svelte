import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PricingTablePlan } from '$stylist/commerce/type/struct/pricing-table-plan';

export interface PricingTableProps extends StructIntersectAll<[]> {	plans?: PricingTablePlan[];
	className?: string;
}
