import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { TokenTimeFormat } from '$stylist/information/type/enum/time-format';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type MessageTimestampContract = RecordArchitectureMerge<
	[
		{
			timestamp: Date;
			formatStyle?: TokenTimeFormat;
			showRelative?: boolean;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
