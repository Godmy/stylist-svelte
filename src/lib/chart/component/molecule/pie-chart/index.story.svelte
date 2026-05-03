<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import PieChart from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'width', type: 'number', defaultValue: 260, min: 180, max: 420, step: 10 },
		{ name: 'height', type: 'number', defaultValue: 260, min: 180, max: 420, step: 10 }
	];

	const data = [
		{ label: 'Desktop', value: 52 },
		{ label: 'Mobile', value: 34 },
		{ label: 'Tablet', value: 14 }
	];
</script>

<Story component={PieChart} title="PieChart" description="Simple pie chart with legend list." {controls}>
	{#snippet children(values: any)}
		<PieChart data={data} width={values.width} height={values.height} />
	{/snippet}
</Story>



