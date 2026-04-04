import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type MessageMetaContract = RecordArchitectureMerge<
	[
		{
			timestamp?: string;
			sender?: string;
			status?: 'sent' | 'delivered' | 'read';
			children?: Snippet;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

export interface MessageMetaStyleClasses {
	base: string;
	timestamp: string;
	sender: string;
	status: string;
}
