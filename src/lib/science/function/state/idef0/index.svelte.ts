import type { Idef0ConnectorRecipe as Idef0ConnectorProps } from '$stylist/information/interface/recipe/idef0-connector';
import type { Idef0FunctionBoxRecipe as Idef0FunctionBoxProps } from '$stylist/information/interface/recipe/idef0-function-box';
import type { Idef0PortLabelRecipe as Idef0PortLabelProps } from '$stylist/information/interface/recipe/idef0-port-label';

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

export function createIdef0FunctionBoxState(props: Idef0FunctionBoxProps) {
	const x = $derived(props.x ?? 0);
	const y = $derived(props.y ?? 0);
	const width = $derived(props.width ?? 320);
	const height = $derived(props.height ?? 200);

	return {
		get x() {
			return x;
		},
		get y() {
			return y;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		}
	};
}

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
