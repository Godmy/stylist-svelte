import type { RecipeWbdExpertQuestionNavigator } from '$stylist/wbd/interface/recipe/expert-question-navigator';

export function createWbdExpertQuestionNavigatorState(props: RecipeWbdExpertQuestionNavigator) {
	const className = $derived(props.class ?? '');
	const questions = $derived([...props.questions].sort((a, b) => a.orderIndex - b.orderIndex));
	const answeredCount = $derived(questions.filter((question) => props.answers[question.id]?.submitted).length);

	return {
		get questions() {
			return questions;
		},
		get currentQuestionId() {
			return props.currentQuestionId;
		},
		get answeredCount() {
			return answeredCount;
		},
		get totalCount() {
			return questions.length;
		},
		get className() {
			return className;
		},
		isSubmitted(questionId: string) {
			return Boolean(props.answers[questionId]?.submitted);
		},
		selectQuestion(questionId: string) {
			props.onSelectQuestion?.(questionId);
		}
	};
}

export default createWbdExpertQuestionNavigatorState;
