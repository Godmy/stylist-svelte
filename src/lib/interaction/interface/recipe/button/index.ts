import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeCaptionRecipe } from '$stylist/typography/interface/recipe/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';

export interface ButtonRecipe
	extends StructIntersectAll<[
		ThemeCaptionRecipe,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		IBadgeSlot
	]>
{}

