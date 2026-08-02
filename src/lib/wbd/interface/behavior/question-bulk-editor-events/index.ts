import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface BehaviorWbdQuestionBulkEditorEvents {
	onUpdateQuestions?: (questions: StructWbdQuestion[]) => void;
}
