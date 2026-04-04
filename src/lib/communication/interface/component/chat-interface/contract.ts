import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface ChatInterfaceMessage {
	id?: string;
	content: string;
	sender: 'user' | 'ai';
	timestamp: Date;
	status?: 'sending' | 'delivered' | 'read' | 'error';
}

export interface ChatInterfaceProvider {
	id: string;
	name: string;
}

export type ChatInterfaceContract = RecordArchitectureMerge<
	[
		{
			messages?: ChatInterfaceMessage[];
			onSend?: (message: string) => void;
			aiProviders?: ChatInterfaceProvider[];
			currentProvider?: string;
			placeholder?: string;
			showSettings?: boolean;
			showProviderSelector?: boolean;
			headerClass?: string;
			messageListClass?: string;
			messageClass?: string;
			inputClass?: string;
			footerClass?: string;
		},
		HTMLAttributes<HTMLDivElement>
	]
>;
