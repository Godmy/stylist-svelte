/**
 * AtomicPrinciples — визуализация атомарных принципов..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AtomicPrinciplesRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}
