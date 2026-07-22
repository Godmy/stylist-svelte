import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { AIProvider } from '$stylist/chat/type/struct/chat-interface/ai-provider';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

const Send = 'send';
const Bot = 'bot';
const User = 'user';
const Settings = 'settings';
const MoreVertical = 'more-vertical';

export const createChatInterfaceState = (props: AnyProperty) => {
	let newMessage = $state('');
	let selectedProvider = $state(props.currentProvider ?? '');

	const containerClass = $derived(mergeClassNames('c-chat-interface', props.class ?? ''));
	const headerClassComputed = $derived(
		mergeClassNames('c-chat-interface__header', props.headerClass ?? '')
	);
	const messageListContainerClass = $derived(
		mergeClassNames('c-chat-interface__messages', props.messageListClass ?? '')
	);
	const userMessageClass = $derived(
		mergeClassNames('c-chat-interface__bubble c-chat-interface__bubble--user', props.messageClass ?? '')
	);
	const aiMessageClass = $derived(
		mergeClassNames('c-chat-interface__bubble c-chat-interface__bubble--ai', props.messageClass ?? '')
	);
	const messageContentWrapperClass = $derived('c-chat-interface__msg-content');
	const botIconClass = $derived('c-chat-interface__msg-icon c-chat-interface__msg-icon--bot');
	const userIconClass = $derived('c-chat-interface__msg-icon c-chat-interface__msg-icon--user');
	const timestampClass = $derived('c-chat-interface__time');
	const userTimestampClass = $derived('c-chat-interface__time c-chat-interface__time--user');
	const inputAreaClass = $derived(
		mergeClassNames('c-chat-interface__footer', props.footerClass ?? '')
	);
	const messageInputClass = $derived(
		mergeClassNames('c-chat-interface__textarea', props.inputClass ?? '')
	);
	const sendButtonClass = $derived('c-chat-interface__send');
	const sendIconClass = $derived('c-chat-interface__send-icon');
	const providerSelectorClass = $derived('c-chat-interface__provider-select');
	const settingsButtonClass = $derived('c-chat-interface__icon-btn');
	const moreOptionsButtonClass = $derived('c-chat-interface__icon-btn');

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
