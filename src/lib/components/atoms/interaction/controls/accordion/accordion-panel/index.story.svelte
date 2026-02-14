<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from '../accordion-header/index.svelte';
	import AccordionPanel from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = []
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: ControlConfig[];
	}>();

	let multiple = $state<boolean>(false);
	let openValues = $state<string[]>([]);

	function handleValueChange(values: string[]) {
		console.log('Accordion values changed:', values);
		openValues = values;
	}

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
</script>

<Story {id} {title} {description} component={AccordionPanel} category="Atoms" {controls}>
	{#snippet children(props: any)}
		<div class="p-4">
			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive AccordionPanel</h2>
				<div class="flex flex-col gap-4">
					<ComplexAccordion {multiple} value={openValues} onValueChange={handleValueChange}>
						{#snippet content()}
							<AccordionItem value="item-1">
								<AccordionHeader value="item-1">Accordion Header 1</AccordionHeader>
								<AccordionPanel value="item-1">{panelContent1}</AccordionPanel>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionHeader value="item-2">Accordion Header 2</AccordionHeader>
								<AccordionPanel value="item-2">{panelContent2}</AccordionPanel>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionHeader value="item-3">Accordion Header 3</AccordionHeader>
								<AccordionPanel value="item-3">{panelContent3}</AccordionPanel>
							</AccordionItem>
						{/snippet}
					</ComplexAccordion>
				</div>

				<div class="mt-4 flex flex-wrap gap-2">
					<div class="flex items-end">
						<label for="accordion-multiple" class="flex items-center gap-1">
							<input id="accordion-multiple" type="checkbox" bind:checked={multiple} />
							Multiple Selection
						</label>
					</div>
				</div>
			</div>

			<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="rounded border p-4">
					<h2 class="text-md mb-2 font-semibold">AccordionPanel with Custom Content</h2>
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
					<h2 class="text-md mb-2 font-semibold">AccordionPanel with Custom Styling</h2>
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
				<h2 class="text-md mb-2 font-semibold">Default AccordionPanel</h2>
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
	{/snippet}
</Story>

