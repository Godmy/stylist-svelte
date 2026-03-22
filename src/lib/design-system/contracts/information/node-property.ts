export interface NodePropertyState {
	error?: boolean;
	editable?: boolean;
}

import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

import type { TokenPropertyType } from '$stylist/design-system/tokens/information/property-type';
/**
 * Свойства свойства узла графа
 */
export interface NodePropertyProps extends Omit<HtmlAttributesBase<HTMLDivElement>, 'onchange'> {
	/** Уникальный идентификатор свойства */
	id: string;
	/** Имя свойства */
	name: string;
	/** Тип свойства */
	type?: TokenPropertyType;
	/** Значение свойства */
	value?: unknown;
	/** Значение по умолчанию */
	defaultValue?: unknown;
	/** Размер компонента */
	size?: TokenSize;
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






