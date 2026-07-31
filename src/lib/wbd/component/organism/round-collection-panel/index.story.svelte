<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RoundCollectionPanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'taskCount', type: 'number', defaultValue: 3, min: 1, max: 5 }
	];

	const allTasks = [
		{ id: 't1', label: 'Checkout flow' },
		{ id: 't2', label: 'Payment gateway integration' },
		{ id: 't3', label: 'Order confirmation email' },
		{ id: 't4', label: 'Admin refund panel' },
		{ id: 't5', label: 'Inventory sync job' }
	];
</script>

<Story
	{controls}
	component={RoundCollectionPanel}
	title="RoundCollectionPanel"
	category="Organisms/Wbd"
	description="Form where a single estimator submits three-point estimates for every task in the round."
>
	{#snippet children(values: any)}
		<RoundCollectionPanel tasks={allTasks.slice(0, values.taskCount as number)} />
	{/snippet}
</Story>
