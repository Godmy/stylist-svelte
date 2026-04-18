export type PlaygroundAiPanelProps = {
	/** Selected provider ID */
	selectedProviderId?: string | null;
	/** Callback when option is selected */
	onOptionSelect?: (providerId: string, optionId: string) => void;
	/** Callback when chat is started */
	onStartChat?: (providerId: 'gemini' | 'qwen' | 'claude' | 'codex') => void;
};
