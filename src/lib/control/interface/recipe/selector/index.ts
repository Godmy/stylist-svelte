import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * SelectorRecipe — унифицированный рецепт для всех типов селекторов.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label
 *   ICaptionSlot              (information) — helperText, caption
 *   IIconSlot                 (information) — icon, chevron
 *   ISelectable<T>            (interaction) — value, values, multiple, onChange
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size, density
 *   IScrollable               (architecture) — overflowY (список опций)
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Selector: type='selector', single select
 *   - MultiSelect: type='multi', multiple select
 *   - Combobox: type='combobox', ввод + выбор
 *   - Dropdown: type='dropdown', меню
 *   - Autocomplete: type='autocomplete', автозаполнение
 */
export interface SelectorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		ISelectable<string | string[]>,
		IFocusable,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLSelectElement>
	]>,
		SelectorSpecificProps
{}

/** Специфичные свойства для различных типов селекторов */
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
