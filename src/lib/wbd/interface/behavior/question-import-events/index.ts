import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface BehaviorWbdQuestionImportEvents {
	onImportQuestions?: (questions: StructWbdQuestion[]) => void;
}
