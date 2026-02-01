<script lang="ts">
  import ComplexAccordion from './ComplexAccordion.svelte';
  import { AccordionItem } from '../accordion-item/index.svelte';
  import { AccordionHeader } from '../accordion-header/index.svelte';
  import { AccordionPanel } from '../accordion-panel/index.svelte';

  let multiple: boolean = true;
  let defaultValue: string[] = [];
  let currentValue: string[] = [];

  function handleValueChange(values: string[]) {
    console.log('Accordion values changed:', values);
    currentValue = values;
  }

  // Define sample content for the accordion panels
  const panelContent1 = () => `<div><p>Content for panel 1</p></div>`;
  const panelContent2 = () => `<div><p>Content for panel 2</p></div>`;
  const panelContent3 = () => `<div><p>Content for panel 3</p></div>`;
  const panelContent4 = () => `<div><p>Content for panel 4</p></div>`;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ComplexAccordion Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ComplexAccordion</h2>
    <div class="flex flex-col gap-4">
      <ComplexAccordion
        {multiple}
        {defaultValue}
        value={currentValue}
        onValueChange={handleValueChange}
      >
        {#snippet content()}
          <AccordionItem value="item-1">
            <AccordionHeader value="item-1">
              Accordion Item 1
            </AccordionHeader>
            <AccordionPanel value="item-1" content={panelContent1} />
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionHeader value="item-2">
              Accordion Item 2
            </AccordionHeader>
            <AccordionPanel value="item-2" content={panelContent2} />
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionHeader value="item-3">
              Accordion Item 3
            </AccordionHeader>
            <AccordionPanel value="item-3" content={panelContent3} />
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

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Single Selection Accordion</h2>
      <ComplexAccordion
        multiple={false}
        onValueChange={(values) => console.log('Single selection:', values)}
      >
        {#snippet content()}
          <AccordionItem value="single-1">
            <AccordionHeader value="single-1">
              Single Item 1
            </AccordionHeader>
            <AccordionPanel value="single-1" content={panelContent1} />
          </AccordionItem>
          
          <AccordionItem value="single-2">
            <AccordionHeader value="single-2">
              Single Item 2
            </AccordionHeader>
            <AccordionPanel value="single-2" content={panelContent2} />
          </AccordionItem>
        {/snippet}
      </ComplexAccordion>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Multiple Selection Accordion</h2>
      <ComplexAccordion
        multiple={true}
        onValueChange={(values) => console.log('Multiple selection:', values)}
      >
        {#snippet content()}
          <AccordionItem value="multi-1">
            <AccordionHeader value="multi-1">
              Multi Item 1
            </AccordionHeader>
            <AccordionPanel value="multi-1" content={panelContent1} />
          </AccordionItem>
          
          <AccordionItem value="multi-2">
            <AccordionHeader value="multi-2">
              Multi Item 2
            </AccordionHeader>
            <AccordionPanel value="multi-2" content={panelContent2} />
          </AccordionItem>
        {/snippet}
      </ComplexAccordion>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Accordion with Default Open</h2>
      <ComplexAccordion
        multiple={true}
        defaultValue={['default-open']}
        onValueChange={(values) => console.log('Default open:', values)}
      >
        {#snippet content()}
          <AccordionItem value="default-open">
            <AccordionHeader value="default-open">
              Default Open Item
            </AccordionHeader>
            <AccordionPanel value="default-open" content={panelContent1} />
          </AccordionItem>
          
          <AccordionItem value="closed">
            <AccordionHeader value="closed">
              Initially Closed Item
            </AccordionHeader>
            <AccordionPanel value="closed" content={panelContent2} />
          </AccordionItem>
        {/snippet}
      </ComplexAccordion>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Accordion with More Items</h2>
      <ComplexAccordion>
        {#snippet content()}
          <AccordionItem value="more-1">
            <AccordionHeader value="more-1">
              More Items 1
            </AccordionHeader>
            <AccordionPanel value="more-1" content={panelContent1} />
          </AccordionItem>
          
          <AccordionItem value="more-2">
            <AccordionHeader value="more-2">
              More Items 2
            </AccordionHeader>
            <AccordionPanel value="more-2" content={panelContent2} />
          </AccordionItem>
          
          <AccordionItem value="more-3">
            <AccordionHeader value="more-3">
              More Items 3
            </AccordionHeader>
            <AccordionPanel value="more-3" content={panelContent3} />
          </AccordionItem>
          
          <AccordionItem value="more-4">
            <AccordionHeader value="more-4">
              More Items 4
            </AccordionHeader>
            <AccordionPanel value="more-4" content={panelContent4} />
          </AccordionItem>
        {/snippet}
      </ComplexAccordion>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default ComplexAccordion</h2>
    <ComplexAccordion>
      {#snippet content()}
        <AccordionItem value="default-accordion">
          <AccordionHeader value="default-accordion">
            Default Accordion Item
          </AccordionHeader>
          <AccordionPanel value="default-accordion" content={panelContent1} />
        </AccordionItem>
      {/snippet}
    </ComplexAccordion>
  </div>
</div>
