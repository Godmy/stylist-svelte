import type { HTMLAttributes } from 'svelte/elements';
import type { ComparisonTableFeature } from '$stylist/table/type/object/comparison-table-feature';
import type { ComparisonTableProduct } from '$stylist/table/type/object/comparison-table-product';

export type ComparisonTableProps = {
	features: ComparisonTableFeature[];
	products: ComparisonTableProduct[];
	featureColumnLabel?: string;
	showHeader?: boolean;
	showDescription?: boolean;
	class?: string;
	headerClass?: string;
	featureClass?: string;
	productClass?: string;
	valueClass?: string;
	primaryProductClass?: string;
} & HTMLAttributes<HTMLDivElement>;
