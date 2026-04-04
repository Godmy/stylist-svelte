import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type ChatStatusIndicatorContract = RecordArchitectureMerge<
	[
		{
			status?: TokenAvailability;
			size?: TokenSize;
			showLabel?: boolean;
		},
		InteractionHTMLAttributes<HTMLSpanElement>
	]
>;
