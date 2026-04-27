import { onMount } from 'svelte';
import type { PlaygroundAiAssistantProps } from '$stylist/playground/type/struct/playground-ai-assistant-props';
import type { PlaygroundAiAssistantChatMessage } from '$stylist/playground/type/struct/playground-ai-assistant-chat-message';
import type { PlaygroundAiAssistantAIClientLike } from '$stylist/playground/type/struct/playground-ai-assistant-ai-client-like';
import { PlaygroundAiAssistantStyleManager } from '$stylist/playground/class/style-manager/playground-ai-assistant';

const fallbackCreateAIClient = (): PlaygroundAiAssistantAIClientLike => ({
	chat: async () => {
		throw new Error('AI client is not configured');
	},
	resetSession: () => {},
	getSessionId: () => null
});

const providerNames: Record<string, string> = {
	gemini: 'Gemini',
	qwen: 'Qwen',
	claude: 'Claude',
	codex: 'Codex',
};

export function createPlaygroundAiAssistantState(props: PlaygroundAiAssistantProps) {
	const X = 'x';
	const Send = 'send';
	const Trash2 = 'trash-2';
	const RotateCcw = 'rotate-ccw';
	const Loader2 = 'loader-2';

	// SlotState
	let inputMessage = $state('');
	let messages = $state<PlaygroundAiAssistantChatMessage[]>([]);
	let isLoading = $state(false);
	let error = $state<string | null>(null);
	let messagesContainer: HTMLDivElement | undefined = $state(undefined);

	const providerId = $derived(props.providerId ?? 'gemini');
	const createAIClient = $derived(props.createAIClient ?? fallbackCreateAIClient);
	const onClose = $derived(props.onClose);

	const aiClient = $derived(createAIClient(providerId));
	const currentProviderName = $derived(providerNames[providerId]);

	const containerClass = $derived(PlaygroundAiAssistantStyleManager.getContainerClasses());
	const headerClass = $derived(PlaygroundAiAssistantStyleManager.getHeaderClasses());
	const messagesContainerClass = $derived(PlaygroundAiAssistantStyleManager.getMessagesContainerClasses());
	const messageClass = (role: 'user' | 'assistant') => PlaygroundAiAssistantStyleManager.getMessageClasses(role);
	const inputContainerClass = $derived(PlaygroundAiAssistantStyleManager.getInputContainerClasses());
	const errorBannerClass = $derived(PlaygroundAiAssistantStyleManager.getErrorBannerClasses());
	const loadingIndicatorClass = $derived(PlaygroundAiAssistantStyleManager.getLoadingIndicatorClasses());

	// Send message to AI
	async function sendMessage() {
		if (!inputMessage.trim() || isLoading) return;

		const userMessage: PlaygroundAiAssistantChatMessage = {
			role: 'user',
			content: inputMessage.trim(),
			timestamp: Date.now(),
		};

		messages.push(userMessage);
		const userPrompt = inputMessage;
		inputMessage = '';
		isLoading = true;
		error = null;

		// Scroll to bottom
		setTimeout(scrollToBottom, 100);

		try {
			const response = await aiClient.chat({
				prompt: userPrompt,
				autoApproveTools: true,
			});

			const assistantMessage: PlaygroundAiAssistantChatMessage = {
				role: 'assistant',
				content: response.text || '(empty response)',
				timestamp: Date.now(),
			};

			messages.push(assistantMessage);
			setTimeout(scrollToBottom, 100);
		} catch (err) {
			console.error('AI chat error:', err);

			if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
				const sessionId = typeof aiClient.getSessionId === 'function' ? aiClient.getSessionId() : undefined;
				error = `Cannot connect to ${currentProviderName} server. Please check:\n1. Server is running\n2. URL is correct: ${sessionId ? 'configured' : 'not configured'}\n3. CORS is enabled`;
			} else {
				error = err instanceof Error ? err.message : 'Failed to get response from AI';
			}
		} finally {
			isLoading = false;
		}
	}

	// Handle keyboard shortcuts
	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	// Clear chat history
	function clearChat() {
		messages = [];
		aiClient.resetSession();
		error = null;
	}

	// Scroll to bottom of messages
	function scrollToBottom() {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	}

	// Add initial greeting
	onMount(() => {
		messages = [
			{
				role: 'assistant',
				content: `Здравствуйте! Я ${currentProviderName} AI Assistant. Чем могу помочь?`,
				timestamp: Date.now(),
			},
		];
	});

	return {
		get X() { return X; },
		get Send() { return Send; },
		get Trash2() { return Trash2; },
		get RotateCcw() { return RotateCcw; },
		get Loader2() { return Loader2; },
		get inputMessage() { return inputMessage; },
		set inputMessage(v: string) { inputMessage = v; },
		get messages() { return messages; },
		get isLoading() { return isLoading; },
		get error() { return error; },
		get messagesContainer() { return messagesContainer; },
		set messagesContainer(v: HTMLDivElement | undefined) { messagesContainer = v; },
		get providerId() { return providerId; },
		get aiClient() { return aiClient; },
		get currentProviderName() { return currentProviderName; },
		get onClose() { return onClose; },
		get containerClass() { return containerClass; },
		get headerClass() { return headerClass; },
		get messagesContainerClass() { return messagesContainerClass; },
		messageClass,
		get inputContainerClass() { return inputContainerClass; },
		get errorBannerClass() { return errorBannerClass; },
		get loadingIndicatorClass() { return loadingIndicatorClass; },
		sendMessage,
		handleKeyPress,
		clearChat,
		scrollToBottom
	};
}

export default createPlaygroundAiAssistantState;
