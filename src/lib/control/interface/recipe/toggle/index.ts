import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { ToggleSpecificProps } from '$stylist/control/interface/recipe/toggle-specific-props';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface ToggleRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		ISelectable<boolean>,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		SlotTheme,
		HTMLAttributes<HTMLInputElement>
	]>,
		ToggleSpecificProps
{}

