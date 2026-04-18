import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ButtonSpecificProps } from '$stylist/control/interface/recipe/button-specific-props';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface ButtonRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		SlotTheme,
		HTMLAttributes<HTMLButtonElement>
	]>,
		ButtonSpecificProps
{}

