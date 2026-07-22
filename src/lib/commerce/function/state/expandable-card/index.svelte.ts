import type { RecipeExpandableCard as RecipeExpandableCard } from '$stylist/commerce/interface/recipe/expandable-card';
import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';

export function createExpandableCardState(props: RecipeExpandableCard) {
	let isExpanded = $state(props.defaultExpanded ?? false);
	const baseClasses = $derived('expandable-card__base');
	const themedClasses = $derived('expandable-card__themed');
	const containerClasses = $derived(
		ObjectManagerExpandableCard.getContainerClasses(props, baseClasses, themedClasses)
	);
	const summaryContainerClasses = $derived(
		`expandable-card__summary ${props.summaryClass ?? ''}`.trim()
	);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get summaryContainerClasses() {
			return summaryContainerClasses;
		},
		get isExpanded() {
			return isExpanded;
		},
		toggleExpanded() {
			isExpanded = ObjectManagerExpandableCard.toggleExpanded(isExpanded, props.disabled ?? false);
		}
	};
}

export default createExpandableCardState;
