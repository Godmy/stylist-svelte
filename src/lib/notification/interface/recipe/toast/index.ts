import type { ToastStackProps as LegacyToastProps4 } from '$stylist/notification/type/struct/toast-stack-props';
import type { ToastProps as LegacyToastProps3 } from '$stylist/notification/type/struct/toast-props';
import type { ToastProps as LegacyToastProps2 } from '$stylist/notification/type/struct/toast-props';
import type { RecipeToastProps as LegacyToastProps1 } from '$stylist/notification/interface/recipe/toast-props';
import type { Toast as Slot } from '$stylist/notification/interface/slot/toast';
import type { Toast as SlotToast } from '$stylist/notification/interface/slot/toast';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorMotionPreset as IMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeToast
	extends ComputeIntersectAll<
		[
			LegacyToastProps4,
			LegacyToastProps3,
			LegacyToastProps2,
			LegacyToastProps1,
			Slot,
			SlotToast,
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
