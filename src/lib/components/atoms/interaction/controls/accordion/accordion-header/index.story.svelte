<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from './index.svelte';
	import AccordionPanel from '../accordion-panel/index.svelte';

	const controls: ControlConfig[] = [
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
