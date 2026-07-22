import type { RecipeAiChat } from '$stylist/ai/interface/recipe/ai-chat';
import type { AiChatChatMessage } from '$stylist/ai/type/struct/ai-chat-chat-message';
export function createAiChatState(props: RecipeAiChat) {
	const X = 'x';
	const Send = 'send';

	let inputMessage = $state('');
	const messages = $state<AiChatChatMessage[]>([
		{
			role: 'assistant',
			content:
				'Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РЇ РїРѕРјРѕРіСѓ РІР°Рј СЃ Р°РЅР°Р»РёР·РѕРј СЃРєСЂРёРЅС€РѕС‚Р°. РћРїРёС€РёС‚Рµ, С‡С‚Рѕ РІС‹ С…РѕС‚РёС‚Рµ СѓР·РЅР°С‚СЊ РёР»Рё РѕР±СЃСѓРґРёС‚СЊ.'
		}
	]);

	const onClose = $derived(props.onClose);
	const containerClass = $derived(props.class == null ? undefined : String(props.class));
	const headerClass = $derived('ai-chat__header');
	const messagesContainerClass = $derived('ai-chat__messages');
	const inputContainerClass = $derived('ai-chat__input');

	const messageClass = (role: 'user' | 'assistant') =>
		`ai-chat__message ai-chat__message--${role}`;

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
				content: `Р’С‹ РЅР°РїРёСЃР°Р»Рё: "${userMsg}". Р­С‚Рѕ РґРµРјРѕРЅСЃС‚СЂР°С†РёРѕРЅРЅС‹Р№ РѕС‚РІРµС‚. Р’ СЂРµР°Р»СЊРЅРѕР№ РІРµСЂСЃРёРё Р·РґРµСЃСЊ Р±СѓРґРµС‚ РЅР°СЃС‚РѕСЏС‰РёР№ РѕС‚РІРµС‚ РѕС‚ AI РјРѕРґРµР»Рё.`
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
		get X() {
			return X;
		},
		get Send() {
			return Send;
		},
		get inputMessage() {
			return inputMessage;
		},
		set inputMessage(v: string) {
			inputMessage = v;
		},
		get messages() {
			return messages;
		},
		get onClose() {
			return onClose;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get messagesContainerClass() {
			return messagesContainerClass;
		},
		messageClass,
		get inputContainerClass() {
			return inputContainerClass;
		},
		sendMessage,
		handleKeyPress
	};
}
