<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from '../accordion-header/index.svelte';
	import AccordionPanel from './index.svelte';

	let value: string = 'panel-1';
	let customClass: string = '';

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: 'panel-1',
			description: 'Unique identifier for the accordion panel'
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

	// Custom content for demonstration
	const customPanelContent = `<div>
    <h3 class="font-semibold mb-2">Custom Panel Content</h3>
    <p>This accordion panel has custom content with specific styling.</p>
    <div class="mt-2 p-3 bg-blue-100 rounded">
      <p>Special content area with custom styling</p>
    </div>
  </div>`;

	let multiple: boolean = false;
	let openValues: string[] = [];

	function handleValueChange(values: string[]) {
		console.log('Accordion values changed:', values);
		openValues = values;
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Accordion Panel Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Accordion Panel</h2>
		<div class="flex flex-col gap-4">
			<ComplexAccordion {multiple} value={openValues} onValueChange={handleValueChange}>
				{#snippet content()}
					<AccordionItem {value}>
						<AccordionHeader {value}>Accordion Header 1</AccordionHeader>
						<AccordionPanel {value} class={customClass}>{panelContent1}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="accordion-panel-value" class="mb-1 block text-sm">Panel Value:</label>
				<input
					id="accordion-panel-value"
					type="text"
					bind:value={value}
					class="rounded border p-1"
				/>
			</div>

			<div>
				<label for="accordion-panel-class" class="mb-1 block text-sm">Custom Class:</label>
				<input
					id="accordion-panel-class"
					type="text"
					bind:value={customClass}
					class="rounded border p-1"
					placeholder="Add custom CSS class"
				/>
			</div>

			<div class="flex items-end">
				<label for="accordion-panel-multiple" class="flex items-center gap-1">
					<input id="accordion-panel-multiple" type="checkbox" bind:checked={multiple} />
					Multiple Selection
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Accordion Panel with Custom Content</h2>
			<ComplexAccordion>
				{#snippet content()}
					<AccordionItem value="custom-content">
						<AccordionHeader value="custom-content">Custom Content Panel</AccordionHeader>
						<AccordionPanel value="custom-content">{customPanelContent}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Accordion Panel with Custom Styling</h2>
			<ComplexAccordion>
				{#snippet content()}
					<AccordionItem value="styled-panel">
						<AccordionHeader value="styled-panel">Styled Panel</AccordionHeader>
						<AccordionPanel value="styled-panel" class="bg-yellow-50"
							>{panelContent1}</AccordionPanel
						>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default Accordion Panel</h2>
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value="default-panel">
					<AccordionHeader value="default-panel">Default Accordion Panel</AccordionHeader>
					<AccordionPanel value="default-panel">{panelContent1}</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	</div>
</div>




