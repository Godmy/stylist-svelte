import type { NodePropertyProps } from '$stylist/design-system/contracts';
import type { NodePropertyType } from '$stylist/design-system/tokens/information/node-property';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { NodePropertyStyleManager } from '$stylist/design-system/styles';

export function createNodePropertyState(props: NodePropertyProps) {
	const type = $derived((props.type ?? 'string') as NodePropertyType);
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const editable = $derived(props.editable ?? true);
	const error = $derived(Boolean(props.error));
	const hasLabel = $derived(Boolean(props.label));
	const hasDescription = $derived(Boolean(props.description));

	const classes = $derived(
		NodePropertyStyleManager.getPropertyClasses(type, size, {
			error,
			editable
		})
	);

	return {
		get type() {
			return type;
		},
		get size() {
			return size;
		},
		get editable() {
			return editable;
		},
		get error() {
			return error;
		},
		get hasLabel() {
			return hasLabel;
		},
		get hasDescription() {
			return hasDescription;
		},
		get classes() {
			return classes;
		}
	};
}

export default createNodePropertyState;


