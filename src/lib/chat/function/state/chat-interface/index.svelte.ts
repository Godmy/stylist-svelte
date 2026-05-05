import type { Message } from '$stylist/chat/type/struct/chat-interface/message';
import type { AIProvider } from '$stylist/chat/type/struct/chat-interface/ai-provider';
import type { ChatInterfaceProps } from '$stylist/chat/type/struct/chat-interface-props';
import { ChatInterfaceStyleManager } from '$stylist/chat/class/style-manager/chat-interface';

const Send = 'send';
const Bot = 'bot';
const User = 'user';
const Settings = 'settings';
const MoreVertical = 'more-vertical';

export const createChatInterfaceState = (props: ChatInterfaceProps) => {
	let newMessage = $state('');
	let selectedProvider = $state(props.currentProvider ?? '');

	const containerClass = $derived(ChatInterfaceStyleManager.getContainerClass(`c-chat-interface ${props.class ?? ''}`));
	const headerClassComputed = $derived(ChatInterfaceStyleManager.getHeaderClass(props.headerClass ?? ''));
	const messageListContainerClass = $derived(ChatInterfaceStyleManager.getMessagesContainerClass(props.messageListClass ?? ''));
	const userMessageClass = $derived(ChatInterfaceStyleManager.getMessageClass(true, props.messageClass ?? ''));
	const aiMessageClass = $derived(ChatInterfaceStyleManager.getMessageClass(false, props.messageClass ?? ''));
	const messageContentWrapperClass = $derived(ChatInterfaceStyleManager.getMessageContentWrapperClass());
	const botIconClass = $derived(ChatInterfaceStyleManager.getBotIconClass());
	const userIconClass = $derived(ChatInterfaceStyleManager.getUserIconClass());
	const timestampClass = $derived(ChatInterfaceStyleManager.getTimestampClass(false));
	const userTimestampClass = $derived(ChatInterfaceStyleManager.getTimestampClass(true));
	const inputAreaClass = $derived(ChatInterfaceStyleManager.getInputAreaClass(props.footerClass ?? ''));
	const messageInputClass = $derived(ChatInterfaceStyleManager.getMessageInputClass(props.inputClass ?? ''));
	const sendButtonClass = $derived(ChatInterfaceStyleManager.getSendButtonClass(!newMessage.trim()));
	const sendIconClass = $derived(ChatInterfaceStyleManager.getSendIconClass());
	const providerSelectorClass = $derived(ChatInterfaceStyleManager.getProviderSelectorClass());
	const settingsButtonClass = $derived(ChatInterfaceStyleManager.getSettingsButtonClass());
	const moreOptionsButtonClass = $derived(ChatInterfaceStyleManager.getMoreOptionsButtonClass());

	const showSettings = $derived(props.showSettings ?? true);
	const showProviderSelector = $derived(props.showProviderSelector ?? true);
	const placeholder = $derived(props.placeholder ?? 'Type your message...');

	const currentProviderName = $derived(
		props.aiProviders?.find((p: AIProvider) => p.id === selectedProvider)?.name || 'AI Assistant'
	);

	function sendMessage() {
		if (newMessage.trim() === '' || !props.onSend) return;
		props.onSend(newMessage.trim());
		newMessage = '';
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	return {
		get newMessage() {
			return newMessage;
		},
		set newMessage(value: string) {
			newMessage = value;
		},
		get selectedProvider() {
			return selectedProvider;
		},
		set selectedProvider(value: string) {
			selectedProvider = value;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClassComputed() {
			return headerClassComputed;
		},
		get messageListContainerClass() {
			return messageListContainerClass;
		},
		get userMessageClass() {
			return userMessageClass;
		},
		get aiMessageClass() {
			return aiMessageClass;
		},
		get messageContentWrapperClass() {
			return messageContentWrapperClass;
		},
		get botIconClass() {
			return botIconClass;
		},
		get userIconClass() {
			return userIconClass;
		},
		get timestampClass() {
			return timestampClass;
		},
		get userTimestampClass() {
			return userTimestampClass;
		},
		get inputAreaClass() {
			return inputAreaClass;
		},
		get messageInputClass() {
			return messageInputClass;
		},
		get sendButtonClass() {
			return sendButtonClass;
		},
		get sendIconClass() {
			return sendIconClass;
		},
		get providerSelectorClass() {
			return providerSelectorClass;
		},
		get settingsButtonClass() {
			return settingsButtonClass;
		},
		get moreOptionsButtonClass() {
			return moreOptionsButtonClass;
		},
		get showSettings() {
			return showSettings;
		},
		get showProviderSelector() {
			return showProviderSelector;
		},
		get placeholder() {
			return placeholder;
		},
		get currentProviderName() {
			return currentProviderName;
		},
		get Send() {
			return Send;
		},
		get Bot() {
			return Bot;
		},
		get User() {
			return User;
		},
		get Settings() {
			return Settings;
		},
		get MoreVertical() {
			return MoreVertical;
		},
		sendMessage,
		handleKeyDown
	};
};

export default createChatInterfaceState;
