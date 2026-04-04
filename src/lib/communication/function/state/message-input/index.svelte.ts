import type { MessageInputProps } from '$stylist/communication/interface/component/chat/other';

export const createMessageInputState = (props: MessageInputProps) => {
	const disabled = $derived(props.disabled ?? false);
	const placeholder = $derived(props.placeholder ?? 'Type a message...');
	const showAttachmentButton = $derived(props.showAttachment ?? true);
	const showEmojiButton = $derived(props.showEmoji ?? true);
	const showSendButton = $derived(props.showSend ?? true);

	return {
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
		containerClasses: 'flex items-end gap-2 border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3',
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







