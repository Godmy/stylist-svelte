import type { RecipeFinalEstimateReport } from '$stylist/wbd/interface/recipe/final-estimate-report';

export function createFinalEstimateReportState(props: RecipeFinalEstimateReport) {
	const rows = $derived(
		props.tasks.map((task) => ({
			task,
			result: props.results[task.id]
		}))
	);
	const total = $derived(
		rows.reduce(
			(sum, row) => ({
				expected: sum.expected + (row.result?.expected ?? 0),
				stdDev: Math.sqrt(sum.stdDev ** 2 + (row.result?.stdDev ?? 0) ** 2)
			}),
			{ expected: 0, stdDev: 0 }
		)
	);
	const className = $derived(props.class ?? '');

	return {
		get rows() {
			return rows;
		},
		get total() {
			return total;
		},
		get className() {
			return className;
		}
	};
}

export default createFinalEstimateReportState;
