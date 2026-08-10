import type { RecipeBaseCard } from '$stylist/information/interface/recipe/base-card';

export function createBaseCardState(props: RecipeBaseCard) {
	const containerClasses = $derived(`base-card ${props.class ?? ''}`.trim());
	const headerClasses = $derived(`base-card__header ${props.headerClass ?? ''}`.trim());
	const bodyClasses = $derived(`base-card__body ${props.bodyClass ?? ''}`.trim());
	const hasHeader = $derived(Boolean(props.title || props.description));

	return {
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get hasHeader() {
			return hasHeader;
		}
	};
}
