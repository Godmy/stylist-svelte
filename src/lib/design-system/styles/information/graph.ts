import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { GraphEdgeType } from '../../tokens';
import { cn } from '../../utils/cn/index';

const GRAPH_NODE_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'w-5 h-5',
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10',
	xl: 'w-12 h-12',
	'2xl': 'w-14 h-14'
};

const GRAPH_EDGE_TYPE_CLASSES: Record<GraphEdgeType, string> = {
	line: 'graph-edge--line',
	curve: 'graph-edge--curve',
	polyline: 'graph-edge--polyline'
};

export class GraphStyleManager {
	static getGraphNodeSizeClasses(size: ComponentSize): string {
		return GRAPH_NODE_SIZE_CLASSES[size];
	}

	static getGraphNodePositionStyle(x: number, y: number): string {
		return `position: absolute; left: ${x}px; top: ${y}px`;
	}

	static getGraphNodeStateClasses(selected: boolean): string {
		return cn('graph-node', selected && 'selected');
	}

	static getGraphEdgeClasses(directed: boolean, type: GraphEdgeType, active: boolean): string {
		return cn(
			'graph-edge',
			GRAPH_EDGE_TYPE_CLASSES[type],
			directed && 'directed',
			active && 'active'
		);
	}

	static getGraphEdgeStyles(style: Record<string, string>): string {
		return Object.entries(style)
			.map(([key, value]) => `${GraphStyleManager.toCssProperty(key)}:${value}`)
			.join(';');
	}

	private static toCssProperty(key: string): string {
		if (key.startsWith('--')) {
			return key;
		}

		return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
	}
}
