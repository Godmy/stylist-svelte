export type ChatRoomMessage = {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: 'sent' | 'delivered' | 'read';
	isOwn: boolean;
};
