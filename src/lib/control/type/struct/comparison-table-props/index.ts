import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ComparisonTableFeature } from '../comparison-table-feature';
import type { ComparisonTableProduct } from '../comparison-table-product';

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
} & InteractionHTMLAttributes<HTMLDivElement>;
