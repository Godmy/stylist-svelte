import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';
import type { TokenTimeFormat } from '$stylist/calendar/type/enum/time-format';

export type MessageTimestampContract = ArchitectureHTMLAttributes<HTMLTimeElement> & {
	timestamp: Date;
	formatStyle?: TokenTimeFormat;
	showRelative?: boolean;
};
