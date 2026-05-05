type ChatRoomMessage = { [key: string]: any };
export type ChatRoomProps = {
	[key: string]: any;
	messages: ChatRoomMessage[];
	currentUser: { id: string; name: string; avatar?: string };
	participants: { id: string; name: string; avatar?: string }[];
	title?: string;
	subtitle?: string;
	class?: string;
	messagesClass?: string;
	headerClass?: string;
	footerClass?: string;
	onMessageSend?: (text: string) => void;
};
