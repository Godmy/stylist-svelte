import type { RecipeWbsTree } from '$stylist/wbd/interface/recipe/wbs-tree';
import type { StructWbdTask } from '$stylist/wbd/type/struct/task';

export function createWbsTreeState(props: RecipeWbsTree) {
	const className = $derived(props.class ?? '');
	let expandedIds = $state(new Set<string>(props.tasks.map((task) => task.id)));

	function childrenOf(taskId: string | null): StructWbdTask[] {
		return props.tasks.filter((task) => (task.parentId ?? null) === taskId);
	}

	const rootTasks = $derived(childrenOf(null));

	function isExpanded(taskId: string): boolean {
		return expandedIds.has(taskId);
	}

	function toggleExpand(taskId: string): void {
		const next = new Set(expandedIds);
		if (next.has(taskId)) {
			next.delete(taskId);
		} else {
			next.add(taskId);
		}
		expandedIds = next;
	}

	function selectTask(taskId: string): void {
		props.onSelectTask?.(taskId);
	}

	return {
		get tasks() {
			return props.tasks;
		},
		get rootTasks() {
			return rootTasks;
		},
		get rollups() {
			return props.rollups ?? {};
		},
		get className() {
			return className;
		},
		childrenOf,
		isExpanded,
		toggleExpand,
		selectTask
	};
}

export default createWbsTreeState;
