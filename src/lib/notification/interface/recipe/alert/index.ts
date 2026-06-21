import type { SlotAlert } from '$stylist/notification/interface/slot/alert';
import type { AlertProps as LegacyAlertProps1 } from '$stylist/notification/type/struct/alert-props/alert-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorMotionPreset as IMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeAlert
	extends ComputeIntersectAll<
		[
			LegacyAlertProps1,
			SlotAlert,
			SlotChildren,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IStatusSlot,
			IClickable,
			IMotionPreset,
			ISized,
			IShapeable,
			ISpaced,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}