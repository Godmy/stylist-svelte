/**
 * InputField — поле ввода.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label, placeholder
 *   ICaptionSlot      (information) — helperText, caption (подпись под полем)
 *   IIconSlot         (information) — iconLeft, iconRight (иконки внутри поля)
 *   IStatusSlot       (information) — state (error, success, disabled…)
 *   IFocusable        (interaction) — onFocus, onBlur, tabIndex, autoFocus
 *   ISizable          (architecture) — size, density, shape
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface InputFieldRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLInputElement>
	]>
{}
