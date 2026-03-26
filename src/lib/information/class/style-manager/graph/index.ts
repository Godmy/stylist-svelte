import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenTrajectory } from '$stylist/architecture/type/token/trajectory';
import { cn } from '$stylist/information/function/cn/index';

export class GraphStyleManager {
	static getGraphNodeSizeClasses(size: TokenSize): string {
		return ({
			xs: 'w-5 h-5',
			sm: 'w-6 h-6',
			md: 'w-8 h-8',
			lg: 'w-10 h-10',
			xl: 'w-12 h-12',
			'2xl': 'w-14 h-14',
			'1/4': 'w-5 h-5',
			'1/3': 'w-6 h-6',
			'2/5': 'w-6 h-6',
			'1/2': 'w-8 h-8',
			'3/5': 'w-8 h-8',
			'2/3': 'w-10 h-10',
			'3/4': 'w-12 h-12',
			full: 'w-14 h-14'
		}[size] ?? 'w-8 h-8');
	}

	static getGraphNodePositionStyle(x: number, y: number): string {
		return `position: absolute; left: ${x}px; top: ${y}px`;
	}

	static getGraphNodeStateClasses(selected: boolean): string {
		return cn('graph-node', selected && 'selected');
	}

	static getGraphEdgeClasses(directed: boolean, type: TokenTrajectory, active: boolean): string {
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





