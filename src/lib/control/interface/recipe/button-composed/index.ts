import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { ContainerProps } from '$stylist/layout/type/struct/container';
import type { BorderRecipe } from '$stylist/layout/interface/recipe/border';
import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface ButtonComposedRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		ContainerProps,
		ThemeBackgroundRecipe,
		BorderRecipe,
		HTMLButtonAttributes
	]>
{
	children?: Snippet;
	loadingLabel?: string;
	block?: boolean;
}
