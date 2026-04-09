<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import ComplexAccordion from '$stylist/control/svelte/molecule/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from '../accordion-header/index.svelte';
	import AccordionPanel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'text', defaultValue: 'panel-1' },
		{ name: 'panel', type: 'text', defaultValue: 'Panel body content' }
	];
</script>

<Story
	{controls}
	component={AccordionPanel}
	title="AccordionPanel"
	category="Atoms/Interaction/Controls/Accordion"
	description="Accordion content panel"
>
	{#snippet children(values: any)}
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value={values.value as string}>
					<AccordionHeader value={values.value as string}>Header</AccordionHeader>
					<AccordionPanel value={values.value as string}>{values.panel as string}</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	{/snippet}
</Story>



