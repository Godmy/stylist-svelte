<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from './index.svelte';
	import AccordionHeader from '../accordion-header/index.svelte';
	import AccordionPanel from '../accordion-panel/index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'value', type: 'text', defaultValue: 'item-1' },
		{ name: 'label', type: 'text', defaultValue: 'Accordion item' },
		{ name: 'panel', type: 'text', defaultValue: 'Accordion panel content' }
	];
</script>

<Story
	{controls}
	component={AccordionItem}
	title="AccordionItem"
	category="Atoms/Interaction/Controls/Accordion"
	description="Accordion item container"
>
	{#snippet children(values: any)}
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value={values.value as string}>
					<AccordionHeader value={values.value as string}>{values.label as string}</AccordionHeader>
					<AccordionPanel value={values.value as string}>{values.panel as string}</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	{/snippet}
</Story>
