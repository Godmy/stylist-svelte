/**
 * AccessibilityCheckbox — чекбокс доступности..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IStatusSlot        (information) — status (Status)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AccessibilityCheckboxRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IStatusSlot,
		ThemeAttributes<HTMLInputElement>
	]>
{}
