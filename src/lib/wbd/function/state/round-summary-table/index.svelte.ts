import type { RecipeRoundSummaryTable } from '$stylist/wbd/interface/recipe/round-summary-table';
import type { StructWbdRoundSummary } from '$stylist/wbd/type/struct/round-summary';

export function createRoundSummaryTableState(props: RecipeRoundSummaryTable) {
	const rows = $derived(
		props.tasks.map((task) => ({
			task,
			summary:
				props.summaries.find((summary) => summary.taskId === task.id) ??
				({
					taskId: task.id,
					min: 0,
					max: 0,
					mean: 0,
					median: 0,
					stdDev: 0
				} as StructWbdRoundSummary)
		}))
	);
	const className = $derived(props.class ?? '');

	return {
		get rows() {
			return rows;
		},
		get className() {
			return className;
		}
	};
}

export default createRoundSummaryTableState;
