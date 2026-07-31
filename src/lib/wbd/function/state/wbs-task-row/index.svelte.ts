import type { RecipeWbsTaskRow } from '$stylist/wbd/interface/recipe/wbs-task-row';

export function createWbsTaskRowState(props: RecipeWbsTaskRow) {
	const className = $derived(props.class ?? '');
	const indentStyle = $derived(`padding-left: ${(props.depth ?? 0) * 1.25}rem;`);

	function toggleExpanded(): void {
		props.onToggleExpand?.(props.task.id);
	}

	function selectTask(): void {
		props.onSelectTask?.(props.task.id);
	}

	return {
		get task() {
			return props.task;
		},
		get rollup() {
			return props.rollup;
		},
		get hasChildren() {
			return props.hasChildren ?? false;
		},
		get expanded() {
			return props.expanded ?? true;
		},
		get indentStyle() {
			return indentStyle;
		},
		get className() {
			return className;
		},
		toggleExpanded,
		selectTask
	};
}

export default createWbsTaskRowState;
