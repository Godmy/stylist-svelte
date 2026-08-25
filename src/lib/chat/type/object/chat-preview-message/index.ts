export type ChatPreviewMessage = {
	author: string;
	text: string;
	timestamp: string;
	isOwn?: boolean;
	avatar?: string;
	sender?: string;
	status?: string;
};
