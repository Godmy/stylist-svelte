import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface BehaviorWbdQuestionEditorEvents {
	onSelectQuestion?: (questionId: string) => void;
	onCreateQuestion?: () => void;
	onUpdateQuestion?: (question: StructWbdQuestion) => void;
	onDeleteQuestion?: (questionId: string) => void;
}
