<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import WbsTaskRow from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'label', type: 'text', defaultValue: 'Checkout flow' },
		{ name: 'depth', type: 'number', defaultValue: 0, min: 0, max: 4 },
		{ name: 'hasChildren', type: 'boolean', defaultValue: true },
		{ name: 'expanded', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={WbsTaskRow}
	title="WbsTaskRow"
	category="Molecules/Wbd"
	description="One row of the work-breakdown-structure tree with its rollup estimate."
>
	{#snippet children(values: any)}
		<WbsTaskRow
			task={{ id: 't1', label: values.label as string }}
			depth={values.depth as number}
			hasChildren={values.hasChildren as boolean}
			expanded={values.expanded as boolean}
			rollup={{ expected: 5.7, stdDev: 1, optimistic: 3, pessimistic: 9 }}
		/>
	{/snippet}
</Story>
