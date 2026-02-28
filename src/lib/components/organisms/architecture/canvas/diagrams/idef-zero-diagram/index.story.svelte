<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Idef0Diagram from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'diagramTitle', type: 'text', defaultValue: 'IDEF0 A-0 Context' },
		{ name: 'functionTitle', type: 'text', defaultValue: 'A0 Process Customer Order' },
		{ name: 'width', type: 'number', defaultValue: 980, min: 700, max: 1400, step: 20 },
		{ name: 'height', type: 'number', defaultValue: 460, min: 320, max: 760, step: 20 }
	];
</script>

<Story {controls} component={Idef0Diagram} title="IDEF0Diagram" description="IDEF0 black-box diagram for inputs and outputs.">
	{#snippet children(values: any)}
		<Idef0Diagram
			title={values.diagramTitle}
			width={values.width}
			height={values.height}
			model={{
				id: 'a0',
				title: values.functionTitle,
				subtitle: 'Black Box Function',
				inputs: [
					{ id: 'i1', label: 'Customer request' },
					{ id: 'i2', label: 'Order items' },
					{ id: 'i3', label: 'Payment data' }
				],
				outputs: [
					{ id: 'o1', label: 'Order confirmation' },
					{ id: 'o2', label: 'Invoice + receipt' },
					{ id: 'o3', label: 'Shipping task' }
				]
			}}
		/>
	{/snippet}
</Story>
