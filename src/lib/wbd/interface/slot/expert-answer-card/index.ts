import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface SlotWbdExpertAnswerCard {
	question: StructWbdQuestion;
	answer?: StructWbdExpertAnswer;
	class?: string;
}
