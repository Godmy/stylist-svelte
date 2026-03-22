import type { TokenSize } from '$stylist/design-system/tokens/architecture';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для заголовка узла
 */
export class NodeHeaderStyleManager {
	/**
	 * Получает классы заголовка
	 */
	static getHeaderClasses(size: TokenSize, selected: boolean): string {
		return cn(
			'node-header',
			`node-header--size-${size}`,
			selected && 'node-header--selected'
		);
	}

	/**
	 * Получает стили заголовка
	 */
	static getHeaderStyles(color?: string): string {
		if (!color) return '';
		return `--node-header-color: ${color};`;
	}

	/**
	 * Получает классы для кнопок действий
	 */
	static getActionButtonsClasses(): string {
		return 'node-header__actions';
	}

	/**
	 * Получает классы для кнопки
	 */
	static getActionButtonClasses(): string {
		return 'node-header__action-btn';
	}
}

export default NodeHeaderStyleManager;



