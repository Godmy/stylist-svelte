/**
 * MediaItem пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ / пїЅпїЅпїЅпїЅпїЅ-пїЅпїЅпїЅпїЅпїЅпїЅ / пїЅпїЅпїЅпїЅпїЅ-пїЅпїЅпїЅпїЅпїЅпїЅ.
 *
 * LEGO-пїЅпїЅпїЅпїЅпїЅпїЅ:
 *   IMediaSlot        (information) пїЅ src, alt, thumbnail, srcSet, loading
 *   ILabelSlot        (information) пїЅ label (пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ)
 *   ICaptionSlot      (information) пїЅ caption, description
 *   IClickable        (interaction) пїЅ onClick (пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   ISizable          (architecture) пїЅ size, shape
 *   IElevatable       (architecture) пїЅ layoutElevation (пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅ пїЅпїЅпїЅпїЅпїЅ)
 *   IMotionToken      (theme)       пїЅ duration, easing (fade-in пїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   ThemeAttributes   (theme)       пїЅ data-variant
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionToken as IMotionToken } from '$stylist/animation/interface/behavior/motion-token';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface MediaItemRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ILabelSlot,
		ICaptionSlot,
		IClickable,
		ISizable,
		IElevatable,
		IMotionToken,
		ThemeAttributes<HTMLDivElement>
	]>
{}

