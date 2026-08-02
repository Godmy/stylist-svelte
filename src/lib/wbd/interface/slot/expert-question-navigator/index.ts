import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface SlotWbdExpertQuestionNavigator {
	questions: StructWbdQuestion[];
	answers: Record<string, StructWbdExpertAnswer>;
	currentQuestionId?: string;
	class?: string;
}
