<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AutoSearch from './AutoSearch.svelte';

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
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AutoSearch Story</h2>
      <AutoSearch {...props} />
    </div>
  {/snippet}
</Story>