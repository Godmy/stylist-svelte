import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';

export interface BehaviorWbdExpertQuestionnaireEvents {
	onSaveAnswer?: (answer: StructWbdExpertAnswer) => void;
	onSubmitAnswer?: (answer: StructWbdExpertAnswer) => void;
}
