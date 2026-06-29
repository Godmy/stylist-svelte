import type { WarrantyPeriodType } from '$stylist/commerce/type/alias/warranty-period-type';

export interface SlotWarrantyPeriod {
	type: WarrantyPeriodType;
	duration: number;
	description?: string;
	coverage?: string[];
	exclusions?: string[];
}

