import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';

export function handleAttachFn(props: MessageInputContract) {
	props.onAttachClick?.();
}
