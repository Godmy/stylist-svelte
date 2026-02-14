<script lang="ts">
  import CheckboxGroup from './index.svelte';

  let options = [
    { id: 'option1', label: 'Option 1', value: 'option1', description: 'First option description' },
    { id: 'option2', label: 'Option 2', value: 'option2', description: 'Second option description' },
    { id: 'option3', label: 'Option 3', value: 'option3', description: 'Third option description' },
    { id: 'option4', label: 'Option 4', value: 'option4', description: 'Fourth option description' }
  ];

  let value: string[] = [];
  let label: string = 'Select your preferences';
  let description: string = 'Choose one or more options';
  let disabled: boolean = false;
  let required: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CheckboxGroup Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CheckboxGroup</h2>
    <CheckboxGroup 
      {options}
      {value}
      {label}
      {description}
      {disabled}
      {required}
      onValueChange={(newValues) => value = newValues}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="checkboxgroup-disabled" class="flex items-center gap-1">
          <input id="checkboxgroup-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="checkboxgroup-required" class="flex items-center gap-1">
          <input id="checkboxgroup-required" type="checkbox" bind:checked={required} />
          Required
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CheckboxGroup Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Initial Selection</h3>
        <CheckboxGroup 
          options={options}
          value={['option1', 'option3']}
          label="Pre-selected options"
          description="These options are already selected"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Disabled Options</h3>
        <CheckboxGroup 
          options={[
            { id: 'opt1', label: 'Enabled Option', value: 'opt1' },
            { id: 'opt2', label: 'Disabled Option', value: 'opt2', disabled: true },
            { id: 'opt3', label: 'Another Enabled Option', value: 'opt3' }
          ]}
          label="Mixed enabled/disabled options"
          description="Some options are disabled"
        />
      </div>
    </div>
  </div>
</div>
