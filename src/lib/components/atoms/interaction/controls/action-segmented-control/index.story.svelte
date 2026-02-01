<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ActionSegmentedControl from './ActionSegmentedControl.svelte';

  type Props = {
    items: string[];
    selectedIndex?: number;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'selectedIndex',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 2
    }
  ];
</script>

<Story
  id="molecules-action-segmented-control"
  title="ActionSegmentedControl"
  component={ActionSegmentedControl}
  category="Molecules"
  description="A control that allows users to select one option from a set of mutually exclusive options."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ActionSegmentedControl Story</h2>
      <ActionSegmentedControl
        {...props}
        items={['Option 1', 'Option 2', 'Option 3']}
      />
    </div>
  {/snippet}
</Story>
