import type { NodePropertyProps } from '$stylist/information/interface/node-property';
import type { TokenPropertyType } from '$stylist/information/type/token/property-type';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import { NodePropertyStyleManager } from '$stylist/information/class/style-manager/node-property';

export function createNodePropertyState(props: NodePropertyProps) {
	const type = $derived((props.type ?? 'string') as TokenPropertyType);
	const size = $derived((props.size ?? 'md') as TokenSize);
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




