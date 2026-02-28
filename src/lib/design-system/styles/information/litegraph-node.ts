import type { LiteGraphNodeState, LiteGraphNodeType } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для узла LiteGraph
 */
export class LiteGraphNodeStyleManager {
	/**
	 * Получает классы узла
	 */
	static getNodeClasses(
		type: LiteGraphNodeType,
		state: LiteGraphNodeState,
		size: ComponentSize,
		selected: boolean
	): string {
		return cn(
			'litegraph-node',
			`litegraph-node--type-${type}`,
			`litegraph-node--state-${state}`,
			`litegraph-node--size-${size}`,
			selected && 'litegraph-node--selected'
		);
	}

	/**
	 * Получает inline-стили узла
	 */
	static getNodeStyles(options: {
		x: number;
		y: number;
		width: number;
		color?: string;
		headerColor?: string;
	}): string {
		const { x, y, width, color, headerColor } = options;
		return `
			--node-x: ${x}px;
			--node-y: ${y}px;
			--node-width: ${width}px;
			--node-color: ${color ?? '#3b82f6'};
			--node-header-color: ${headerColor ?? '#2563eb'};
			transform: translate(${x}px, ${y}px);
		`.trim();
	}

	/**
	 * Получает классы для заголовка узла
	 */
	static getNodeHeaderClasses(selected: boolean): string {
		return cn('litegraph-node__header', selected && 'litegraph-node__header--selected');
	}

	/**
	 * Получает классы для тела узла
	 */
	static getNodeBodyClasses(): string {
		return 'litegraph-node__body';
	}

	/**
	 * Получает классы для портов узла
	 */
	static getNodePortsClasses(): string {
		return 'litegraph-node__ports';
	}

	/**
	 * Получает классы для свойств узла
	 */
	static getNodePropertiesClasses(): string {
		return 'litegraph-node__properties';
	}

	/**
	 * Получает цвет для типа узла
	 */
	static getNodeTypeColor(type: LiteGraphNodeType): string {
		const colorMap: Record<LiteGraphNodeType, string> = {
			default: '#3b82f6',
			source: '#10b981',
			processor: '#6366f1',
			output: '#f59e0b',
			gateway: '#8b5cf6',
			custom: '#ec4899'
		};
		return colorMap[type] || colorMap.default;
	}

	/**
	 * Получает цвет для состояния узла
	 */
	static getNodeStateColor(state: LiteGraphNodeState): string {
		const colorMap: Record<LiteGraphNodeState, string> = {
			default: '#64748b',
			selected: '#3b82f6',
			active: '#10b981',
			error: '#ef4444',
			warning: '#f59e0b',
			disabled: '#9ca3af'
		};
		return colorMap[state] || colorMap.default;
	}
}

export default LiteGraphNodeStyleManager;
