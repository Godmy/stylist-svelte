import type { RecipeFacilitatorControlPanel } from '$stylist/wbd/interface/recipe/facilitator-control-panel';

export function createFacilitatorControlPanelState(props: RecipeFacilitatorControlPanel) {
	const pendingCount = $derived(props.pendingCount ?? 0);
	const totalCount = $derived(props.totalCount ?? 0);
	const allSubmitted = $derived(totalCount > 0 && pendingCount === 0);
	const className = $derived(props.class ?? '');

	return {
		get round() {
			return props.round;
		},
		get pendingCount() {
			return pendingCount;
		},
		get totalCount() {
			return totalCount;
		},
		get allSubmitted() {
			return allSubmitted;
		},
		get className() {
			return className;
		},
		openRound: () => props.onOpenRound?.(),
		closeRound: () => props.onCloseRound?.(),
		revealResults: () => props.onRevealResults?.(),
		advanceRound: () => props.onAdvanceRound?.(),
		finalize: () => props.onFinalize?.()
	};
}

export default createFacilitatorControlPanelState;
