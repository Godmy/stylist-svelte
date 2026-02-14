<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ExpandableCard from './index.svelte';

  type Props = {
    title: string;
    defaultExpanded: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Expandable Card Title'
    },
    {
      name: 'defaultExpanded',
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
  id="molecules-expandable-card"
  title="ExpandableCard"
  component={ExpandableCard}
  category="Molecules"
  description="A card component that can be expanded to show additional content."
  tags={['card', 'expandable', 'accordion']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="p-6 max-w-md mx-auto">
      <ExpandableCard
        title={props.title}
        defaultExpanded={props.defaultExpanded}
        disabled={props.disabled}
      >
        {#snippet summary()}
          <div class="font-semibold">{props.title}</div>
          <p class="text-sm text-gray-500">Toggle to view more details</p>
        {/snippet}
        {#snippet details()}
          <div class="py-4">
            <p class="mb-4">
              This is the expandable content area. You can put any content you want here,
              such as additional details, images, or other components.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        {/snippet}
      </ExpandableCard>
    </div>
  {/snippet}
</Story>



