import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SelectorSpecificProps } from '$stylist/control/interface/recipe/selector-specific-props';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface SelectorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		ISelectable<string | string[]>,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		IScrollable,
		SlotTheme,
		HTMLAttributes<HTMLSelectElement>
	]>,
		SelectorSpecificProps
{}

