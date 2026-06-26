import type { SlotInputHelper } from '$stylist/input/interface/slot/input-helper';

export interface SlotInputError extends SlotInputHelper<HTMLParagraphElement> {
	text?: string;
	visible?: boolean;
}
