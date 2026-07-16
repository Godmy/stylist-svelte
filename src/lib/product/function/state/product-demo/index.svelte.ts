import type { RecipeProductDemo } from '$stylist/product/interface/recipe/product-demo';

export function createProductDemoState(props: RecipeProductDemo) {
	return {
		get containerClass() {
			return ['product-demo', props.class].filter(Boolean).join(' ');
		},
		get layoutClass() {
			return 'product-demo__layout';
		},
		get titleClass() {
			return 'product-demo__title';
		},
		get descriptionClass() {
			return 'product-demo__description';
		},
		get featureListClass() {
			return 'product-demo__feature-list';
		},
		get featureItemClass() {
			return 'product-demo__feature-item';
		},
		get checkIconClass() {
			return 'product-demo__check-icon';
		},
		get buttonClass() {
			return 'product-demo__button';
		},
		get previewClass() {
			return 'product-demo__preview';
		},
		get previewTitleClass() {
			return 'product-demo__preview-title';
		},
		get previewContentClass() {
			return 'product-demo__preview-content';
		}
	};
}
