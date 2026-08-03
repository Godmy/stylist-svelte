<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdTrendPoint } from '$stylist/wbd/type/struct/trend-point';
	import MedianTrendChart from './index.svelte';

	const controls: SlotStory[] = [{ name: 'title', type: 'text', defaultValue: 'Recoverable base median' }];
	const points: StructWbdTrendPoint[] = [
		{ roundNumber: 1, value: 54, label: 'R1' },
		{ roundNumber: 2, value: 47, label: 'R2' },
		{ roundNumber: 3, value: 44, label: 'R3' }
	];
</script>

<Story
	title="Median Trend Chart"
	component={MedianTrendChart}
	category="Organisms/Wbd"
	description="Round-by-round median trend chart."
	{controls}
>
	{#snippet children(values: any)}
		<MedianTrendChart {points} title={values.title} />
	{/snippet}
</Story>
