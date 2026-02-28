import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для панели свойств узла
 */
export class NodePropertiesPanelStyleManager {
	/**
	 * Получает классы панели
	 */
	static getPanelClasses(
		size: ComponentSize,
		compact: boolean,
		showHeader: boolean
	): string {
		return cn(
			'node-properties-panel',
			`node-properties-panel--size-${size}`,
			compact && 'node-properties-panel--compact',
			showHeader && 'node-properties-panel--with-header'
		);
	}

	/**
	 * Получает классы для заголовка
	 */
	static getHeaderClasses(): string {
		return 'node-properties-panel__header';
	}

	/**
	 * Получает классы для контента
	 */
	static getContentClasses(): string {
		return 'node-properties-panel__content';
	}

	/**
	 * Получает классы для группы свойств
	 */
	static getGroupClasses(): string {
		return 'node-properties-panel__group';
	}

	/**
	 * Получает классы для кнопки закрытия
	 */
	static getCloseButtonClasses(): string {
		return 'node-properties-panel__close';
	}
}

export default NodePropertiesPanelStyleManager;
