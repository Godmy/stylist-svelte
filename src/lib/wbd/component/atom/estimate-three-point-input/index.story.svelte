<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import EstimateThreePointInput from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'optimistic', type: 'number', defaultValue: 3, min: 0, max: 40 },
		{ name: 'mostLikely', type: 'number', defaultValue: 5, min: 0, max: 40 },
		{ name: 'pessimistic', type: 'number', defaultValue: 9, min: 0, max: 40 },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={EstimateThreePointInput}
	title="EstimateThreePointInput"
	category="Atoms/Wbd"
	description="Optimistic / most-likely / pessimistic estimate entry for one task."
>
	{#snippet children(values: any)}
		<EstimateThreePointInput
			value={{
				optimistic: values.optimistic as number,
				mostLikely: values.mostLikely as number,
				pessimistic: values.pessimistic as number
			}}
			disabled={values.disabled as boolean}
		/>
	{/snippet}
</Story>
