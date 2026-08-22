import type { GestureContract } from '$stylist/layout/interface/slot/gesture-contract';

export interface BehaviorFocusable extends Partial<GestureContract> {
	onFocus?: (event: FocusEvent) => void;
	onBlur?: (event: FocusEvent) => void;
	focusEffect?: boolean;
}
