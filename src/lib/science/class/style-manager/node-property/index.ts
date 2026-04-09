import type { TokenPropertyType } from '$stylist/information/type/enum/property-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { NodePropertyState } from '$stylist/science/interface/recipe/node-property';


/**
 * Менеджер стилей для свойств узлов графа
 */
export class NodePropertyStyleManager {
	/**
	 * Получает классы свойства
	 */
	static getPropertyClasses(
		type: TokenPropertyType,
		size: TokenSize,
		state: NodePropertyState
	): string {
		return mergeClassNames(
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
	static getValueClasses(type: TokenPropertyType): string {
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
	static getControlClasses(type: TokenPropertyType): string {
		const controlMap: Record<TokenPropertyType, string> = {
			string: 'node-property__control--string',
			number: 'node-property__control--number',
			boolean: 'node-property__control--boolean',
			array: 'node-property__control--object',
			any: 'node-property__control--string',
			enum: 'node-property__control--enum',
			event: 'node-property__control--function',
			color: 'node-property__control--color',
			vector2: 'node-property__control--vector',
			vector3: 'node-property__control--vector',
			object: 'node-property__control--object',
			function: 'node-property__control--function',
			action: 'node-property__control--function'
		};
		return controlMap[type] || 'node-property__control';
	}
}

export default NodePropertyStyleManager;









