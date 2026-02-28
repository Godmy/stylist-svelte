import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from './common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

/**
 * Тип свойства узла
 */
export type NodePropertyType =
	| 'string'
	| 'number'
	| 'boolean'
	| 'enum'
	| 'color'
	| 'vector2'
	| 'vector3'
	| 'object'
	| 'function';

/**
 * Свойства свойства узла графа
 */
export interface NodePropertyProps extends Omit<HtmlAttributesBase<HTMLDivElement>, 'onchange'> {
	/** Уникальный идентификатор свойства */
	id: string;
	/** Имя свойства */
	name: string;
	/** Тип свойства */
	type?: NodePropertyType;
	/** Значение свойства */
	value?: unknown;
	/** Значение по умолчанию */
	defaultValue?: unknown;
	/** Размер компонента */
	size?: ComponentSize;
	/** Можно ли редактировать */
	editable?: boolean;
	/** Можно ли изменять тип */
	typeEditable?: boolean;
	/** Опции для enum */
	options?: readonly string[];
	/** Минимальное значение для number */
	min?: number;
	/** Максимальное значение для number */
	max?: number;
	/** Шаг изменения для number */
	step?: number;
	/** Префикс значения */
	prefix?: string;
	/** Суффикс значения */
	suffix?: string;
	/** Метка */
	label?: string;
	/** Описание */
	description?: string;
	/** Иконка */
	icon?: string | Snippet;
	/** Состояние ошибки */
	error?: boolean;
	/** Текст ошибки */
	errorMessage?: string;
	/** Обработчик изменения значения */
	onchange?: (name: string, value: unknown) => void;
	/** Обработчик фокуса */
	onfocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onblur?: (event: FocusEvent) => void;
	/** Дочерний контент */
	children?: Snippet;
}
