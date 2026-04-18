import type { RecipeAdvancedAccordionProps as IAdvancedAccordionProps } from '$stylist/control/interface/recipe/advanced-accordion-props';

export function createAdvancedAccordionState(props: IAdvancedAccordionProps) {
	let activeIndex = $state(0);

	function setActiveIndex(index: number) {
		activeIndex = index;
	}

	return {
		get activeIndex() {
			return activeIndex;
		},
		setActiveIndex
	};
}

export default createAdvancedAccordionState;
