import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { FeedbackSpecificProps } from '$stylist/control/interface/recipe/feedback-specific-props';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IMotionPreset } from '$stylist/interaction/interface/proto/motion-preset';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface FeedbackRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		IMotionPreset,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		FeedbackSpecificProps
{}
