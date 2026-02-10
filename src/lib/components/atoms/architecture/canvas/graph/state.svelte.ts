import type {
	GraphEdgeProps,
	GraphEdgeType,
	GraphNodeProps,
	GraphNodeSize
} from '$stylist/design-system/attributes';
import { ARCHITECTURE_PRESETS } from '$stylist/design-system/presets';
import { blue } from '$stylist/design-system/tokens';

const {
	getGraphEdgeClasses,
	getGraphEdgeStyles,
	getGraphNodePositionStyle,
	getGraphNodeSizeClasses
} = ARCHITECTURE_PRESETS.graph;

export function createGraphEdgeState(props: GraphEdgeProps) {
	const directed = $derived(props.directed ?? true);
	const type = $derived((props.type ?? 'line') as GraphEdgeType);
	const style = $derived(props.style ?? {});

	const classes = $derived(getGraphEdgeClasses(directed, type));
	const styles = $derived(getGraphEdgeStyles(style));

	return {
		directed,
		type,
		classes,
		styles
	};
}

export function createGraphNodeState(props: GraphNodeProps) {
	const size = $derived((props.size ?? 'md') as GraphNodeSize);
	const color = $derived(props.color ?? blue[500]);
	const positionStyle = $derived(getGraphNodePositionStyle(props.x, props.y));
	const sizeClasses = $derived(getGraphNodeSizeClasses(size));
	const style = $derived(`${positionStyle}; --color: ${color};`);

	return {
		size,
		sizeClasses,
		style
	};
}
