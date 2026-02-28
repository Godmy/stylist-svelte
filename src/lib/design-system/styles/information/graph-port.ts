import type { GraphPortState } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для портов графа
 */
export class GraphPortStyleManager {
	/**
	 * Получает классы размера порта
	 */
	static getPortSizeClasses(size: ComponentSize): string {
		const sizeMap: Record<ComponentSize, string> = {
			xs: 'graph-port--xs',
			sm: 'graph-port--sm',
			md: 'graph-port--md',
			lg: 'graph-port--lg',
			xl: 'graph-port--xl',
			'2xl': 'graph-port--2xl'
		};
		return sizeMap[size] || sizeMap.md;
	}

	/**
	 * Получает классы состояния порта
	 */
	static getPortStateClasses(state: GraphPortState): string {
		return cn(
			'graph-port',
			state.connected && 'graph-port--connected',
			state.active && 'graph-port--active',
			state.hovered && 'graph-port--hovered'
		);
	}

	/**
	 * Получает inline-стили порта
	 */
	static getPortStyles(color: string, direction: 'input' | 'output'): string {
		const positionStyles =
			direction === 'input'
				? 'left: -6px; transform: translateX(-100%);'
				: 'right: -6px; transform: translateX(100%);';

		return `--graph-port-color: ${color}; ${positionStyles}`;
	}

	/**
	 * Получает цвет для типа данных
	 */
	static getDataTypeColor(dataType: string): string {
		const colorMap: Record<string, string> = {
			number: '#4CAF50',
			string: '#2196F3',
			boolean: '#FF9800',
			object: '#9C27B0',
			array: '#00BCD4',
			any: '#9E9E9E',
			event: '#F44336',
			action: '#E91E63'
		};
		return colorMap[dataType] || colorMap.any;
	}
}

export default GraphPortStyleManager;
