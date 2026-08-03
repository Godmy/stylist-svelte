import type { PromoBannerProps as LegacyPromoBannerProps2 } from '$stylist/media/type/struct/promo-banner/promobanner-props';
import type { PromoBannerProps as LegacyPromoBannerProps1 } from '$stylist/media/interface/recipe/promo-banner-promo-banner-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset as IMotionToken } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipePromoBanner
	extends ComputeIntersectAll<[LegacyPromoBannerProps2, LegacyPromoBannerProps1, SlotTheme, IMediaSlot, ILabelSlot, ICaptionSlot, IClickable, ISizable, IElevatable, IMotionToken]> {}
