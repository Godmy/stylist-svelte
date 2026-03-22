import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

export type NodeTitleVariant = 'default' | 'selected' | 'error' | 'warning';

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
	size?: TokenSize;
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








