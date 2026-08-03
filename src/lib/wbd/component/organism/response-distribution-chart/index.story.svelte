<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdResponseDistributionBin } from '$stylist/wbd/type/struct/response-distribution-bin';
	import ResponseDistributionChart from './index.svelte';

	const controls: SlotStory[] = [{ name: 'title', type: 'text', defaultValue: 'Round 2 responses' }];
	const bins: StructWbdResponseDistributionBin[] = [
		{ label: '20-30', count: 1 },
		{ label: '30-40', count: 3 },
		{ label: '40-50', count: 5 },
		{ label: '50-60', count: 2 },
		{ label: '60-70', count: 1 }
	];
</script>

<Story
	title="Response Distribution Chart"
	component={ResponseDistributionChart}
	category="Organisms/Wbd"
	description="Histogram of anonymous estimates for a question."
	{controls}
>
	{#snippet children(values: any)}
		<ResponseDistributionChart {bins} title={values.title} />
	{/snippet}
</Story>
