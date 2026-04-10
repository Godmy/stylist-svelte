import type { IAdvancedAccordionProps } from '$stylist/control/interface/component/advanced-accordion';

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
