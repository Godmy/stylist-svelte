<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import EstimateInputRow from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'label', type: 'text', defaultValue: 'Implement checkout flow' },
		{ name: 'submitted', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={EstimateInputRow}
	title="EstimateInputRow"
	category="Molecules/Wbd"
	description="One WBS task paired with a three-point estimate input."
>
	{#snippet children(values: any)}
		<EstimateInputRow
			task={{ id: 't1', label: values.label as string, description: 'Backend + UI' }}
			submitted={values.submitted as boolean}
		/>
	{/snippet}
</Story>
