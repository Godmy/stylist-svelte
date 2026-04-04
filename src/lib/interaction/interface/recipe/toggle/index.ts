import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * ToggleRecipe — унифицированный рецепт для всех типов переключателей.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label
 *   ICaptionSlot              (information) — description, helperText
 *   IStatusSlot               (information) — error, disabled
 *   ISelectable<boolean>      (interaction) — checked, onChange
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Toggle: type='toggle'
 *   - Checkbox: type='checkbox', multiple
 *   - Radio: type='radio', groupName, value
 *   - Switch: type='switch'
 */
export interface ToggleRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		ISelectable<boolean>,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLInputElement>
	]>,
		ToggleSpecificProps
{}

/** Специфичные свойства для различных типов переключателей */
export interface ToggleSpecificProps {
	/** Тип переключателя */
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';
	
	/** Для Checkbox: разрешить множественный выбор */
	multiple?: boolean;
	
	/** Для Radio: имя группы */
	groupName?: string;
	
	/** Для Switch: описание под переключателем */
	description?: string;
}
