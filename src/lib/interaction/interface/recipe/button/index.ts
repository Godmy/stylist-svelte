import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TextRecipe } from '$stylist/typography/interface/recipe/text';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';

export interface ButtonRecipe
	extends StructIntersectAll<
		[TextRecipe, IIconSlot, IClickable, IFocusable, ISizable, IBadgeSlot]
	> {}
