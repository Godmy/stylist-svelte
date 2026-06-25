import type { ContentType } from '$stylist/token/type/alias/content-editor-content-type';
import type { ContentElement } from '$stylist/interaction/type/struct/content-editor-content-element';

export class ObjectManagerContentEditor {
	/**
	 * РЎРѕР·РґР°С‘С‚ РЅРѕРІС‹Р№ СЌР»РµРјРµРЅС‚ РєРѕРЅС‚РµРЅС‚Р°
	 */
	static createElement(type: ContentType, content: string = ''): ContentElement {
		return {
			id: `element-${Date.now()}`,
			type,
			content
		};
	}

	/**
	 * РќРѕСЂРјР°Р»РёР·СѓРµС‚ РјР°СЃСЃРёРІ СЌР»РµРјРµРЅС‚РѕРІ РєРѕРЅС‚РµРЅС‚Р°
	 */
	static normalizeElements(elements?: ContentElement[]): ContentElement[] {
		if (!elements || elements.length === 0) {
			return [{ id: '1', type: 'text', content: '' }];
		}
		return elements.map((el) => ({
			id: el.id,
			type: el.type,
			content: el.content ?? '',
			attributes: el.attributes
		}));
	}

	/**
	 * РћР±РЅРѕРІР»СЏРµС‚ РєРѕРЅС‚РµРЅС‚ СЌР»РµРјРµРЅС‚Р° РїРѕ ID
	 */
	static updateElementContent(
		elements: ContentElement[],
		id: string,
		newContent: string
	): ContentElement[] {
		return elements.map((el) => (el.id === id ? { ...el, content: newContent } : el));
	}

	/**
	 * Р”РѕР±Р°РІР»СЏРµС‚ РЅРѕРІС‹Р№ СЌР»РµРјРµРЅС‚ РїРѕСЃР»Рµ СѓРєР°Р·Р°РЅРЅРѕРіРѕ РёРЅРґРµРєСЃР°
	 */
	static addElementAfter(
		elements: ContentElement[],
		index: number,
		type: ContentType = 'text'
	): ContentElement[] {
		const newElement = this.createElement(type);
		return [...elements.slice(0, index + 1), newElement, ...elements.slice(index + 1)];
	}

	/**
	 * РЈРґР°Р»СЏРµС‚ СЌР»РµРјРµРЅС‚ РїРѕ ID
	 */
	static deleteElement(elements: ContentElement[], id: string): ContentElement[] {
		if (elements.length <= 1) {
			return elements; // Keep at least one element
		}
		return elements.filter((el) => el.id !== id);
	}

	/**
	 * РџРµСЂРµРјРµС‰Р°РµС‚ СЌР»РµРјРµРЅС‚ РІРІРµСЂС… РёР»Рё РІРЅРёР·
	 */
	static moveElement(
		elements: ContentElement[],
		id: string,
		direction: 'up' | 'down'
	): ContentElement[] {
		const index = elements.findIndex((el) => el.id === id);
		if (index === -1) return elements;

		const newElements = [...elements];

		if (direction === 'up' && index > 0) {
			[newElements[index - 1], newElements[index]] = [newElements[index], newElements[index - 1]];
		} else if (direction === 'down' && index < elements.length - 1) {
			[newElements[index + 1], newElements[index]] = [newElements[index], newElements[index + 1]];
		}

		return newElements;
	}

	/**
	 * РћРїСЂРµРґРµР»СЏРµС‚ СЃР»РµРґСѓСЋС‰РёР№ Р°РєС‚РёРІРЅС‹Р№ СЌР»РµРјРµРЅС‚ РїРѕСЃР»Рµ СѓРґР°Р»РµРЅРёСЏ
	 */
	static getNextActiveElementId(elements: ContentElement[], deletedId: string): string | null {
		if (elements.length <= 1) return null;

		const index = elements.findIndex((el) => el.id === deletedId);
		if (index > 0) {
			return elements[index - 1].id;
		}
		return elements[0]?.id || null;
	}

	/**
	 * РЎРµСЂРёР°Р»РёР·СѓРµС‚ СЌР»РµРјРµРЅС‚С‹ РґР»СЏ СЃРѕС…СЂР°РЅРµРЅРёСЏ
	 */
	static serializeElements(elements: ContentElement[]): string {
		return JSON.stringify(elements, null, 2);
	}

	/**
	 * Р”РµСЃРµСЂРёР°Р»РёР·СѓРµС‚ СЌР»РµРјРµРЅС‚С‹ РёР· JSON
	 */
	static deserializeElements(json: string): ContentElement[] | null {
		try {
			return JSON.parse(json);
		} catch {
			return null;
		}
	}

	/**
	 * Р¤РёР»СЊС‚СЂСѓРµС‚ СЌР»РµРјРµРЅС‚С‹ РїРѕ С‚РёРїСѓ
	 */
	static filterByType(elements: ContentElement[], type: ContentType): ContentElement[] {
		return elements.filter((el) => el.type === type);
	}

	/**
	 * РџСЂРѕРІРµСЂСЏРµС‚, СЃРѕРґРµСЂР¶РёС‚ Р»Рё РјР°СЃСЃРёРІ СЌР»РµРјРµРЅС‚С‹ РѕРїСЂРµРґРµР»С‘РЅРЅРѕРіРѕ С‚РёРїР°
	 */
	static containsType(elements: ContentElement[], type: ContentType): boolean {
		return elements.some((el) => el.type === type);
	}
}

