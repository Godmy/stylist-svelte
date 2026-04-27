<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ChartLegend from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'mode', type: 'select', options: ['single', 'multi'], defaultValue: 'multi' }
	];

	const single = [{ id: 'f1', name: 'f(x) = x^2', color: '#2563eb' }];
	const multi = [
		{ id: 'f1', name: 'f(x) = x^2', color: '#2563eb' },
		{ id: 'f2', name: 'g(x) = sin(x)', color: '#16a34a' },
		{ id: 'f3', name: 'h(x) = 0.5x + 2', color: '#ea580c' }
	];
</script>

<Story
	{controls}
	component={ChartLegend}
	title="ChartLegend Component"
	description="Legend for chart function series"
	tags={['chart', 'legend']}
>
	{#snippet children(values: any)}
		<ChartLegend items={values.mode === 'single' ? single : multi} />
	{/snippet}
</Story>



