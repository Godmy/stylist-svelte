import type { HTMLAttributes } from 'svelte/elements';
import type { ComparisonTableFeature } from '$stylist/table/type/struct/comparison-table-feature';
import type { ComparisonTableProduct } from '$stylist/table/type/struct/comparison-table-product';

export type ComparisonTableProps = {
	features: ComparisonTableFeature[];
	products: ComparisonTableProduct[];
	showHeader?: boolean;
	showDescription?: boolean;
	class?: string;
	headerClass?: string;
	featureClass?: string;
	productClass?: string;
	valueClass?: string;
	primaryProductClass?: string;
} & HTMLAttributes<HTMLDivElement>;
