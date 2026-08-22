import type { RecipeAccordion } from '$stylist/dialog/interface/recipe/accordion';

export function createAccordionState(props: RecipeAccordion) {
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
