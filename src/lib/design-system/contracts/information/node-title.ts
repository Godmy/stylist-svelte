import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from './common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { NodeTitleVariant } from '$stylist/design-system/tokens/interaction/statuses';

/**
 * Варианты заголовка узла
 */
/**
 * Свойства заголовка узла графа
 */
export interface NodeTitleProps extends Omit<HtmlAttributesBase<HTMLHeadingElement>, 'onchange'> {
	/** Текст заголовка */
	title: string;
	/** Вариант отображения */
	variant?: NodeTitleVariant;
	/** Размер заголовка */
	size?: ComponentSize;
	/** Цвет заголовка */
	color?: string;
	/** Иконка слева от заголовка */
	icon?: string | Snippet;
	/** Иконка справа от заголовка */
	trailingIcon?: string | Snippet;
	/** Выделенное состояние */
	selected?: boolean;
	/** Редактируемый */
	editable?: boolean;
	/** Обработчик изменения текста */
	onchange?: (value: string) => void;
	/** Обработчик двойного клика */
	ondblclick?: (event: MouseEvent) => void;
	/** Дочерний контент */
	children?: Snippet;
}



