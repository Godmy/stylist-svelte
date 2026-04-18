import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { BehaviorMotionPreset as IMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorPositionable as IPositionable } from '$stylist/layout/interface/behavior/positionable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface DraggableItemRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		IStatusSlot,
		IDraggable,
		ISelectable<string>,
		ISized,
		IShapeable,
		ISpaced,
		IElevatable,
		IPositionable,
		IMotionPreset,
		SlotTheme,
		HTMLAttributes<HTMLDivElement>
	]>
{}

