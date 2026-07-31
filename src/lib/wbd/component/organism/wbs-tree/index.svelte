<script lang="ts">
	import createWbsTreeState from '$stylist/wbd/function/state/wbs-tree/index.svelte';
	import type { RecipeWbsTree } from '$stylist/wbd/interface/recipe/wbs-tree';
	import WbsTaskRow from '$stylist/wbd/component/molecule/wbs-task-row/index.svelte';
	import type { StructWbdTask } from '$stylist/wbd/type/struct/task';

	let props: RecipeWbsTree = $props();
	const state = createWbsTreeState(props);
</script>

{#snippet renderNode(task: StructWbdTask, depth: number)}
	{@const children = state.childrenOf(task.id)}
	<WbsTaskRow
		{task}
		{depth}
		hasChildren={children.length > 0}
		expanded={state.isExpanded(task.id)}
		rollup={state.rollups[task.id]}
		onSelectTask={state.selectTask}
		onToggleExpand={state.toggleExpand}
	/>
	{#if state.isExpanded(task.id)}
		{#each children as child (child.id)}
			{@render renderNode(child, depth + 1)}
		{/each}
	{/if}
{/snippet}

<div class="wbd-wbs-tree {state.className}">
	{#each state.rootTasks as task (task.id)}
		{@render renderNode(task, 0)}
	{/each}
</div>

<style>
	.wbd-wbs-tree {
		display: flex;
		flex-direction: column;
	}
</style>
