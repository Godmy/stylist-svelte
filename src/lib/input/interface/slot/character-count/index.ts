import type { SlotInputHelper } from '$stylist/input/interface/slot/input-helper';

export interface SlotCharacterCount extends SlotInputHelper<HTMLDivElement> {
	current?: number;
	max?: number;
	showPercentage?: boolean;
}
