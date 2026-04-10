import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { MessageInputContract } from '$stylist/communication/interface/component/message-input';
import {
	handleInputFn,
	handleKeydownFn,
	handleAttachFn,
	handleEmojiFn
} from '$stylist/communication/function/script/message-input-handlers';

export const createMessageInputState = (
	props: MessageInputContract & InteractionHTMLAttributes<HTMLDivElement>
) => {
	let messageContent = $state('');

	const disabled = $derived(props.disabled ?? false);
	const placeholder = $derived(props.placeholder ?? 'Type a message...');
	const showAttachmentButton = $derived(props.showAttachment ?? true);
	const showEmojiButton = $derived(props.showEmoji ?? true);
	const showSendButton = $derived(props.showSend ?? true);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			disabled: _disabled,
			placeholder: _placeholder,
			showAttachment: _showAttachment,
			showEmoji: _showEmoji,
			showSend: _showSend,
			onSendMessage: _onSendMessage,
			...rest
		} = props;
		return rest;
	});

	function handleSend() {
		if (messageContent.trim()) {
			props.onSendMessage?.(messageContent);
			messageContent = '';
		}
	}

	function handleInput(e: Event) {
		handleInputFn(e, props);
	}

	function handleKeydown(e: KeyboardEvent) {
		handleKeydownFn(e, handleSend);
	}

	function handleAttach() {
		handleAttachFn(props);
	}

	function handleEmoji() {
		handleEmojiFn(props);
	}

	return {
		get messageContent() {
			return messageContent;
		},
		set messageContent(val: string) {
			messageContent = val;
		},
		get disabled() {
			return disabled;
		},
		get placeholder() {
			return placeholder;
		},
		get showAttachmentButton() {
			return showAttachmentButton;
		},
		get showEmojiButton() {
			return showEmojiButton;
		},
		get showSendButton() {
			return showSendButton;
		},
		get restProps() {
			return restProps;
		},
		handleSend,
		handleInput,
		handleKeydown,
		handleAttach,
		handleEmoji,
		containerClasses:
			'flex items-end gap-2 border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3',
		actionButtonsClasses: 'flex items-center gap-1',
		actionButtonClasses:
			'inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] disabled:opacity-[var(--opacity-50)]',
		inputContainerClasses: 'flex-1',
		inputClasses:
			'w-full resize-none rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 text-sm outline-none focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 disabled:opacity-[var(--opacity-50)]',
		sendButtonClasses:
			'inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-700)] disabled:opacity-[var(--opacity-50)]'
	};
};

export default createMessageInputState;
