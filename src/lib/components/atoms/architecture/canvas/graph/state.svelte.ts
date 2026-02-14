import type {
	GraphEdgeProps,
	GraphNodeProps,
	GraphNodeSize
} from '$stylist/design-system/props';
import type { GraphEdgeType } from '$stylist/design-system/tokens';
import { GraphStyleManager } from '$stylist/design-system/styles';
import { blue } from '$stylist/design-system/tokens';

export function createGraphEdgeState(props: GraphEdgeProps) {
	const directed = $derived(props.directed ?? true);
	const type = $derived((props.type ?? 'line') as GraphEdgeType);
	const style = $derived(props.style ?? {});

	const classes = $derived(GraphStyleManager.getGraphEdgeClasses(directed, type));
	const styles = $derived(GraphStyleManager.getGraphEdgeStyles(style));

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
	const positionStyle = $derived(GraphStyleManager.getGraphNodePositionStyle(props.x, props.y));
	const sizeClasses = $derived(GraphStyleManager.getGraphNodeSizeClasses(size));
	const style = $derived(`${positionStyle}; --color: ${color};`);

	return {
		size,
		sizeClasses,
		style
	};
}

