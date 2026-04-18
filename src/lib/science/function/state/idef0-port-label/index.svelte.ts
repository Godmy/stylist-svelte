import type { Idef0PortLabelRecipe as Idef0PortLabelProps } from '$stylist/science/interface/recipe/idef0-port-label';
import { Idef0StyleManager } from '$stylist/science/class/style-manager/idef0';

export function createIdef0PortLabelState(props: Idef0PortLabelProps) {
	const classes = $derived(
		Idef0StyleManager.getPortLabelClasses(typeof props.class === 'string' ? props.class : undefined)
	);

	return {
		get classes() { return classes; }
	};
}

export default createIdef0PortLabelState;
