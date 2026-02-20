<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from './index.svelte';
	import AccordionHeader from '../accordion-header/index.svelte';
	import AccordionPanel from '../accordion-panel/index.svelte';

	let value: string = 'item-1';
	let customClass: string = '';

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: 'item-1',
			description: 'Unique identifier for the accordion item'
		}
	];

	// Define sample content for the accordion panels
	const panelContent1 = `<div>
    <p>This is the content of the first accordion panel.</p>
    <p>You can put any content here - text, images, forms, etc.</p>
  </div>`;

	const panelContent2 = `<div>
    <p>This is the content of the second accordion panel.</p>
    <ul class="list-disc pl-5 mt-2">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>`;

	const panelContent3 = `<div>
    <p>This is the content of the third accordion panel.</p>
    <p>It can contain complex content like forms:</p>
    <form class="mt-2">
      <div class="mb-2">
        <label class="block text-sm font-medium mb-1" for="name">Name:</label>
        <input
          id="name"
          type="text"
          class="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div class="mb-2">
        <label class="block text-sm font-medium mb-1" for="email">Email:</label>
        <input
          id="email"
          type="email"
          class="w-full px-3 py-2 border rounded-md"
        />
      </div>
    </form>
  </div>`;

	let multiple: boolean = false;
	let openValues: string[] = [];

	function handleValueChange(values: string[]) {
		console.log('Accordion values changed:', values);
		openValues = values;
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Accordion Item Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Accordion Item</h2>
		<div class="flex flex-col gap-4">
			<ComplexAccordion {multiple} value={openValues} onValueChange={handleValueChange}>
				{#snippet content()}
					<AccordionItem {value} class={customClass}>
						<AccordionHeader {value}>Accordion Item 1</AccordionHeader>
						<AccordionPanel {value}>{panelContent1}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="accordion-item-value" class="mb-1 block text-sm">Item Value:</label>
				<input
					id="accordion-item-value"
					type="text"
					bind:value={value}
					class="rounded border p-1"
				/>
			</div>

			<div>
				<label for="accordion-item-class" class="mb-1 block text-sm">Custom Class:</label>
				<input
					id="accordion-item-class"
					type="text"
					bind:value={customClass}
					class="rounded border p-1"
					placeholder="Add custom CSS class"
				/>
			</div>

			<div class="flex items-end">
				<label for="accordion-item-multiple" class="flex items-center gap-1">
					<input id="accordion-item-multiple" type="checkbox" bind:checked={multiple} />
					Multiple Selection
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Accordion Item with Different Values</h2>
			<ComplexAccordion>
				{#snippet content()}
					<AccordionItem value="different-1">
						<AccordionHeader value="different-1">Different Value 1</AccordionHeader>
						<AccordionPanel value="different-1">{panelContent1}</AccordionPanel>
					</AccordionItem>

					<AccordionItem value="different-2">
						<AccordionHeader value="different-2">Different Value 2</AccordionHeader>
						<AccordionPanel value="different-2">{panelContent2}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Accordion Item with Custom Styling</h2>
			<ComplexAccordion>
				{#snippet content()}
					<AccordionItem value="custom-1" class="rounded-lg border-blue-300 bg-blue-50">
						<AccordionHeader value="custom-1">Custom Styled Item</AccordionHeader>
						<AccordionPanel value="custom-1">{panelContent1}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default Accordion Item</h2>
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value="default-item">
					<AccordionHeader value="default-item">Default Accordion Item</AccordionHeader>
					<AccordionPanel value="default-item">{panelContent1}</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	</div>
</div>




