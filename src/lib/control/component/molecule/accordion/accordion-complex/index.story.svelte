<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ComplexAccordion from './index.svelte';
  import AccordionItem from '$stylist/control/component/atom/accordion/accordion-item/index.svelte';
  import AccordionHeader from '$stylist/control/component/atom/accordion/accordion-header/index.svelte';
  import AccordionPanel from '$stylist/control/component/atom/accordion/accordion-panel/index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'multiple',
      type: 'boolean' as TokenControllerType,
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
 
>
  {#snippet children(controlValues: any)}
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

  {/snippet}
</Story>


