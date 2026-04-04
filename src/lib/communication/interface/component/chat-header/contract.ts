import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ChatHeaderUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'offline' | 'away' | 'typing';
}

export interface ChatHeaderChat {
	id: string;
	name?: string;
	participants: ChatHeaderUser[];
	isGroup: boolean;
}

export type ChatHeaderContract = RecordArchitectureMerge<
	[
		{
			chat: ChatHeaderChat;
			currentUser: ChatHeaderUser;
			showActions?: boolean;
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
