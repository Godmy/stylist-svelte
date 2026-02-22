import type { GraphNodeProps, GraphNodeSize } from '$stylist/design-system/contracts';
import { GraphStyleManager } from '$stylist/design-system/styles';
import { blue } from '$stylist/design-system/tokens';

export function createGraphNodeState(props: GraphNodeProps) {
	const size = $derived((props.size ?? 'md') as GraphNodeSize);
	const color = $derived(props.color ?? blue[500]);
	const selected = $derived(Boolean(props.selected));
	const positionStyle = $derived(GraphStyleManager.getGraphNodePositionStyle(props.x, props.y));
	const sizeClasses = $derived(GraphStyleManager.getGraphNodeSizeClasses(size));
	const stateClasses = $derived(GraphStyleManager.getGraphNodeStateClasses(selected));
	const style = $derived(`${positionStyle}; --graph-node-color: ${color};`);

	return {
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get stateClasses() {
			return stateClasses;
		},
		get style() {
			return style;
		}
	};
}

export default createGraphNodeState;
