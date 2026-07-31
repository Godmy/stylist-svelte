<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import FacilitatorControlPanel from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'collecting',
			options: ['kickoff', 'collecting', 'discussing', 'closed', 'finalized']
		},
		{ name: 'pendingCount', type: 'number', defaultValue: 1, min: 0, max: 5 },
		{ name: 'totalCount', type: 'number', defaultValue: 5, min: 0, max: 5 }
	];
</script>

<Story
	{controls}
	component={FacilitatorControlPanel}
	title="FacilitatorControlPanel"
	category="Organisms/Wbd"
	description="Coordinator-only controls to open, close, reveal, advance, and finalize a round."
>
	{#snippet children(values: any)}
		<FacilitatorControlPanel
			round={{ id: 'r1', index: 1, status: values.status }}
			pendingCount={values.pendingCount as number}
			totalCount={values.totalCount as number}
		/>
	{/snippet}
</Story>
