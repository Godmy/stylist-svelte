import type { RecipeWbdRoundSnapshotBoard } from '$stylist/wbd/interface/recipe/round-snapshot-board';

export function createWbdRoundSnapshotBoardState(props: RecipeWbdRoundSnapshotBoard) {
	const className = $derived(props.class ?? '');
	const snapshots = $derived(
		[...props.snapshots].sort((a, b) => a.roundNumber - b.roundNumber || a.questionId.localeCompare(b.questionId))
	);

	return {
		get snapshots() {
			return snapshots;
		},
		get questionLabels() {
			return props.questionLabels ?? {};
		},
		get className() {
			return className;
		}
	};
}

export default createWbdRoundSnapshotBoardState;
