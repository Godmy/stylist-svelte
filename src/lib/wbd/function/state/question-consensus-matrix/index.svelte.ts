import type { RecipeWbdQuestionConsensusMatrix } from '$stylist/wbd/interface/recipe/question-consensus-matrix';

export function createWbdQuestionConsensusMatrixState(props: RecipeWbdQuestionConsensusMatrix) {
	const className = $derived(props.class ?? '');
	const questions = $derived(
		Array.from(new Map(props.cells.map((cell) => [cell.questionId, cell.questionText])).entries()).map(
			([id, text]) => ({ id, text })
		)
	);

	return {
		get rounds() {
			return props.rounds;
		},
		get questions() {
			return questions;
		},
		get className() {
			return className;
		},
		get gridTemplateColumns() {
			return `minmax(14rem, 1fr) repeat(${props.rounds.length}, 5rem)`;
		},
		cellFor(questionId: string, roundNumber: number) {
			return props.cells.find((cell) => cell.questionId === questionId && cell.roundNumber === roundNumber);
		}
	};
}

export default createWbdQuestionConsensusMatrixState;
