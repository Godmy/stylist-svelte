import type { RecipeWbdSessionQuestionEditor } from '$stylist/wbd/interface/recipe/session-question-editor';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export function createWbdSessionQuestionEditorState(props: RecipeWbdSessionQuestionEditor) {
	const className = $derived(props.class ?? '');
	const sortedQuestions = $derived([...props.questions].sort((a, b) => a.orderIndex - b.orderIndex));
	const selectedQuestion = $derived(
		sortedQuestions.find((question) => question.id === props.selectedQuestionId) ?? sortedQuestions[0]
	);

	return {
		get questions() {
			return sortedQuestions;
		},
		get selectedQuestion() {
			return selectedQuestion;
		},
		get className() {
			return className;
		},
		selectQuestion(questionId: string) {
			props.onSelectQuestion?.(questionId);
		},
		createQuestion() {
			props.onCreateQuestion?.();
		},
		updateQuestion(question: StructWbdQuestion) {
			props.onUpdateQuestion?.(question);
		},
		deleteQuestion(questionId: string) {
			props.onDeleteQuestion?.(questionId);
		}
	};
}

export default createWbdSessionQuestionEditorState;
