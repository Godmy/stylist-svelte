import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface MessageThreadMessageData {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: 'sent' | 'delivered' | 'read';
	isOwn: boolean;
}

export type MessageThreadContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			messages?: MessageThreadMessageData[];
			containerClass?: string;
			messageContainerClass?: string;
			headerClass?: string;
			loading?: boolean;
			variant?: 'dense' | 'default' | 'spacious';
			messageVariant?: 'default' | 'primary' | 'secondary';
			currentUser?: { id: string; name: string };
			onMessageAction?: (action: string, message: MessageThreadMessageData) => void;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
