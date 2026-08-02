import type { RecipeWbdSessionAssumptionsPanel } from '$stylist/wbd/interface/recipe/session-assumptions-panel';

export function createWbdSessionAssumptionsPanelState(props: RecipeWbdSessionAssumptionsPanel) {
	const className = $derived(props.class ?? '');

	return {
		get assumptions() {
			return props.assumptions ?? '';
		},
		get readonly() {
			return props.readonly ?? false;
		},
		get className() {
			return className;
		},
		updateAssumptions(assumptions: string) {
			props.onUpdateAssumptions?.(assumptions);
		}
	};
}

export default createWbdSessionAssumptionsPanelState;
