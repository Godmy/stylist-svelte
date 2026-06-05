import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputEmail extends Omit<SlotInputBase, 'type'> {
	autocomplete?: 'email' | 'off' | 'on';
}
