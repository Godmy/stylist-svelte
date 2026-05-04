<script lang="ts">
	import type { Idef0Model } from '$stylist/science';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Idef0Diagram from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'diagramTitle', type: 'text', defaultValue: 'IDEF0 A-0 Context' },
		{ name: 'functionTitle', type: 'text', defaultValue: 'A0 Process Customer Order' }
	];

	const model: Idef0Model = {
		title: 'A0 Process Customer Order',
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
	};
</script>

<Story {controls} component={Idef0Diagram} title="IDEF0Diagram" description="IDEF0 black-box diagram for inputs and outputs.">
	{#snippet children(values: any)}
		<Idef0Diagram
			title={values.diagramTitle}
			model={{
				...model,
				title: values.functionTitle
			}}
		/>
	{/snippet}
</Story>



