import type { ComparisonCardProps as Props } from '$stylist/commerce/type/struct/comparison-card-props';
import { ComparisonCardStyleManager } from '$stylist/commerce/class/style-manager/comparison-card';

export function createComparisonCardState(props: Props) {
	const classes = $derived(ComparisonCardStyleManager.getBaseClasses(props.class));
	const headerClasses = $derived(ComparisonCardStyleManager.getHeaderClasses());
	const titleClasses = $derived(ComparisonCardStyleManager.getTitleClasses());
	const comparisonContainerClasses = $derived(ComparisonCardStyleManager.getComparisonContainerClasses());
	const sectionClasses = $derived(ComparisonCardStyleManager.getSectionClasses());
	const sectionTitleClasses = $derived(ComparisonCardStyleManager.getSectionTitleClasses());
	const comparisonListClasses = $derived(ComparisonCardStyleManager.getComparisonListClasses());
	const comparisonItemClasses = $derived(ComparisonCardStyleManager.getComparisonItemClasses());
	const comparisonLabelClasses = $derived(ComparisonCardStyleManager.getComparisonLabelClasses());
	const comparisonValueClasses = $derived(ComparisonCardStyleManager.getComparisonValueClasses());
	const beforeTitleClasses = $derived(ComparisonCardStyleManager.getBeforeTitleClasses());
	const afterTitleClasses = $derived(ComparisonCardStyleManager.getAfterTitleClasses());

	return {
		get classes() { return classes; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get comparisonContainerClasses() { return comparisonContainerClasses; },
		get sectionClasses() { return sectionClasses; },
		get sectionTitleClasses() { return sectionTitleClasses; },
		get comparisonListClasses() { return comparisonListClasses; },
		get comparisonItemClasses() { return comparisonItemClasses; },
		get comparisonLabelClasses() { return comparisonLabelClasses; },
		get comparisonValueClasses() { return comparisonValueClasses; },
		get beforeTitleClasses() { return beforeTitleClasses; },
		get afterTitleClasses() { return afterTitleClasses; }
	};
}

export default createComparisonCardState;
