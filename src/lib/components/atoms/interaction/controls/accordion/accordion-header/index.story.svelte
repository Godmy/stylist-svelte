<script lang="ts">
	import ComplexAccordion from '$stylist/components/molecules/interaction/controls/accordion/accordion-complex/index.svelte';
	import AccordionItem from '../accordion-item/index.svelte';
	import AccordionHeader from './index.svelte';
	import AccordionPanel from '../accordion-panel/index.svelte';

	let multiple: boolean = false;
	let openValues: string[] = [];

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
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Accordion Components</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Accordion</h2>
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
			<h2 class="text-md mb-2 font-semibold">Single Selection (Default)</h2>
			<ComplexAccordion>
				{#snippet content()}
					<AccordionItem value="single-1">
						<AccordionHeader value="single-1">Single Accordion 1</AccordionHeader>
						<AccordionPanel value="single-1">{panelContent1}</AccordionPanel>
					</AccordionItem>

					<AccordionItem value="single-2">
						<AccordionHeader value="single-2">Single Accordion 2</AccordionHeader>
						<AccordionPanel value="single-2">{panelContent2}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Multiple Selection</h2>
			<ComplexAccordion multiple={true}>
				{#snippet content()}
					<AccordionItem value="multi-1">
						<AccordionHeader value="multi-1">Multi Accordion 1</AccordionHeader>
						<AccordionPanel value="multi-1">{panelContent1}</AccordionPanel>
					</AccordionItem>

					<AccordionItem value="multi-2">
						<AccordionHeader value="multi-2">Multi Accordion 2</AccordionHeader>
						<AccordionPanel value="multi-2">{panelContent2}</AccordionPanel>
					</AccordionItem>
				{/snippet}
			</ComplexAccordion>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default Accordion</h2>
		<ComplexAccordion>
			{#snippet content()}
				<AccordionItem value="default-1">
					<AccordionHeader value="default-1">Default Accordion Header</AccordionHeader>
					<AccordionPanel value="default-1">{panelContent1}</AccordionPanel>
				</AccordionItem>
			{/snippet}
		</ComplexAccordion>
	</div>
</div>
