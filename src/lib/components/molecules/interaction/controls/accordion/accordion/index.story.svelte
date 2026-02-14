<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { Snippet } from 'svelte';
  import Accordion from './index.svelte';

  type Props = {
    expanded: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'expanded',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-accordion"
  title="Accordion"
  component={Accordion}
  category="Molecules"
  description="A component that allows users to expand and collapse sections of content."
  tags={['expandable', 'collapsible', 'section']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="p-6 max-w-md mx-auto">
      <Accordion
        items={[
          {
            id: 'item1',
            title: 'Accordion Title',
            content: `<div class="py-4">
                <p>
                  This is the accordion content. You can place any content inside the accordion,
                  such as text, images, or other components. The content will be shown when the
                  accordion is expanded.
                </p>
              </div>`,
            disabled: props.disabled
          }
        ]}
        multiple={false}
      />
    </div>
  {/snippet}
</Story>


