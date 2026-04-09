/**
 * ArticleCard — карточка статьи с заголовком, описанием и метаданными..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ArticleCardAction } from '$stylist/commerce/interface/recipe/article-card-action';

export interface ArticleCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		IIconSlot,
		ThemeAttributes<HTMLElement>
	]>
{
	title?: string;
	subtitle?: string;
	image?: string;
	actions?: ArticleCardAction[];
	children?: Snippet;
}
