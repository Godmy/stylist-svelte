import type { PlaygroundAiChatProps } from '$stylist/playground/type/struct/playground-ai-chat-props';
import type { PlaygroundAiChatChatMessage } from '$stylist/playground/type/struct/playground-ai-chat-chat-message';
import { PlaygroundAiChatStyleManager } from '$stylist/playground/class/style-manager/playground-ai-chat';

export function createPlaygroundAiChatState(props: PlaygroundAiChatProps) {
	const X = 'x';
	const Send = 'send';

	let inputMessage = $state('');
	let messages = $state<PlaygroundAiChatChatMessage[]>([
		{
			role: 'assistant',
			content: 'Здравствуйте! Я помогу вам с анализом скриншота. Опишите, что вы хотите узнать или обсудить.'
		}
	]);

	const onClose = $derived(props.onClose);

	const containerClass = $derived(PlaygroundAiChatStyleManager.getContainerClasses());
	const headerClass = $derived(PlaygroundAiChatStyleManager.getHeaderClasses());
	const messagesContainerClass = $derived(PlaygroundAiChatStyleManager.getMessagesContainerClasses());
	const messageClass = (role: 'user' | 'assistant') => PlaygroundAiChatStyleManager.getMessageClasses(role);
	const inputContainerClass = $derived(PlaygroundAiChatStyleManager.getInputContainerClasses());

	function sendMessage() {
		if (!inputMessage.trim()) return;

		// Add user message
		messages.push({ role: 'user', content: inputMessage });
		const userMsg = inputMessage;
		inputMessage = '';

		// Simulate AI response
		setTimeout(() => {
			messages.push({
				role: 'assistant',
				content: `Вы написали: "${userMsg}". Это демонстрационный ответ. В реальной версии здесь будет настоящий ответ от AI модели.`
			});
		}, 500);
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	return {
		get X() { return X; },
		get Send() { return Send; },
		get inputMessage() { return inputMessage; },
		set inputMessage(v: string) { inputMessage = v; },
		get messages() { return messages; },
		get onClose() { return onClose; },
		get containerClass() { return containerClass; },
		get headerClass() { return headerClass; },
		get messagesContainerClass() { return messagesContainerClass; },
		messageClass,
		get inputContainerClass() { return inputContainerClass; },
		sendMessage,
		handleKeyPress
	};
}

export default createPlaygroundAiChatState;
