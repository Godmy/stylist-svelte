import type { NodeTitleVariant } from '$stylist/design-system/tokens/information/node-title';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ Р·Р°РіРѕР»РѕРІРєРѕРІ СѓР·Р»РѕРІ РіСЂР°С„Р°
 */
export class NodeTitleStyleManager {
	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ Р·Р°РіРѕР»РѕРІРєР°
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
	 * РџРѕР»СѓС‡Р°РµС‚ inline-СЃС‚РёР»Рё Р·Р°РіРѕР»РѕРІРєР°
	 */
	static getTitleStyles(color?: string): string {
		if (!color) return '';
		return `--node-title-color: ${color};`;
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ С†РІРµС‚ РґР»СЏ РІР°СЂРёР°РЅС‚Р° Р·Р°РіРѕР»РѕРІРєР°
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


