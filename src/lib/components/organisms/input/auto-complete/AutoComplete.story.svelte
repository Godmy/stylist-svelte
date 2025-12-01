<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AutoComplete from './AutoComplete.svelte';

  type Props = {
    placeholder: string;
    showAllSuggestions: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Search...'
    },
    {
      name: 'showAllSuggestions',
      type: 'boolean',
      defaultValue: false
    }
  ];

  const sampleOptions = [
    { id: '1', label: 'Apple', value: 'apple' },
    { id: '2', label: 'Banana', value: 'banana' },
    { id: '3', label: 'Cherry', value: 'cherry' },
    { id: '4', label: 'Date', value: 'date' },
    { id: '5', label: 'Elderberry', value: 'elderberry' }
  ];
</script>

<Story
  id="molecules-auto-complete"
  title="AutoComplete"
  component={AutoComplete}
  category="Molecules"
  description="An input field with auto-complete suggestions."
  tags={['input', 'search', 'suggestions']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">Auto Complete</h2>
      <div class="mb-4">
        <label for="auto-complete-input" class="block text-sm font-medium text-gray-700 mb-1">Enter search term</label>
        <AutoComplete
          id="auto-complete-input"
          options={sampleOptions}
          placeholder={props.placeholder}
          showAllSuggestions={props.showAllSuggestions}
        />
      </div>
      <p class="text-sm text-gray-500">Type to see auto-complete suggestions</p>
    </div>
  {/snippet}
</Story>