import type { DiscountType } from '$stylist/commerce/type/alias/discount-type';

export interface SlotDiscountRule {
	id: string;
	code: string;
	type: DiscountType;
	value: number;
	name: string;
	description?: string;
	minOrderAmount?: number;
	maxDiscountAmount?: number;
	startDate?: Date;
	endDate?: Date;
	usageLimit?: number;
	usedCount?: number;
	appliesTo?: 'all' | 'specific_products' | 'specific_categories';
	applicableItems?: string[];
}

