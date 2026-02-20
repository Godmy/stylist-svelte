<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AutoComplete from './index.svelte';
  import type { AutoCompleteOption } from '$stylist/design-system/props/interaction-input';

  type Props = {
    placeholder: string;
    disabled: boolean;
    showAllSuggestions: boolean;
    debounce: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Type to search...'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showAllSuggestions',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'debounce',
      type: 'number',
      defaultValue: 300
    }
  ];

  const options: AutoCompleteOption[] = [
    { id: '1', label: 'Apple', value: 'apple', meta: 'Fruit' },
    { id: '2', label: 'Banana', value: 'banana', meta: 'Tropical Fruit' },
    { id: '3', label: 'Cherry', value: 'cherry', meta: 'Stone Fruit' },
    { id: '4', label: 'Date', value: 'date', meta: 'Desert Fruit' },
    { id: '5', label: 'Elderberry', value: 'elderberry', meta: 'Berry' },
    { id: '6', label: 'Fig', value: 'fig', meta: 'Common Fig' },
    { id: '7', label: 'Grape', value: 'grape', meta: 'Small Fruit' },
    { id: '8', label: 'Honeydew', value: 'honeydew', meta: 'Melon' }
  ];

  let currentValue = $state('');
  
  function handleInput(value: string) {
    currentValue = value;
    console.log('Input value:', value);
  }

  function handleSelect(option: AutoCompleteOption) {
    console.log('Selected option:', option);
  }
</script>

<Story
  id="organisms-auto-complete"
  title="Organisms / Interaction / Input / Auto Complete"
  component={AutoComplete}
  category="Organisms/Interaction/Input"
  description="An auto-complete input component with suggestions."
  tags={['input', 'autocomplete', 'search']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4 max-w-md">
      <div class="mb-4">
        <p>Current value: {currentValue || 'None'}</p>
      </div>
      <AutoComplete 
        options={options}
        placeholder={props.placeholder}
        disabled={props.disabled}
        showAllSuggestions={props.showAllSuggestions}
        debounce={props.debounce}
        onInput={handleInput}
        onSelect={handleSelect}
      />
    </div>
  {/snippet}
</Story>

