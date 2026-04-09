import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface CardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IStatusSlot,
		IClickable,
		ISized,
		IShapeable,
		ISpaced,
		IElevatable,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>
{}
