import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { AlertCardAction } from '$stylist/commerce/interface/slot/alert-card-action';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AlertCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IBadgeSlot,
		IMediaSlot,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	subtitle?: string;
	variant?: string;
	disabled?: boolean;
	icon?: string;
	actions?: AlertCardAction[];
	children?: Snippet;
}
