<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import VerticalBarsChart from './index.svelte';

	const items = [
		{ id: 'r1', label: 'R1', valueLabel: 12, heightPercent: 100 },
		{ id: 'r2', label: 'R2', valueLabel: 8, heightPercent: 67 },
		{ id: 'r3', label: 'R3', valueLabel: 5, heightPercent: 42 }
	];
</script>

<Story
	id="molecules-vertical-bars-chart"
	title="Molecules / Chart / VerticalBarsChart"
	component={VerticalBarsChart}
	category="Molecules/Chart"
	description="Generic compact vertical bars renderer for domain-specific chart wrappers."
>
	{#snippet children()}
		<VerticalBarsChart text="Distribution" {items} />
	{/snippet}
</Story>
