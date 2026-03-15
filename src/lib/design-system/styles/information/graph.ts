import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { PrimitiveTrajectory } from '../../tokens/architecture/primitives';
import { cn } from '../../utils/cn/index';

export class GraphStyleManager {
	static getGraphNodeSizeClasses(size: ComponentSize): string {
		return {
			xs: 'w-5 h-5',
			sm: 'w-6 h-6',
			md: 'w-8 h-8',
			lg: 'w-10 h-10',
			xl: 'w-12 h-12',
			'2xl': 'w-14 h-14'
		}[size];
	}

	static getGraphNodePositionStyle(x: number, y: number): string {
		return `position: absolute; left: ${x}px; top: ${y}px`;
	}

	static getGraphNodeStateClasses(selected: boolean): string {
		return cn('graph-node', selected && 'selected');
	}

	static getGraphEdgeClasses(directed: boolean, type: PrimitiveTrajectory, active: boolean): string {
		return cn(
			'graph-edge',
			{
				straight: 'graph-edge--line',
				curve: 'graph-edge--curve',
				polyline: 'graph-edge--polyline',
				bezier: 'graph-edge--curve',
				arc: 'graph-edge--curve',
				loop: 'graph-edge--curve',
				elbow: 'graph-edge--polyline',
				step: 'graph-edge--polyline',
				'smooth-step': 'graph-edge--curve'
			}[type],
			directed && 'directed',
			active && 'active'
		);
	}

	static getGraphLineStyles(style: Record<string, string>): string {
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



