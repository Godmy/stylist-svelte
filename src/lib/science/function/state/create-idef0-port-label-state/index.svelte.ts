import type { Idef0PortLabelRecipe as Idef0PortLabelProps } from '$stylist/science/interface/recipe/idef0-port-label';

export function createIdef0PortLabelState(props: Idef0PortLabelProps) {
	const label = $derived(props.label ?? '');
	const position = $derived(props.position ?? 'left');

	return {
		get label() {
			return label;
		},
		get position() {
			return position;
		}
	};
}

export default createIdef0PortLabelState;
