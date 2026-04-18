/**
 * Avatar пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ (пїЅпїЅпїЅпїЅ, пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ, пїЅпїЅпїЅпїЅпїЅпїЅ).
 *
 * LEGO-пїЅпїЅпїЅпїЅпїЅпїЅ:
 *   IMediaSlot        (information) пїЅ src, alt (пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   ILabelSlot        (information) пїЅ label (пїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ / пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ fallback)
 *   IStatusSlot       (information) пїЅ status (online, away, offlineпїЅ)
 *   IBadgeSlot        (information) пїЅ count, dot (пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   IClickable        (interaction) пїЅ onClick (пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   ISizable          (architecture) пїЅ size, shape (circular / rounded)
 *   ThemeAttributes   (theme)       пїЅ data-variant
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AvatarRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ILabelSlot,
		IStatusSlot,
		IBadgeSlot,
		IClickable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>
{}

