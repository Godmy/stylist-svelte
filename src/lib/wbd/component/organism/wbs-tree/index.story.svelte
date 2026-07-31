<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import WbsTree from './index.svelte';

	const controls: SlotStory[] = [];

	const tasks = [
		{ id: 't1', label: 'Checkout redesign', parentId: null },
		{ id: 't2', label: 'Payment gateway integration', parentId: 't1' },
		{ id: 't3', label: 'Order confirmation email', parentId: 't1' },
		{ id: 't4', label: 'Admin refund panel', parentId: null }
	];

	const rollups = {
		t1: { expected: 12.5, stdDev: 2.1, optimistic: 8, pessimistic: 18 },
		t2: { expected: 8, stdDev: 1.5, optimistic: 5, pessimistic: 12 },
		t3: { expected: 2, stdDev: 0.5, optimistic: 1, pessimistic: 3 },
		t4: { expected: 4, stdDev: 1, optimistic: 2, pessimistic: 6 }
	};
</script>

<Story
	{controls}
	component={WbsTree}
	title="WbsTree"
	category="Organisms/Wbd"
	description="Work-breakdown-structure tree with rolled-up PERT estimates per node."
>
	{#snippet children(values: any)}
		<WbsTree {tasks} {rollups} />
	{/snippet}
</Story>
