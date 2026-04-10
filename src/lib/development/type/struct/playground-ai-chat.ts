export type ChatMessage = {
	role: 'user' | 'assistant';
	content: string;
};

export type Props = {
	/** Callback when panel is closed */
	onClose?: () => void;
};
