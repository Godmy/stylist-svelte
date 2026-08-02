import type { RecipeWbdConsensusReviewBoard } from '$stylist/wbd/interface/recipe/consensus-review-board';

export function createWbdConsensusReviewBoardState(props: RecipeWbdConsensusReviewBoard) {
	const className = $derived(props.class ?? '');
	const levelOrder = { low: 0, medium: 1, high: 2 };
	const items = $derived(
		[...props.items].sort(
			(a, b) => levelOrder[a.consensusLevel] - levelOrder[b.consensusLevel] || a.questionText.localeCompare(b.questionText)
		)
	);

	return {
		get items() {
			return items;
		},
		get className() {
			return className;
		},
		selectQuestion(questionId: string) {
			props.onSelectQuestion?.(questionId);
		}
	};
}

export default createWbdConsensusReviewBoardState;
