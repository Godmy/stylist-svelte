<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Idef0FunctionBox from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'A0 Process Order' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Black Box Function' }
	];
</script>

<Story {controls} component={Idef0FunctionBox} title="IDEF0FunctionBox" description="IDEF0 function block atom.">
	{#snippet children(values: any)}
		<svg width="420" height="250">
			<Idef0FunctionBox title={values.title} subtitle={values.subtitle} x={50} y={20} width={320} height={200} />
		</svg>
	{/snippet}
</Story>
