export type AIProvider = {
	id: string;
	name: string;
	options: AIOption[];
};

export type AIOption = {
	id: string;
	label: string;
	action?: () => void;
};

export type Props = {
	/** Selected provider ID */
	selectedProviderId?: string | null;
	/** Callback when option is selected */
	onOptionSelect?: (providerId: string, optionId: string) => void;
	/** Callback when chat is started */
	onStartChat?: (providerId: 'gemini' | 'qwen' | 'claude' | 'codex') => void;
};
