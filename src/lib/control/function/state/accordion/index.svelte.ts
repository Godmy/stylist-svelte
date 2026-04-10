import type { IAccordionProps } from '$stylist/control/interface/component/accordion/other';

export function createAccordionState(props: IAccordionProps) {
	let activeIds = $state<string[]>([]);

	function toggleAccordion(id: string) {
		if (activeIds.includes(id)) {
			activeIds = activeIds.filter((activeId) => activeId !== id);
			return;
		}

		activeIds = props.multiple ? [...activeIds, id] : [id];
	}

	function isExpanded(id: string): boolean {
		return activeIds.includes(id);
	}

	return {
		get activeIds() {
			return activeIds;
		},
		toggleAccordion,
		isExpanded
	};
}

export default createAccordionState;
