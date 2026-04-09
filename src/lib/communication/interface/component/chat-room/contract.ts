import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface ChatRoomMessage {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: 'sent' | 'delivered' | 'read';
	isOwn: boolean;
}

export interface ChatRoomUser {
	id: string;
	name: string;
	avatar?: string;
}

export interface ChatRoomParticipant {
	id: string;
	name: string;
	avatar?: string;
}

export type ChatRoomContract = RecordArchitectureMerge<
	[
		{
			messages?: ChatRoomMessage[];
			currentUser: ChatRoomUser;
			participants?: ChatRoomParticipant[];
			title?: string;
			subtitle?: string;
			messagesClass?: string;
			headerClass?: string;
			footerClass?: string;
			onMessageSend?: (text: string) => void;
			loading?: boolean;
			variant?: 'default' | 'compact' | 'spacious';
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
