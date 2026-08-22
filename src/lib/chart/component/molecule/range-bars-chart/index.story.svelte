<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import RangeBarsChart from './index.svelte';

	const items = [
		{
			id: 'a',
			label: 'Integration',
			startPercent: 10,
			markerPercent: 42,
			endPercent: 75,
			valueLabel: '10-42-75d'
		},
		{
			id: 'b',
			label: 'Migration',
			startPercent: 25,
			markerPercent: 54,
			endPercent: 90,
			valueLabel: '25-54-90d'
		}
	];
</script>

<Story
	id="molecules-range-bars-chart"
	title="Molecules / Chart / RangeBarsChart"
	component={RangeBarsChart}
	category="Molecules/Chart"
	description="Generic range chart renderer with start, marker, and end positions."
>
	{#snippet children()}
		<RangeBarsChart {items} scaleMinLabel="0d" scaleMaxLabel="100d" />
	{/snippet}
</Story>
