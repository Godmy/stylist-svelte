import type { SlotBaseFeedback } from '$stylist/notification/interface/slot/base-feedback';

export interface SlotSimpleTooltip extends SlotBaseFeedback {
	text: string;
	position?: 'top' | 'right' | 'bottom' | 'left';
	show?: boolean;
}
