<script lang="ts">
  import FormDatePicker from './index.svelte';

  let value: string = '';
  let label: string = 'Select Date';
  let helperText: string = 'Choose a date for your appointment';
  let error: string = '';
  let minDate: string = '2024-01-01';
  let maxDate: string = '2025-12-31';
  let placeholder: string = 'Select date';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FormDatePicker Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FormDatePicker</h2>
    <div class="max-w-xs">
      <FormDatePicker 
        {value}
        {label}
        {helperText}
        {error}
        {minDate}
        {maxDate}
        {placeholder}
        onInput={(newValue) => value = newValue}
        onChange={(newValue) => console.log('Date changed:', newValue)}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="date-value" class="block text-sm mb-1">Value:</label>
        <input
          id="date-value"
          type="date"
          bind:value={value}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="date-label" class="block text-sm mb-1">Label:</label>
        <input
          id="date-label"
          type="text"
          bind:value={label}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="date-min" class="block text-sm mb-1">Min Date:</label>
        <input
          id="date-min"
          type="date"
          bind:value={minDate}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="date-max" class="block text-sm mb-1">Max Date:</label>
        <input
          id="date-max"
          type="date"
          bind:value={maxDate}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="date-placeholder" class="block text-sm mb-1">Placeholder:</label>
        <input
          id="date-placeholder"
          type="text"
          bind:value={placeholder}
          class="border rounded p-1 w-32"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FormDatePicker Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Error State</h3>
        <div class="max-w-xs">
          <FormDatePicker 
            value="2024-06-15"
            label="Event Date"
            error="Please select a valid date"
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Helper Text</h3>
        <div class="max-w-xs">
          <FormDatePicker 
            value="2024-12-25"
            label="Holiday Date"
            helperText=""
          />
        </div>
      </div>
    </div>
  </div>
</div>