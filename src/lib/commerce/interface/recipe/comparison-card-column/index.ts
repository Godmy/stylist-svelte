import type { ComparisonCardItem } from '$stylist/commerce/interface/recipe/comparison-card-item';

export interface ComparisonCardColumn {
	title: string;
	items: ComparisonCardItem[];
}
