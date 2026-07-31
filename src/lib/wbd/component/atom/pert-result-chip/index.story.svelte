<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PertResultChip from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'expected', type: 'number', defaultValue: 5.7, min: 0, max: 100, step: 0.1 },
		{ name: 'stdDev', type: 'number', defaultValue: 1, min: 0, max: 20, step: 0.1 },
		{ name: 'unit', type: 'text', defaultValue: 'd' }
	];
</script>

<Story
	{controls}
	component={PertResultChip}
	title="PertResultChip"
	category="Atoms/Wbd"
	description="Displays the PERT expected value and standard deviation for an estimate."
>
	{#snippet children(values: any)}
		<PertResultChip
			result={{
				expected: values.expected as number,
				stdDev: values.stdDev as number,
				optimistic: 0,
				pessimistic: 0
			}}
			unit={values.unit as string}
		/>
	{/snippet}
</Story>
