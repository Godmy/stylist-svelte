import type { GraphPortDirection } from '$stylist/design-system/tokens/information/graph-port';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для группы портов
 */
export class PortGroupStyleManager {
	/**
	 * Получает классы группы
	 */
	static getGroupClasses(direction: GraphPortDirection, compact: boolean): string {
		return cn(
			'port-group',
			`port-group--${direction}`,
			compact && 'port-group--compact'
		);
	}

	/**
	 * Получает классы для заголовка группы
	 */
	static getTitleClasses(): string {
		return 'port-group__title';
	}

	/**
	 * Получает классы для списка портов
	 */
	static getListClasses(): string {
		return 'port-group__list';
	}

	/**
	 * Получает классы для элемента порта
	 */
	static getItemClasses(hasDivider: boolean): string {
		return cn('port-group__item', hasDivider && 'port-group__item--divider');
	}
}

export default PortGroupStyleManager;





