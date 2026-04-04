<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import AccordionHeaderDouble from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'open', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'label', type: 'text', defaultValue: 'Toggle details' }
	];
</script>

<Story
	{controls}
	component={AccordionHeaderDouble}
	title="AccordionHeaderDouble"
	category="Atoms/Interaction/Controls/Accordion"
	description="Standalone accordion trigger header"
>
	{#snippet children(values: any)}
		<AccordionHeaderDouble
			value="sample"
			open={values.open as boolean}
			disabled={values.disabled as boolean}
		>
			{values.label as string}
		</AccordionHeaderDouble>
	{/snippet}
</Story>



