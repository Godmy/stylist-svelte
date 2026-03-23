import type { TokenInteration } from '$stylist/design-system/tokens/interaction/interaction';
import type { TokenSeverity } from '$stylist/design-system/tokens/interaction/sevetity';
import type { TokenNodeType } from '$stylist/design-system/tokens/architecture/node-type';
import type { TokenSize } from '$stylist/design-system/tokens/architecture';
import type { SemanticZoomPresentation } from '$stylist/design-system/runtime/semantic-zoom';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для узла LiteGraph
 */
export class LiteGraphNodeStyleManager {
	/**
	 * Получает классы узла
	 */
	static getNodeClasses(
		type: TokenNodeType,
		mode: TokenSeverity,
		status: TokenInteration,
		size: TokenSize,
		selected: boolean,
		presentation?: SemanticZoomPresentation
	): string {
		return cn(
			'litegraph-node',
			`litegraph-node--type-${type}`,
			`litegraph-node--mode-${mode}`,
			`litegraph-node--status-${status}`,
			`litegraph-node--size-${size}`,
			presentation && `litegraph-node--stage-${presentation.stage}`,
			presentation && `litegraph-node--architecture-${presentation.architecture}`,
			presentation && `litegraph-node--shape-${presentation.shape}`,
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
		minWidth?: number;
		height?: number | 'auto';
		color?: string;
		headerColor?: string;
		presentation?: SemanticZoomPresentation;
	}): string {
		const { x, y, width, minWidth, height, color, headerColor, presentation } = options;
		const borderRadius =
			presentation?.shape === 'circle'
				? '999px'
				: presentation?.shape === 'pill'
					? '999px'
					: presentation?.stage === 'screen'
						? '28px'
						: '20px';
		return `
			--node-x: ${x}px;
			--node-y: ${y}px;
			--node-width: ${width}px;
			--node-min-width: ${minWidth ?? width}px;
			--node-height: ${typeof height === 'number' ? `${height}px` : height ?? 'auto'};
			--node-color: ${color ?? '#3b82f6'};
			--node-header-color: ${headerColor ?? '#2563eb'};
			--node-radius: ${borderRadius};
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
	static getNodeTypeColor(type: TokenNodeType): string {
		const colorMap: Record<TokenNodeType, string> = {
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
	static getNodeModeColor(mode: TokenSeverity): string {
		const colorMap: Record<TokenSeverity, string> = {
			default: '#64748b',
			active: '#10b981',
			error: '#ef4444',
			warning: '#f59e0b'
		};
		return colorMap[mode] || colorMap.default;
	}

	static getNodeStatusColor(status: TokenInteration): string {
		const colorMap: Record<TokenInteration, string> = {
			enabled: '#64748b',
			disabled: '#9ca3af',
			readonly: '#94a3b8'
		};
		return colorMap[status] || colorMap.enabled;
	}
}

export default LiteGraphNodeStyleManager;







