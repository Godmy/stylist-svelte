<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdConfidenceDistributionItem } from '$stylist/wbd/type/struct/confidence-distribution-item';
	import ConfidenceDistributionChart from './index.svelte';

	const controls: SlotStory[] = [];
	const items: StructWbdConfidenceDistributionItem[] = [
		{ confidence: 1, count: 0 },
		{ confidence: 2, count: 1 },
		{ confidence: 3, count: 3 },
		{ confidence: 4, count: 5 },
		{ confidence: 5, count: 2 }
	];
</script>

<Story
	title="Confidence Distribution Chart"
	component={ConfidenceDistributionChart}
	category="Organisms/Wbd"
	description="Histogram of expert confidence values."
	{controls}
>
	{#snippet children()}
		<ConfidenceDistributionChart {items} />
	{/snippet}
</Story>
