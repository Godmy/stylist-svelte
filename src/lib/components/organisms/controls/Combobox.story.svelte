<script lang="ts">
  import Combobox from '../interactive/Combobox.svelte'; // Путь к вашему компоненту Combobox
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let placeholder = 'Select an option...';
  let disabled = false;
  let options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' }
  ];
  let selected = options[0];

  const controls: ControlConfig[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Select an option...' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];
</script>

# Combobox

<Story title="Combobox" {controls}>
  <div class="space-y-4 p-8">
    <div class="max-w-xs">
      <Combobox 
        {options}
        bind:selected={selected}
        {placeholder}
        {disabled}
      />
    </div>

    <div class="mt-4">
      <p>Selected: {selected?.label || 'None'}</p>
    </div>

    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={disabled} /> Disabled
        </label>
      </div>

      <div>
        <label>Placeholder: <input type="text" bind:value={placeholder} /></label>
      </div>
    </div>
  </div>
</Story>