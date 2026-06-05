import type { SlotBaseFeedback as IBaseFeedbackProps } from '$stylist/notification/interface/slot/base-feedback';

export interface SlotErrorMessage extends IBaseFeedbackProps {
	message?: string;
	showIcon?: boolean;
}
