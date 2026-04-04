import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type MessageBubbleContract = RecordArchitectureMerge<
	[
		{
			author: string;
			message: string;
			timestamp?: string;
			align?: TokenAlignment;
			avatar?: string;
			variant?: TokenAppearance;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
