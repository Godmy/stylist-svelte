import type { LiteGraphNodeProps } from '$stylist/design-system/contracts/information/litegraph-node';
import type { LiteGraphNodeState, LiteGraphNodeType } from '$stylist/design-system/tokens/information/litegraph-node';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { LiteGraphNodeStyleManager } from '$stylist/design-system/styles';

export function createLiteGraphNodeState(props: LiteGraphNodeProps) {
	const type = $derived((props.type ?? 'default') as LiteGraphNodeType);
	const state = $derived((props.state ?? 'default') as LiteGraphNodeState);
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const selected = $derived(Boolean(props.selected));
	const draggable = $derived(props.draggable ?? true);
	const width = $derived(props.width ?? 200);
	const minWidth = $derived(props.minWidth ?? 150);
	const height = $derived(props.height ?? 'auto');
	const color = $derived(props.color ?? '#3b82f6');
	const headerColor = $derived(props.headerColor ?? props.color ?? '#2563eb');

	const classes = $derived(
		LiteGraphNodeStyleManager.getNodeClasses(type, state, size, selected)
	);
	const styles = $derived(
		LiteGraphNodeStyleManager.getNodeStyles({
			x: props.x,
			y: props.y,
			width,
			color,
			headerColor
		})
	);

	return {
		get type() {
			return type;
		},
		get state() {
			return state;
		},
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get draggable() {
			return draggable;
		},
		get width() {
			return width;
		},
		get minWidth() {
			return minWidth;
		},
		get height() {
			return height;
		},
		get color() {
			return color;
		},
		get headerColor() {
			return headerColor;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createLiteGraphNodeState;





