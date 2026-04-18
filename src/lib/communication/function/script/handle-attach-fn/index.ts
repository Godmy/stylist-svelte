import type { SlotMessageInput as MessageInputContract } from '$stylist/communication/interface/slot/message-input';

export function handleAttachFn(props: MessageInputContract) {
	props.onAttachClick?.();
}
