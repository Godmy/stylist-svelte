import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * InputRecipe — унифицированный рецепт для всех типов полей ввода.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label
 *   ICaptionSlot              (information) — helperText, caption, error
 *   IIconSlot                 (information) — iconLeft, iconRight
 *   IStatusSlot               (information) — error, disabled
 *   IFocusable                (interaction) — onFocus, onBlur, tabIndex
 *   ISizable                  (architecture) — size, density
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Input: type='text'
 *   - Email: type='email'
 *   - Password: type='password', showPasswordToggle
 *   - TextArea: type='textarea', rows, maxLength
 *   - Number: type='number', min, max, step
 *   - Pin: type='pin', length
 *   - Phone: type='tel'
 *   - Search: type='search', onSearch
 */
export interface InputRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLInputElement>
	]>,
		InputSpecificProps
{}

/** Специфичные свойства для различных типов полей ввода */
export interface InputSpecificProps {
	/** Тип поля ввода */
	type?: 'text' | 'email' | 'password' | 'textarea' | 'number' | 'pin' | 'tel' | 'search';

	/** Максимальная длина */
	maxLength?: number;

	/** Для TextArea: количество строк */
	rows?: number;

	/** Для Password: показать/скрыть пароль */
	showPasswordToggle?: boolean;

	/** Для Pin: количество цифр */
	length?: number;

	/** Для Number: min/max/step */
	min?: number;
	max?: number;
	step?: number;

	/** children как Snippet (для аддонов) */
	children?: Snippet;
}
