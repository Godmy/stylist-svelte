/** Специфичные свойства для аккордеонов */
import type { Snippet } from 'svelte';

export interface AccordionSpecificProps {
	/** Тип аккордеона */
	type?: 'accordion' | 'advanced';

	/** Заголовок секции */
	header?: string;

	/** Контент секции */
	content?: Snippet | string;

	/** Разрешить множественное раскрытие (для advanced) */
	multiple?: boolean;

	/** Иконка-индикатор (шеvron) */
	chevronIcon?: string;

	/** children как Snippet */
	children?: Snippet;
}
