import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipeMediaItem
	extends ComputeIntersectAll<[SlotTheme, SlotMedia, SlotText, BehaviorClickable, BehaviorSizable, BehaviorElevatable, BehaviorMotionPreset]> {}
