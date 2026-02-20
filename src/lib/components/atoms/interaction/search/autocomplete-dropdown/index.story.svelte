<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AutocompleteDropdown from './index.svelte';

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
      defaultValue: 'Select...'
    }
  ];
</script>

<Story
  id="molecules-autocomplete-dropdown"
  title="AutocompleteDropdown"
  component={AutocompleteDropdown}
  category="Molecules"
  description="A dropdown component with autocomplete functionality."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AutocompleteDropdown Story</h2>
      <AutocompleteDropdown
        {...values}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' }
        ]}
      />
    </div>
  {/snippet}
</Story>


