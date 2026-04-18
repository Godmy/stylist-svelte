import type { Idef0ConnectorRecipe as Idef0ConnectorProps } from '$stylist/science/interface/recipe/idef0-connector';
import { Idef0StyleManager } from '$stylist/science/class/style-manager/idef0';

export function createIdef0ConnectorState(props: Idef0ConnectorProps) {
	const groupClasses = $derived(
		Idef0StyleManager.getConnectorGroupClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const lineClasses = $derived(Idef0StyleManager.getConnectorLineClasses());
	const labelClasses = $derived(Idef0StyleManager.getConnectorLabelClasses());

	return {
		get groupClasses() { return groupClasses; },
		get lineClasses() { return lineClasses; },
		get labelClasses() { return labelClasses; }
	};
}

export default createIdef0ConnectorState;
