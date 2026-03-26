<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import ComplexAccordion from '$stylist/interaction/molecule/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from './index.svelte';
	import AccordionPanel from '../accordion-panel/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'header', type: 'text', defaultValue: 'Accordion header' },
		{ name: 'value', type: 'text', defaultValue: 'item-1' }
	];
</script>

<Story
	{controls}
	component={AccordionHeader}
	title="AccordionHeader"
	category="Atoms/Interaction/Controls/Accordion"
	description="Header trigger for accordion section"
>
	{#snippet children(values: any)}
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value={values.value as string}>
					<AccordionHeader value={values.value as string}>{values.header as string}</AccordionHeader>
					<AccordionPanel value={values.value as string}>Panel content</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	{/snippet}
</Story>



