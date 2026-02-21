<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Accordion from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the accordion item is disabled'
    }
  ];

  const items = [
    {
      id: 'item1',
      title: 'Accordion Title',
      content: `<div class="py-4">
          <p>
            This is the accordion content. You can place any content inside the accordion,
            such as text, images, or other components. The content will be shown when the
            accordion is expanded.
          </p>
        </div>`
    }
  ];
</script>

<Story
  {controls}
  title="Accordion Component"
  description="A component that allows users to expand and collapse sections of content"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-6 max-w-md mx-auto">
    <Accordion
      items={[
        {
          ...items[0],
          disabled: controlValues.disabled
        }
      ]}
      multiple={false}
    />
  </div>

  {/snippet}
</Story>


