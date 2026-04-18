import type { ProductCardWithActionsProps } from '$stylist/commerce/interface/recipe/product-card-with-actions-props';

export function createProductCardWithActionsState(props: ProductCardWithActionsProps) {
	return { props };
}

export default createProductCardWithActionsState;
