import type { NodePropertyType } from '$stylist/design-system/tokens/information/node-property';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { cn } from '$stylist/design-system/utils/cn';
import type { NodePropertyState } from '../../contracts/information/node-property';


/**
 * Менеджер стилей для свойств узлов графа
 */
export class NodePropertyStyleManager {
	/**
	 * Получает классы свойства
	 */
	static getPropertyClasses(
		type: NodePropertyType,
		size: ComponentSize,
		state: NodePropertyState
	): string {
		return cn(
			'node-property',
			`node-property--type-${type}`,
			`node-property--${size}`,
			state.error && 'node-property--error',
			state.editable === false && 'node-property--readonly'
		);
	}

	/**
	 * Получает классы для лейбла свойства
	 */
	static getLabelClasses(): string {
		return 'node-property__label';
	}

	/**
	 * Получает классы для значения свойства
	 */
	static getValueClasses(type: NodePropertyType): string {
		return `node-property__value node-property__value--${type}`;
	}

	/**
	 * Получает классы для описания свойства
	 */
	static getDescriptionClasses(): string {
		return 'node-property__description';
	}

	/**
	 * Получает классы для контрола свойства
	 */
	static getControlClasses(type: NodePropertyType): string {
		const controlMap: Record<NodePropertyType, string> = {
			string: 'node-property__control--string',
			number: 'node-property__control--number',
			boolean: 'node-property__control--boolean',
			enum: 'node-property__control--enum',
			color: 'node-property__control--color',
			vector2: 'node-property__control--vector',
			vector3: 'node-property__control--vector',
			object: 'node-property__control--object',
			function: 'node-property__control--function'
		};
		return controlMap[type] || 'node-property__control';
	}
}

export default NodePropertyStyleManager;






