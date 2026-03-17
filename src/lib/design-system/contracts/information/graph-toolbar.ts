import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

/**
 * Элемент панели инструментов
 */
export interface GraphToolbarItem {
	/** Уникальный идентификатор */
	id: string;
	/** Тип элемента */
	type: 'button' | 'separator' | 'select' | 'input' | 'custom';
	/** Иконка */
	icon?: string;
	/** Метка */
	label?: string;
	/** Подсказка */
	tooltip?: string;
	/** Выключен ли */
	disabled?: boolean;
	/** Активен ли */
	active?: boolean;
	/** Значение для input/select */
	value?: unknown;
	/** Опции для select */
	options?: readonly string[];
	/** Обработчик клика */
	onclick?: () => void;
}

/**
 * Свойства панели инструментов графа
 */
export interface GraphToolbarProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Уникальный идентификатор */
	id: string;
	/** Элементы панели */
	items?: readonly GraphToolbarItem[];
	/** Размер компонента */
	size?: ComponentSize;
	/** Ориентация */
	orientation?: Orientation;
	/** Компактный режим */
	compact?: boolean;
	/** Показывать подсказки */
	showTooltips?: boolean;
	/** Обработчик клика по элементу */
	onItemClick?: (itemId: string) => void;
	/** Обработчик изменения значения */
	onValueChange?: (itemId: string, value: unknown) => void;
	/** Дочерний контент */
	children?: Snippet;
}




