import type { RecipeRoundCollectionPanel } from '$stylist/wbd/interface/recipe/round-collection-panel';
import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export function createRoundCollectionPanelState(props: RecipeRoundCollectionPanel) {
	const className = $derived(props.class ?? '');
	const submittedCount = $derived(
		props.tasks.filter((task) => props.values?.[task.id] !== undefined).length
	);

	function submitEstimate(taskId: string, estimate: StructWbdEstimate): void {
		props.onSubmitEstimate?.(taskId, estimate);
	}

	return {
		get tasks() {
			return props.tasks;
		},
		get values() {
			return props.values ?? {};
		},
		get submittedCount() {
			return submittedCount;
		},
		get totalCount() {
			return props.tasks.length;
		},
		get className() {
			return className;
		},
		submitEstimate
	};
}

export default createRoundCollectionPanelState;
