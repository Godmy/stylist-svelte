import type { RecipeWbdRoundProgressMonitor } from '$stylist/wbd/interface/recipe/round-progress-monitor';

export function createWbdRoundProgressMonitorState(props: RecipeWbdRoundProgressMonitor) {
	const className = $derived(props.class ?? '');
	const submittedPercent = $derived(
		props.progress.totalExperts === 0
			? 0
			: Math.round((props.progress.submittedExperts / props.progress.totalExperts) * 100)
	);

	return {
		get progress() {
			return props.progress;
		},
		get submittedPercent() {
			return submittedPercent;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdRoundProgressMonitorState;
