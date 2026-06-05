import type { SlotInputHelper } from '$stylist/input/interface/slot/input-helper';

export interface SlotFormErrorMessage extends SlotInputHelper<HTMLParagraphElement> {
	text?: string;
	visible?: boolean;
}
