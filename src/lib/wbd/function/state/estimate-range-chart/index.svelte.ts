import type { RecipeEstimateRangeChart } from '$stylist/wbd/interface/recipe/estimate-range-chart';
import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export function createEstimateRangeChartState(props: RecipeEstimateRangeChart) {
	const rows = $derived(
		props.tasks
			.map((task) => ({ task, result: props.results[task.id] }))
			.filter((row): row is { task: StructWbdTask; result: StructWbdPertResult } => row.result !== undefined)
	);

	const scaleMin = $derived(Math.min(0, ...rows.map((row) => row.result.optimistic)));
	const scaleMax = $derived(Math.max(1, ...rows.map((row) => row.result.pessimistic)));
	const span = $derived(Math.max(scaleMax - scaleMin, 1));

	function percent(value: number): number {
		return ((value - scaleMin) / span) * 100;
	}

	const bars = $derived(
		[...rows]
			.sort(
				(a, b) =>
					b.result.pessimistic - b.result.optimistic - (a.result.pessimistic - a.result.optimistic)
			)
			.map((row) => ({
				taskId: row.task.id,
				label: row.task.label,
				optimisticPercent: percent(row.result.optimistic),
				expectedPercent: percent(row.result.expected),
				pessimisticPercent: percent(row.result.pessimistic),
				expectedLabel: row.result.expected.toFixed(1),
				optimisticLabel: row.result.optimistic.toFixed(1),
				pessimisticLabel: row.result.pessimistic.toFixed(1)
			}))
	);

	const className = $derived(props.class ?? '');
	const unit = $derived(props.unit ?? '');

	function selectTask(taskId: string): void {
		props.onSelectTask?.(taskId);
	}

	return {
		get bars() {
			return bars;
		},
		get scaleMin() {
			return scaleMin;
		},
		get scaleMax() {
			return scaleMax;
		},
		get unit() {
			return unit;
		},
		get className() {
			return className;
		},
		selectTask
	};
}

export default createEstimateRangeChartState;
