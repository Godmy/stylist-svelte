import type { GraphNodeSize } from '../../props';
import type { GraphEdgeType } from '../../tokens';
import {
	GRAPH_EDGE_BASE_CLASS,
	GRAPH_EDGE_DIRECTED_CLASS,
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

	static getGraphEdgeClasses(directed: boolean, type: GraphEdgeType): string {
		void type;
		return cn(GRAPH_EDGE_BASE_CLASS, directed && GRAPH_EDGE_DIRECTED_CLASS);
	}

	static getGraphEdgeStyles(style: Record<string, string>): string {
		return Object.entries(style)
			.map(([key, value]) => `${key}:${value}`)
			.join(';');
	}
}
