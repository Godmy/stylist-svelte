<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ComplexAccordion from './index.svelte';
  import AccordionItem from '$stylist/components/atoms/interaction/controls/accordion/accordion-item/index.svelte';
  import AccordionHeader from '$stylist/components/atoms/interaction/controls/accordion/accordion-header/index.svelte';
  import AccordionPanel from '$stylist/components/atoms/interaction/controls/accordion/accordion-panel/index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'multiple',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether multiple items can be expanded'
    }
  ];

  const panelContent1 = `<div><p>Content for panel 1</p></div>`;
  const panelContent2 = `<div><p>Content for panel 2</p></div>`;
  const panelContent3 = `<div><p>Content for panel 3</p></div>`;

  function handleValueChange(values: string[]) {
    console.log('Accordion values changed:', values);
  }
</script>

<Story
  {controls}
  title="ComplexAccordion Component"
  description="Interactive complex accordion with customizable options"
  let:controlValues
>
  <div class="p-4">
    <ComplexAccordion
      multiple={controlValues.multiple}
      onValueChange={handleValueChange}
    >
      {#snippet content()}
        <AccordionItem value="item-1">
          <AccordionHeader value="item-1">Accordion Item 1</AccordionHeader>
          <AccordionPanel value="item-1">{panelContent1}</AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader value="item-2">Accordion Item 2</AccordionHeader>
          <AccordionPanel value="item-2">{panelContent2}</AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionHeader value="item-3">Accordion Item 3</AccordionHeader>
          <AccordionPanel value="item-3">{panelContent3}</AccordionPanel>
        </AccordionItem>
      {/snippet}
    </ComplexAccordion>
  </div>
</Story>