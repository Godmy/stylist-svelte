<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import NodeDot from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'number', defaultValue: 16 },
		{ name: 'accent', type: 'color', defaultValue: '#3498db' },
		{ name: 'opacity', type: 'number', defaultValue: 1 }
	];
</script>

<Story {controls} component={NodeDot} title="Node Dot" category="Atoms/Typography/Indicators/Node Dot" description="Simple dot indicator component">
	{#snippet children(values: any)}
		<NodeDot size={values.size as number} accent={values.accent as string} opacity={values.opacity as number} />
	{/snippet}
</Story>
