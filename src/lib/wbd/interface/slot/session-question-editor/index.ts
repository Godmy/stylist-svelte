import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface SlotWbdSessionQuestionEditor {
	questions: StructWbdQuestion[];
	selectedQuestionId?: string;
	class?: string;
}
