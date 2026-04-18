import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';

export type StylistSelection = {
	category: StylistCategoryId;
	option: string;
	selections: Record<StylistCategoryId, string>;
};
