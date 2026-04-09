/** Специфичные свойства для различных типов селекторов */
import type { Snippet } from 'svelte';

export interface SelectorSpecificProps {
	/** Тип селектора */
	type?: 'selector' | 'multi' | 'combobox' | 'dropdown' | 'autocomplete';

	/** Опции списка */
	options?: Array<{ value: string; label: string; icon?: string; disabled?: boolean }>;

	/** Плейсхолдер (для combobox/autocomplete) */
	placeholder?: string;

	/** Разрешить поиск (для combobox/autocomplete) */
	searchable?: boolean;

	/** Разрешить очистку (кнопка ×) */
	clearable?: boolean;

	/** Кастомный рендеринг опций */
	optionRenderer?: Snippet<[option: { value: string; label: string }]>;

	/** children как Snippet */
	children?: Snippet;
}
