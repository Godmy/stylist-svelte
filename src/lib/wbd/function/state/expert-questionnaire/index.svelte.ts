import type { RecipeWbdExpertQuestionnaire } from '$stylist/wbd/interface/recipe/expert-questionnaire';
import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';

export function createWbdExpertQuestionnaireState(props: RecipeWbdExpertQuestionnaire) {
	const className = $derived(props.class ?? '');
	const sortedQuestions = $derived([...props.questions].sort((a, b) => a.orderIndex - b.orderIndex));
	const currentQuestion = $derived(
		sortedQuestions.find((question) => question.id === props.currentQuestionId) ?? sortedQuestions[0]
	);
	const submittedCount = $derived(
		sortedQuestions.filter((question) => props.answers[question.id]?.submitted).length
	);

	return {
		get questions() {
			return sortedQuestions;
		},
		get currentQuestion() {
			return currentQuestion;
		},
		get submittedCount() {
			return submittedCount;
		},
		get totalCount() {
			return sortedQuestions.length;
		},
		get className() {
			return className;
		},
		answerFor(questionId: string) {
			return props.answers[questionId];
		},
		saveAnswer(answer: StructWbdExpertAnswer) {
			props.onSaveAnswer?.(answer);
		},
		submitAnswer(answer: StructWbdExpertAnswer) {
			props.onSubmitAnswer?.({ ...answer, submitted: true });
		}
	};
}

export default createWbdExpertQuestionnaireState;
