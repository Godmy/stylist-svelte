import type { Idef0ConnectorRecipe as Idef0ConnectorProps } from '$stylist/science/interface/recipe/idef0-connector';

export function createIdef0ConnectorState(props: Idef0ConnectorProps) {
	const showArrow = $derived(props.showArrow ?? true);
	const direction = $derived(props.direction ?? 'output');

	return {
		get showArrow() {
			return showArrow;
		},
		get direction() {
			return direction;
		}
	};
}

export default createIdef0ConnectorState;
