import type { FeatureGridItem } from '$stylist/domain/type/object/feature-grid-item';
export interface RecipeFeatureGrid {
	title?: string;
	subtitle?: string;
	features?: FeatureGridItem[];
	class?: string;
}
