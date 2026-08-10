import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';
import { handleAttachFn } from '$stylist/chat/function/script/handle-attach-fn';
import { handleEmojiFn } from '$stylist/chat/function/script/handle-emoji-fn';
import { handleKeydownFn } from '$stylist/chat/function/script/handle-keydown-fn';
import { handleInputFn } from '$stylist/chat/function/script/message-input-handlers';

export const createMessageInputState = (
	props: MessageInputContract & HTMLAttributes<HTMLDivElement>
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
		containerClasses: 'message-input',
		actionButtonsClasses: 'message-input__actions',
		actionButtonClasses: 'message-input__action-btn',
		inputContainerClasses: 'message-input__field-wrap',
		inputClasses: 'message-input__field',
		sendButtonClasses: 'message-input__send'
	};
};

export default createMessageInputState;
