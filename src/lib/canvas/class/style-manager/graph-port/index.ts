import type { GraphPortState } from '$stylist/science/interface/recipe/graph-port';
import type { GraphPortDataTypeColor } from '$stylist/canvas/type/struct/graph-port/graph-port-data-type-color';
import type { GraphPortStateColor } from '$stylist/canvas/type/struct/graph-port/graph-port-state-color';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

/**
 * Менеджер стилей для портов графа
 */
export class GraphPortStyleManager {
	/**
	 * Получает классы размера порта
	 */
	static getPortSizeClasses(size: TokenSize): string {
		const sizeMap: Record<TokenSize, string> = {
			xs: 'graph-port--xs',
			sm: 'graph-port--sm',
			md: 'graph-port--md',
			lg: 'graph-port--lg',
			xl: 'graph-port--xl',
			'2xl': 'graph-port--2xl',
			'1/4': 'graph-port--xs',
			'1/3': 'graph-port--sm',
			'2/5': 'graph-port--sm',
			'1/2': 'graph-port--md',
			'3/5': 'graph-port--md',
			'2/3': 'graph-port--lg',
			'3/4': 'graph-port--xl',
			full: 'graph-port--2xl'
		};
		return sizeMap[size] || sizeMap.md;
	}

	/**
	 * Получает классы состояния порта
	 */
	static getPortStateClasses(state: GraphPortState): string {
		return mergeClassNames(
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
	static getDataTypeColor(dataType: keyof GraphPortDataTypeColor): string {
		return `var(--color-graph-port-type-${dataType}, var(--color-graph-port-type-any))`;
	}

	static getStateColor(state: keyof GraphPortStateColor): string {
		return `var(--color-graph-port-state-${state}, var(--color-graph-port-state-default))`;
	}
}

export default GraphPortStyleManager;





