import type { ExpandableCardRecipe as ExpandableCardRecipe } from '$stylist/commerce/interface/recipe/expandable-card';
import { ExpandableCardStyleManager } from '$stylist/commerce/class/style-manager/expandable-card';
import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';

export function createExpandableCardState(
	props: ExpandableCardRecipe
) {
	let isExpanded = $state(props.defaultExpanded ?? false);
	const baseClasses = $derived(ExpandableCardStyleManager.getBaseClasses());
	const themedClasses = $derived(
		ExpandableCardStyleManager.getThemedClasses({ variant: props.variant })
	);
	const containerClasses = $derived(
		ObjectManagerExpandableCard.getContainerClasses(props, baseClasses, themedClasses)
	);
	const headerClasses = $derived(
		`${ExpandableCardStyleManager.getHeaderClasses(props.disabled ?? false)} ${props.headerClass ?? ''}`.trim()
	);
	const titleClasses = $derived(ExpandableCardStyleManager.getTitleClasses());
	const subtitleClasses = $derived(ExpandableCardStyleManager.getSubtitleClasses());
	const summaryContainerClasses = $derived(
		`${ExpandableCardStyleManager.getSummaryClasses()} ${props.summaryClass ?? ''}`.trim()
	);
	const chevronClasses = $derived(
		ExpandableCardStyleManager.getChevronClasses(isExpanded, props.chevronClass)
	);
	const detailsContainerClasses = $derived(
		ExpandableCardStyleManager.getDetailsContainerClasses(isExpanded)
	);
	const detailsContentClasses = $derived(
		`${ExpandableCardStyleManager.getDetailsContentClasses()} ${props.detailsClass ?? ''}`.trim()
	);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		},
		get summaryContainerClasses() {
			return summaryContainerClasses;
		},
		get chevronClasses() {
			return chevronClasses;
		},
		get detailsContainerClasses() {
			return detailsContainerClasses;
		},
		get detailsContentClasses() {
			return detailsContentClasses;
		},
		get isExpanded() {
			return isExpanded;
		},
		toggleExpanded() {
			isExpanded = ObjectManagerExpandableCard.toggleExpanded(
				isExpanded,
				props.disabled ?? false
			);
		}
	};
}

export default createExpandableCardState;
