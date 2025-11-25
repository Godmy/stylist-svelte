<script lang="ts">
  import Checkbox from './Checkbox.svelte';

  let label: string = 'Accept terms and conditions';
  let description: string = 'Please read and accept our terms';
  let required: boolean = false;
  let disabled: boolean = false;
  let withError: boolean = false;

  // Generate a random ID for the checkbox
  const id = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Checkbox Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Checkbox</h2>
    <div class="flex flex-col gap-4">
      <Checkbox
        {id}
        {label}
        {description}
        {required}
        {disabled}
        errors={withError ? ['This field is required'] : []}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="checkbox-label" class="block text-sm mb-1">Label:</label>
        <input
          id="checkbox-label"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="checkbox-description" class="block text-sm mb-1">Description:</label>
        <input
          id="checkbox-description"
          type="text"
          bind:value={description}
          class="border rounded p-1"
        />
      </div>

      <div class="flex items-end">
        <label for="checkbox-required" class="flex items-center gap-1">
          <input id="checkbox-required" type="checkbox" bind:checked={required} />
          Required
        </label>
      </div>

      <div class="flex items-end">
        <label for="checkbox-disabled" class="flex items-center gap-1">
          <input id="checkbox-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="checkbox-with-error" class="flex items-center gap-1">
          <input id="checkbox-with-error" type="checkbox" bind:checked={withError} />
          Show Error
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Checkbox States</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Normal State</h3>
        <Checkbox
          id="normal-checkbox"
          label="Normal Checkbox"
          description="This is a normal checkbox without any special states"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Disabled State</h3>
        <Checkbox
          id="disabled-checkbox"
          label="Disabled Checkbox"
          description="This checkbox is disabled and cannot be interacted with"
          disabled={true}
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">With Error</h3>
        <Checkbox
          id="error-checkbox"
          label="Checkbox with Error"
          description="This checkbox has an error state"
          errors={['This field is required']}
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Required Field</h3>
        <Checkbox
          id="required-checkbox"
          label="Required Checkbox"
          description="This checkbox is required to submit the form"
          required={true}
        />
      </div>
    </div>
  </div>
</div>