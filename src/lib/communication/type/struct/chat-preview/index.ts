export type ChatPreviewProps = {
	title?: string;
	participants?: string[];
	messages?: Array<{ author: string; text: string; timestamp: string }>;
	maxMessages?: number;
	showAvatars?: boolean;
	variant?: string;
	size?: string;
	class?: string;
};
