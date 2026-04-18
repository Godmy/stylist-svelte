import type { SlotMessageInput as MessageInputContract } from '$stylist/communication/interface/slot/message-input';

export function handleEmojiFn(props: MessageInputContract) {
	props.onEmojiClick?.();
}
