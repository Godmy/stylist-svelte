import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';

export function handleEmojiFn(props: MessageInputContract) {
	props.onEmojiClick?.();
}
