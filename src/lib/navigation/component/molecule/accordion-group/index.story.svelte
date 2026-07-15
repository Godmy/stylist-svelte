<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AccordionGroup from './index.svelte';
	import AccordionLayout from '$stylist/navigation/component/atom/accordion-layout/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'defaultValues', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={AccordionGroup}
	title="AccordionGroup"
	category="Molecules/Interaction/Controls/Accordion"
	description="Каждый AccordionLayout открывается и закрывается независимо"
>
	{#snippet children(values: any)}
		<div style="max-width: 480px;">
			<AccordionGroup>
				{#snippet children()}
					<AccordionLayout value="section-1" title="Getting Started">
						{#snippet children()}
							<p>Install the package and import the components you need.</p>
						{/snippet}
					</AccordionLayout>
					<AccordionLayout value="section-2" title="Configuration">
						{#snippet children()}
							<p>Configure via CSS custom properties and slot props.</p>
						{/snippet}
					</AccordionLayout>
					<AccordionLayout value="section-3" title="Advanced Usage">
						{#snippet children()}
							<p>Nest AccordionLayout inside any context provider.</p>
						{/snippet}
					</AccordionLayout>
				{/snippet}
			</AccordionGroup>
		</div>
	{/snippet}
</Story>
