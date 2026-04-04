/**
 * Label — атомарный текстовый элемент.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label, placeholder, title
 *   ITypographyToken  (theme)       — fontSize, fontWeight, fontFamily, lineHeight
 *   IPositionable     (architecture) — layoutLevel, layoutGravity
 *   ThemeAttributes   (theme)       — data-variant, data-tone (HTML-атрибуты)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ITypographyToken } from '$stylist/typography/interface/proto/typography-token';
import type { IPositionable } from '$stylist/architecture/interface/proto/positionable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface LabelRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ITypographyToken,
		IPositionable,
		ThemeAttributes<HTMLSpanElement>
	]>
{}
