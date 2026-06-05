import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputLong extends Omit<SlotInputBase, 'type'> {
	rows?: number;
	autoResize?: boolean;
	maxHeight?: string;
}
