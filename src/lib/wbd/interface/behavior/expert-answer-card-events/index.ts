import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';

export interface BehaviorWbdExpertAnswerCardEvents {
	onSaveAnswer?: (answer: StructWbdExpertAnswer) => void;
	onSubmitAnswer?: (answer: StructWbdExpertAnswer) => void;
}
