import type {
	ChatMessageProps,
	MessageInputProps,
	MessageThreadProps
} from '$stylist/design-system/props';

const DEFAULT_MESSAGE_INPUT_PLACEHOLDER = 'Type a message...';
const DEFAULT_MESSAGE_INPUT_DISABLED = false;
const DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT = true;
const DEFAULT_MESSAGE_INPUT_SHOW_EMOJI = true;
const DEFAULT_MESSAGE_INPUT_SHOW_SEND = true;

const DEFAULT_MESSAGE_THREAD_VARIANT: MessageThreadProps['variant'] = 'default';
const DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT: MessageThreadProps['messageVariant'] = 'default';

export type {
	ChatMessageProps,
	MessageInputProps,
	MessageThreadMessage,
	MessageThreadProps
} from '$stylist/design-system/props';

export const createMessageInputState = (props: MessageInputProps) => {
	const disabled = $derived(props.disabled ?? DEFAULT_MESSAGE_INPUT_DISABLED);
	const placeholder = $derived(props.placeholder ?? DEFAULT_MESSAGE_INPUT_PLACEHOLDER);
	const showAttachment = $derived(props.showAttachment ?? DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT);
	const showEmoji = $derived(props.showEmoji ?? DEFAULT_MESSAGE_INPUT_SHOW_EMOJI);
	const showSend = $derived(props.showSend ?? DEFAULT_MESSAGE_INPUT_SHOW_SEND);
	const containerClasses = $derived(
		[
			'message-input flex items-end gap-2 p-3 rounded-xl border border-slate-200 bg-white',
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);
	const fieldClasses = $derived(
		'w-full border-none resize-none px-4 py-2 rounded-full bg-slate-50 max-h-40 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500'
	);
	const actionButtonsClasses = $derived('flex gap-1');
	const actionButtonClasses = $derived(
		'flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed'
	);
	const sendButtonClasses = $derived(
		'flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
	);

	return {
		get disabled() {
			return disabled;
		},
		get placeholder() {
			return placeholder;
		},
		get showAttachment() {
			return showAttachment;
		},
		get showEmoji() {
			return showEmoji;
		},
		get showSend() {
			return showSend;
		},
		get showAttachmentButton() {
			return showAttachment;
		},
		get showEmojiButton() {
			return showEmoji;
		},
		get showSendButton() {
			return showSend;
		},
		get containerClasses() {
			return containerClasses;
		},
		get fieldClasses() {
			return fieldClasses;
		},
		get actionButtonsClasses() {
			return actionButtonsClasses;
		},
		get actionButtonClasses() {
			return actionButtonClasses;
		},
		get attachmentButtonClasses() {
			return actionButtonClasses;
		},
		get emojiButtonClasses() {
			return actionButtonClasses;
		},
		get sendButtonClasses() {
			return sendButtonClasses;
		},
		get inputContainerClasses() {
			return fieldClasses;
		},
		get inputClasses() {
			return fieldClasses;
		}
	};
};

export const createMessageThreadState = (props: MessageThreadProps) => {
	const loading = $derived(props.loading ?? false);
	const variant = $derived(props.variant ?? DEFAULT_MESSAGE_THREAD_VARIANT);
	const messageVariant = $derived(props.messageVariant ?? DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT);
	const messages = $derived(props.messages ?? []);
	const hostClasses = $derived(
		['message-thread flex flex-col h-full', props.class].filter(Boolean).join(' ')
	);
	const headerClasses = $derived(
		['bg-white border-b p-4', props.headerClass].filter(Boolean).join(' ')
	);
	const containerClasses = $derived(
		['flex-1 overflow-y-auto', props.containerClass].filter(Boolean).join(' ')
	);
	const messageContainerClasses = $derived(
		['space-y-4', props.messageContainerClass].filter(Boolean).join(' ')
	);
	const loadingClasses = $derived('flex justify-center items-center h-full');
	const spinnerClasses = $derived('animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500');
	const variantClass = $derived(
		({ default: 'p-4', compact: 'p-2', spacious: 'p-6' })[variant ?? 'default']
	);

	return {
		get loading() {
			return loading;
		},
		get title() {
			return props.title;
		},
		get messages() {
			return messages;
		},
		get variant() {
			return variant;
		},
		get messageVariant() {
			return messageVariant;
		},
		get hostClasses() {
			return hostClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		get variantClass() {
			return variantClass;
		}
	};
};

