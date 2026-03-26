import type { TokenSize } from '$stylist/architecture';
import { cn } from '$stylist/information/function/cn';

/**
 * Менеджер стилей для панели инструментов графа
 */
export class GraphToolbarStyleManager {
	/**
	 * Получает классы панели
	 */
	static getToolbarClasses(
		orientation: 'horizontal' | 'vertical',
		size: TokenSize,
		compact: boolean
	): string {
		return cn(
			'graph-toolbar',
			`graph-toolbar--${orientation}`,
			`graph-toolbar--size-${size}`,
			compact && 'graph-toolbar--compact'
		);
	}

	/**
	 * Получает классы для группы элементов
	 */
	static getGroupClasses(): string {
		return 'graph-toolbar__group';
	}

	/**
	 * Получает классы для элемента
	 */
	static getItemClasses(): string {
		return 'graph-toolbar__item';
	}

	/**
	 * Получает классы для разделителя
	 */
	static getSeparatorClasses(): string {
		return 'graph-toolbar__separator';
	}

	/**
	 * Получает классы для кнопки
	 */
	static getButtonClasses(active: boolean, disabled: boolean): string {
		return cn(
			'graph-toolbar__button',
			active && 'graph-toolbar__button--active',
			disabled && 'graph-toolbar__button--disabled'
		);
	}
}

export default GraphToolbarStyleManager;



