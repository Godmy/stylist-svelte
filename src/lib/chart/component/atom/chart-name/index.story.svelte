<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ChartName from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'f(x) = x^2 + 2x + 1' },
		{ name: 'color', type: 'text', defaultValue: '#0f172a' }
	];
</script>

<Story
	{controls}
	component={ChartName}
	title="ChartName Component"
	description="Chart title/series name text node"
	tags={['chart', 'name', 'label']}
>
	{#snippet children(values: any)}
		<svg width="460" height="70" class="rounded border border-[--color-border-primary] bg-[--color-background-primary]">
			<ChartName text={values.text} x={16} y={30} color={values.color} />
		</svg>
	{/snippet}
</Story>



