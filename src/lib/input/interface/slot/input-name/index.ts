import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputName extends Omit<SlotInputBase, 'type'> {
	autocomplete?: 'name' | 'given-name' | 'family-name' | 'additional-name' | 'nickname' | 'off' | 'on';
}
