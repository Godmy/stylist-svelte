import type { ContentType } from '$stylist/interaction/class/object-manager/content-editor-content-type';
import type { ContentElement } from '$stylist/interaction/class/object-manager/content-editor-content-element';

export class ObjectManagerContentEditor {
	/**
	 * Создаёт новый элемент контента
	 */
	static createElement(type: ContentType, content: string = ''): ContentElement {
		return {
			id: `element-${Date.now()}`,
			type,
			content
		};
	}

	/**
	 * Нормализует массив элементов контента
	 */
	static normalizeElements(elements?: ContentElement[]): ContentElement[] {
		if (!elements || elements.length === 0) {
			return [{ id: '1', type: 'text', content: '' }];
		}
		return elements.map(el => ({
			id: el.id,
			type: el.type,
			content: el.content ?? '',
			attributes: el.attributes
		}));
	}

	/**
	 * Обновляет контент элемента по ID
	 */
	static updateElementContent(
		elements: ContentElement[],
		id: string,
		newContent: string
	): ContentElement[] {
		return elements.map(el =>
			el.id === id ? { ...el, content: newContent } : el
		);
	}

	/**
	 * Добавляет новый элемент после указанного индекса
	 */
	static addElementAfter(
		elements: ContentElement[],
		index: number,
		type: ContentType = 'text'
	): ContentElement[] {
		const newElement = this.createElement(type);
		return [
			...elements.slice(0, index + 1),
			newElement,
			...elements.slice(index + 1)
		];
	}

	/**
	 * Удаляет элемент по ID
	 */
	static deleteElement(
		elements: ContentElement[],
		id: string
	): ContentElement[] {
		if (elements.length <= 1) {
			return elements; // Keep at least one element
		}
		return elements.filter(el => el.id !== id);
	}

	/**
	 * Перемещает элемент вверх или вниз
	 */
	static moveElement(
		elements: ContentElement[],
		id: string,
		direction: 'up' | 'down'
	): ContentElement[] {
		const index = elements.findIndex(el => el.id === id);
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
	 * Определяет следующий активный элемент после удаления
	 */
	static getNextActiveElementId(
		elements: ContentElement[],
		deletedId: string
	): string | null {
		if (elements.length <= 1) return null;

		const index = elements.findIndex(el => el.id === deletedId);
		if (index > 0) {
			return elements[index - 1].id;
		}
		return elements[0]?.id || null;
	}

	/**
	 * Сериализует элементы для сохранения
	 */
	static serializeElements(elements: ContentElement[]): string {
		return JSON.stringify(elements, null, 2);
	}

	/**
	 * Десериализует элементы из JSON
	 */
	static deserializeElements(json: string): ContentElement[] | null {
		try {
			return JSON.parse(json);
		} catch {
			return null;
		}
	}

	/**
	 * Фильтрует элементы по типу
	 */
	static filterByType(elements: ContentElement[], type: ContentType): ContentElement[] {
		return elements.filter(el => el.type === type);
	}

	/**
	 * Проверяет, содержит ли массив элементы определённого типа
	 */
	static containsType(elements: ContentElement[], type: ContentType): boolean {
		return elements.some(el => el.type === type);
	}
}
