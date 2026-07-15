import type { SlotAccordion } from '$stylist/navigation/interface/slot/accordion';

export function createAccordionState(props: SlotAccordion) {
	let activeValue = $state<string | null>(props.defaultValue ?? null);

	function isPanelOpen(value: string): boolean {
		return activeValue === value;
	}

	function handleValueChange(value: string) {
		activeValue = activeValue === value ? null : value;
	}

	return {
		isPanelOpen,
		handleValueChange,
		get activeValue() {
			return activeValue;
		}
	};
}

export default createAccordionState;
