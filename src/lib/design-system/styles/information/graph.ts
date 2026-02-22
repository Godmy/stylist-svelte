import type { GraphNodeSize } from '../../contracts';
import type { GraphEdgeType } from '../../tokens';
import {
	GRAPH_EDGE_ACTIVE_CLASS,
	GRAPH_EDGE_BASE_CLASS,
	GRAPH_EDGE_DIRECTED_CLASS,
	GRAPH_EDGE_TYPE_CLASSES,
	GRAPH_NODE_BASE_CLASS,
	GRAPH_NODE_SELECTED_CLASS,
	GRAPH_NODE_SIZE_CLASSES
} from '../../classes/information/graph';
import { cn } from '../../utils/cn/index';

export class GraphStyleManager {
	static getGraphNodeSizeClasses(size: GraphNodeSize): string {
		return GRAPH_NODE_SIZE_CLASSES[size];
	}

	static getGraphNodePositionStyle(x: number, y: number): string {
		return `position: absolute; left: ${x}px; top: ${y}px`;
	}

	static getGraphNodeStateClasses(selected: boolean): string {
		return cn(GRAPH_NODE_BASE_CLASS, selected && GRAPH_NODE_SELECTED_CLASS);
	}

	static getGraphEdgeClasses(directed: boolean, type: GraphEdgeType, active: boolean): string {
		return cn(
			GRAPH_EDGE_BASE_CLASS,
			GRAPH_EDGE_TYPE_CLASSES[type],
			directed && GRAPH_EDGE_DIRECTED_CLASS,
			active && GRAPH_EDGE_ACTIVE_CLASS
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
