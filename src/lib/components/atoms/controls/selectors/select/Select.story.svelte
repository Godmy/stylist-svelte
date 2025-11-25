<script lang="ts">
  import Select from './Select.svelte';
  import type { ISelectOption } from './types';

  let label = $state('Select an option');
  let required = $state(false);
  let disabled = $state(false);
  let withError = $state(false);
  let withPlaceholder = $state(true);

  // Example options
  const exampleOptions: ISelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  // Generate a random ID for the select
  const id = `select-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Select Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Select</h2>
    <div class="flex flex-col gap-4">
      <Select
        {id}
        {label}
        options={exampleOptions}
        {required}
        {disabled}
        placeholder={withPlaceholder ? 'Choose an option...' : undefined}
        errors={withError ? ['This field is required'] : []}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="label-input" class="block text-sm mb-1">Label:</label>
        <input
          id="label-input"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={required} />
          Required
        </label>
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={withError} />
          Show Error
        </label>
      </div>

      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={withPlaceholder} />
          With Placeholder
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Select States</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Normal State</h3>
        <Select
          id="normal-select"
          label="Normal Select"
          options={exampleOptions}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Disabled State</h3>
        <Select
          id="disabled-select"
          label="Disabled Select"
          options={exampleOptions}
          disabled={true}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">With Error</h3>
        <Select
          id="error-select"
          label="Select with Error"
          options={exampleOptions}
          errors={['This field is required']}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Required Field</h3>
        <Select
          id="required-select"
          label="Required Select"
          options={exampleOptions}
          required={true}
          placeholder="Choose an option..."
        />
      </div>
    </div>
  </div>
</div>