/** Элемент чата для превью */
export type ChatPreviewItem = {
	id: string;
	title: string;
	lastMessage?: string;
	timestamp?: string;
	unreadCount?: number;
};
