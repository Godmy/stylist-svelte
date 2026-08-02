import type { RecipeWbdExpertAnswerCard } from '$stylist/wbd/interface/recipe/expert-answer-card';
import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';

export function createWbdExpertAnswerCardState(props: RecipeWbdExpertAnswerCard) {
	const className = $derived(props.class ?? '');

	return {
		get question() {
			return props.question;
		},
		get answer() {
			return props.answer;
		},
		get className() {
			return className;
		},
		saveAnswer(answer: StructWbdExpertAnswer) {
			props.onSaveAnswer?.(answer);
		},
		submitAnswer(answer: StructWbdExpertAnswer) {
			props.onSubmitAnswer?.({ ...answer, submitted: true });
		}
	};
}

export default createWbdExpertAnswerCardState;
