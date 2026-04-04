import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IScrollable } from '$stylist/architecture/interface/proto/scrollable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * AccordionRecipe — унифицированный рецепт для аккордеонов.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — header, title
 *   ICaptionSlot              (information) — description, subtitle
 *   IIconSlot                 (information) — chevron, icon
 *   ISelectable<T>            (interaction) — value, expanded, onChange
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size, density
 *   IScrollable               (architecture) — overflowY (контент)
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Accordion: type='accordion', single expand
 *   - AdvancedAccordion: type='advanced', multiple expand
 */
export interface AccordionRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		ISelectable<string | string[]>,
		IFocusable,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLDivElement>
	]>,
		AccordionSpecificProps
{}

/** Специфичные свойства для аккордеонов */
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
