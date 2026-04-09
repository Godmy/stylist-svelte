<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Idef0BlackBox from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'A0 Fulfill Order' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Black Box' }
	];

	const inputs = [
		{ id: 'i1', label: 'Order' },
		{ id: 'i2', label: 'Customer data' },
		{ id: 'i3', label: 'Pricing rules' }
	];

	const outputs = [
		{ id: 'o1', label: 'Shipment' },
		{ id: 'o2', label: 'Invoice' }
	];
</script>

<Story {controls} component={Idef0BlackBox} title="IDEF0BlackBox" description="Complete IDEF0 black-box molecule.">
	{#snippet children(values: any)}
		<svg width="920" height="420">
			<Idef0BlackBox title={values.title} subtitle={values.subtitle} {inputs} {outputs} width={920} height={420} />
		</svg>
	{/snippet}
</Story>



