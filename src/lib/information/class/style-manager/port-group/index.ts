import type { TokenRelationship } from '$stylist/architecture/type/token/relationship';
import { cn } from '$stylist/information/function/cn';

/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ РіСЂСѓРїРїС‹ РїРѕСЂС‚РѕРІ
 */
export class PortGroupStyleManager {
	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ РіСЂСѓРїРїС‹
	 */
	static getGroupClasses(direction: TokenRelationship, compact: boolean): string {
		return cn(
			'port-group',
			`port-group--${direction}`,
			compact && 'port-group--compact'
		);
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ РґР»СЏ Р·Р°РіРѕР»РѕРІРєР° РіСЂСѓРїРїС‹
	 */
	static getTitleClasses(): string {
		return 'port-group__title';
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ РґР»СЏ СЃРїРёСЃРєР° РїРѕСЂС‚РѕРІ
	 */
	static getListClasses(): string {
		return 'port-group__list';
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ РґР»СЏ СЌР»РµРјРµРЅС‚Р° РїРѕСЂС‚Р°
	 */
	static getItemClasses(hasDivider: boolean): string {
		return cn('port-group__item', hasDivider && 'port-group__item--divider');
	}
}

export default PortGroupStyleManager;






