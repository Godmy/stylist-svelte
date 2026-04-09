import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { IMotionPreset } from '$stylist/animation/interface/proto/motion-preset';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { IPositionable } from '$stylist/layout/interface/proto/positionable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface DraggableItemRecipe
	extends RecordArchitectureMerge<[
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
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>
{}
