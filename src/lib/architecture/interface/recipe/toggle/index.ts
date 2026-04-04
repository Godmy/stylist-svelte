/**
 * Toggle / Switch / Checkbox — бинарный переключатель.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (подпись рядом с чекбоксом)
 *   ICaptionSlot      (information) — helperText (подсказка под элементом)
 *   ISelectable<boolean> (interaction) — value, selected, onChange
 *   IFocusable        (interaction) — tabIndex, onFocus, onBlur
 *   ISizable          (architecture) — size, density
 *   IStatusSlot       (information) — state (disabled, error…)
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ToggleRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ISelectable<boolean>,
		IFocusable,
		ISizable,
		IStatusSlot,
		ThemeAttributes<HTMLInputElement>
	]>
{}
