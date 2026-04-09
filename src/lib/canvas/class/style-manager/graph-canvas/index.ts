import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ С…РѕР»СЃС‚Р° РіСЂР°С„Р°
 */
export class GraphCanvasStyleManager {
	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃ РєРѕРЅС‚РµР№РЅРµСЂР° С…РѕР»СЃС‚Р°
	 */
	static getContainerClass(className?: string): string {
		return mergeClassNames('graph-canvas', className);
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃ СЃРµС‚РєРё
	 */
	static getGridClass(gridMode: TokenMarker, className?: string): string {
		return mergeClassNames('graph-canvas__grid', `graph-canvas__grid--${gridMode}`, className);
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃ РєРѕРЅС‚РµРЅС‚Р°
	 */
	static getContentClass(className?: string): string {
		return mergeClassNames('graph-canvas__content', className);
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ СЃС‚РёР»Рё СЃРµС‚РєРё
	 */
	static getGridStyles(
		gridSize: number,
		gridColor: string,
		backgroundColor?: string
	): string {
		let result = `--grid-size: ${gridSize}px; --grid-color: ${gridColor};`;
		if (backgroundColor) result += ` --background-color: ${backgroundColor};`;
		return result.trim();
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ СЃС‚РёР»Рё С‚СЂР°РЅСЃС„РѕСЂРјР°С†РёРё
	 */
	static getTransformStyles(offsetX: number, offsetY: number, zoom: number): string {
		return `transform: translate(${offsetX}px, ${offsetY}px) scale(${zoom}); transform-origin: 0 0;`;
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ CSS РґР»СЏ РїР°С‚С‚РµСЂРЅР° СЃРµС‚РєРё
	 */
	static getGridPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: 
				linear-gradient(to right, ${gridColor} 1px, transparent 1px),
				linear-gradient(to bottom, ${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ CSS РґР»СЏ С‚РѕС‡РµС‡РЅРѕР№ СЃРµС‚РєРё
	 */
	static getDotsPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: radial-gradient(${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ CSS РґР»СЏ РєСЂРµСЃС‚РѕРѕР±СЂР°Р·РЅРѕР№ СЃРµС‚РєРё
	 */
	static getCrossPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: 
				linear-gradient(to right, ${gridColor} 1px, transparent 1px),
				linear-gradient(to bottom, ${gridColor} 1px, transparent 1px),
				radial-gradient(${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}
}

export default GraphCanvasStyleManager;













