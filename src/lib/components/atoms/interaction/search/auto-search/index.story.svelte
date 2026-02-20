<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AutoSearch from './index.svelte';

  type Props = {
    value?: string;
    placeholder?: string;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Search...'
    }
  ];
</script>

<Story
  id="molecules-auto-search"
  title="AutoSearch"
  component={AutoSearch}
  category="Molecules"
  description="An auto-search component with real-time suggestions."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AutoSearch Story</h2>
      <AutoSearch {...values} />
    </div>
  {/snippet}
</Story>


