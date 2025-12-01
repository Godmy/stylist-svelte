<script lang="ts">
  import { organisms } from '$lib';
  import { Story } from '$lib/playground';

  const { Combobox } = organisms.controls;
  import type { ControlConfig } from '$lib/playground';

  let value = $state<string | null>(null);
  let placeholder = $state('Начните вводить...');
  let disabled = $state(false);
  let clearable = $state(true);
  let loading = $state(false);
  let emptyText = $state('Ничего не найдено');

  // Sample items for the combobox
  const items = [
    { id: '1', label: 'Apple', description: 'A sweet, edible fruit' },
    { id: '2', label: 'Banana', description: 'A yellow, curved fruit' },
    { id: '3', label: 'Cherry', description: 'A small, round stone fruit' },
    { id: '4', label: 'Date', description: 'A sweet brown fruit' },
    { id: '5', label: 'Elderberry', description: 'A dark purple berry' }
  ];

  const controls: ControlConfig[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Начните вводить...' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'clearable', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'emptyText', type: 'text', defaultValue: 'Ничего не найдено' }
  ];
</script>

# Combobox

<Story id="combobox-story" title="Combobox" component={Combobox} {controls}>
  <div class="space-y-4 p-8">
    <Combobox
      id="demo-combobox"
      label="Sample Combobox"
      description="This is a demo of the combobox component"
      {items}
      bind:value
      {placeholder}
      {disabled}
      {clearable}
      {loading}
      {emptyText}
    />
    
    <div class="mt-4">
      <p>Selected value: {value ?? 'None'}</p>
    </div>
  </div>
</Story>
