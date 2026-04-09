import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';

export interface MessageThreadMessageData {
	id: string;
	content: string;
	timestamp?: number;
	author?: string;
}

export type MessageThreadContract = ArchitectureHTMLAttributes<HTMLDivElement> & {
	messages?: MessageThreadMessageData[];
};
