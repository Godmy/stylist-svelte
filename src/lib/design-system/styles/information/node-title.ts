import type { NodeTitleVariant } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для заголовков узлов графа
 */
export class NodeTitleStyleManager {
	/**
	 * Получает классы заголовка
	 */
	static getTitleClasses(
		variant: NodeTitleVariant,
		size: ComponentSize,
		selected: boolean
	): string {
		return cn(
			'node-title',
			`node-title--${variant}`,
			`node-title--${size}`,
			selected && 'node-title--selected'
		);
	}

	/**
	 * Получает inline-стили заголовка
	 */
	static getTitleStyles(color?: string): string {
		if (!color) return '';
		return `--node-title-color: ${color};`;
	}

	/**
	 * Получает цвет для варианта заголовка
	 */
	static getVariantColor(variant: NodeTitleVariant): string {
		const colorMap: Record<NodeTitleVariant, string> = {
			default: '#f8fafc',
			selected: '#60A5FA',
			error: '#F44336',
			warning: '#FF9800'
		};
		return colorMap[variant] || colorMap.default;
	}
}

export default NodeTitleStyleManager;
