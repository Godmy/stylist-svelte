import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IMotionPreset } from '$stylist/interaction/interface/proto/motion-preset';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface TooltipRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IFocusable,
		ISized,
		IShapeable,
		IMotionPreset,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>
{}
