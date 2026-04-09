import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';

export interface ErrorMessageRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		IIconSlot
	]>
{}
