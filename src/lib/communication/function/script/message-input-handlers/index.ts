import type { SlotMessageInput as MessageInputContract } from '$stylist/communication/interface/slot/message-input';

export function handleInputFn(e: Event, props: MessageInputContract) {
	const target = e.target as HTMLTextAreaElement;
	props.onMessageInput?.(target.value);
}

export function handleKeydownFn(e: KeyboardEvent, onSend: () => void) {
	if (e.key === 'Enter' && !e.shiftKey) {
		e.preventDefault();
		onSend();
	}
}

export function handleAttachFn(props: MessageInputContract) {
	props.onAttachClick?.();
}

export function handleEmojiFn(props: MessageInputContract) {
	props.onEmojiClick?.();
}
