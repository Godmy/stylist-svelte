import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';

export function handleInputFn(e: Event, props: MessageInputContract) {
	const target = e.target as HTMLTextAreaElement;
	props.onMessageInput?.(target.value);
}
