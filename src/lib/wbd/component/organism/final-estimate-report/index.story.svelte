<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import FinalEstimateReport from './index.svelte';

	const controls: SlotStory[] = [];

	const tasks = [
		{ id: 't1', label: 'Checkout flow' },
		{ id: 't2', label: 'Payment gateway integration' },
		{ id: 't3', label: 'Order confirmation email' }
	];
	const results = {
		t1: { expected: 5.7, stdDev: 1, optimistic: 3, pessimistic: 9 },
		t2: { expected: 8, stdDev: 1.5, optimistic: 5, pessimistic: 12 },
		t3: { expected: 2, stdDev: 0.5, optimistic: 1, pessimistic: 3 }
	};
</script>

<Story
	{controls}
	component={FinalEstimateReport}
	title="FinalEstimateReport"
	category="Organisms/Wbd"
	description="Final consensus estimate per task with a rolled-up total."
>
	{#snippet children(values: any)}
		<FinalEstimateReport {tasks} {results} />
	{/snippet}
</Story>
