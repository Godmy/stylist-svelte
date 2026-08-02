import type { RecipeWbdQuestionBulkEditor } from '$stylist/wbd/interface/recipe/question-bulk-editor';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export function createWbdQuestionBulkEditorState(props: RecipeWbdQuestionBulkEditor) {
	const className = $derived(props.class ?? '');
	const questions = $derived([...props.questions].sort((a, b) => a.orderIndex - b.orderIndex));

	return {
		get questions() {
			return questions;
		},
		get className() {
			return className;
		},
		updateQuestion(question: StructWbdQuestion) {
			props.onUpdateQuestions?.(questions.map((item) => (item.id === question.id ? question : item)));
		}
	};
}

export default createWbdQuestionBulkEditorState;
