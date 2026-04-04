/**
 * Select / Dropdown / Combobox — выбор из списка.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (подпись поля), placeholder
 *   ICaptionSlot      (information) — helperText, caption
 *   IIconSlot         (information) — iconLeft (иконка в поле), icon (chevron)
 *   ISelectable<string> (interaction) — value, values, multiple, onChange
 *   IFocusable        (interaction) — tabIndex, onFocus, onBlur
 *   IStatusSlot       (information) — state (error, disabled…)
 *   ISizable          (architecture) — size, density, shape
 *   IScrollable       (architecture) — overflowY (список опций)
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { IScrollable } from '$stylist/architecture/interface/proto/scrollable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SelectRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		ISelectable<string>,
		IFocusable,
		IStatusSlot,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLSelectElement>
	]>
{}
