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

	const containerClass = $derived(
		mergeClassNames(
			'c-chat-interface flex flex-col h-[--dimension-height-chat-container] overflow-hidden rounded-[1.5rem] border border-[--color-border-primary] bg-[--color-background-primary] shadow-custom40',
			'c-chat-interface',
			props.class ?? ''
		)
	);
	const headerClassComputed = $derived(
		mergeClassNames(
			'flex items-center justify-between border-b border-[--color-border-primary] bg-[--color-background-primary] px-[--spacing-lg] py-[--spacing-md]',
			props.headerClass ?? ''
		)
	);
	const messageListContainerClass = $derived(
		mergeClassNames(
			'flex-1 overflow-y-auto bg-[--color-background-secondary] p-[--spacing-md] space-y-[--spacing-md]',
			props.messageListClass ?? ''
		)
	);
	const userMessageClass = $derived(
		mergeClassNames(
			'max-w-[80%] rounded-[1.25rem] px-[--spacing-md] py-[--spacing-md] shadow-custom28 bg-[--color-primary-500] text-[--color-text-inverse] rounded-br-none ml-auto',
			props.messageClass ?? ''
		)
	);
	const aiMessageClass = $derived(
		mergeClassNames(
			'max-w-[80%] rounded-[1.25rem] px-[--spacing-md] py-[--spacing-md] shadow-custom28 bg-[--color-background-primary] text-[--color-text-primary] rounded-bl-none',
			props.messageClass ?? ''
		)
	);
	const messageContentWrapperClass = $derived('flex items-start space-x-[--spacing-sm]');
	const botIconClass = $derived('h-4 w-4 mt-0.5 text-[--color-text-secondary] flex-shrink-0');
	const userIconClass = $derived('h-4 w-4 mt-0.5 text-[--color-primary-200] flex-shrink-0');
	const timestampClass = $derived('text-xs mt-[--spacing-xs] text-[--color-text-secondary]');
	const userTimestampClass = $derived('text-xs mt-[--spacing-xs] text-[--color-primary-200]');
	const inputAreaClass = $derived(
		mergeClassNames(
			'border-t border-[--color-border-primary] bg-[--color-background-primary] p-[--spacing-lg]',
			props.footerClass ?? ''
		)
	);
	const messageInputClass = $derived(
		mergeClassNames(
			'w-full resize-none rounded-[1rem] border border-transparent bg-[--color-background-secondary] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500]',
			props.inputClass ?? ''
		)
	);
	const sendButtonClass = $derived(
		mergeClassNames(
			'flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary-500]',
			!newMessage.trim() && 'opacity-[var(--opacity-50)] cursor-not-allowed'
		)
	);
	const sendIconClass = $derived('h-5 w-5');
	const providerSelectorClass = $derived(
		'rounded-full border border-[--color-border-primary] bg-[--color-background-secondary] px-[--spacing-md] py-[--spacing-xs] text-sm text-[--color-text-primary]'
	);
	const settingsButtonClass = $derived(
		'inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[--color-text-secondary] transition-colors hover:border-[--color-border-primary] hover:bg-[--color-background-secondary] hover:text-[--color-text-primary]'
	);
	const moreOptionsButtonClass = $derived(
		'inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[--color-text-secondary] transition-colors hover:border-[--color-border-primary] hover:bg-[--color-background-secondary] hover:text-[--color-text-primary]'
	);

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
