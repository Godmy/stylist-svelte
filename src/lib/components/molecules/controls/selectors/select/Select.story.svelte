<script context="module">
  export const title = "Select";
  export const category = "Molecules/Controls/Selectors";
</script>

<script>
  import Select from "./Select.svelte";

  let label = 'Select an option';
  let required = false;
  let disabled = false;
  let withError = false;
  let withPlaceholder = true;

  // Example options
  const exampleOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  // Generate a random ID for the select
  const id = `select-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="story-container">
  <h2>{title}</h2>
  <p>Select component for choosing one option from a list.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <div class="mb-6 p-4 border rounded">
      <h3 class="text-md font-semibold mb-2">Interactive Select</h3>
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
  </div>

  <!-- States Section -->
  <div class="variants-section">
    <h3>Select States</h3>
    <div class="variant-grid">
      <div>
        <h4 class="text-sm font-medium mb-2">Normal State</h4>
        <Select
          id="normal-select"
          label="Normal Select"
          options={exampleOptions}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Disabled State</h4>
        <Select
          id="disabled-select"
          label="Disabled Select"
          options={exampleOptions}
          disabled={true}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">With Error</h4>
        <Select
          id="error-select"
          label="Select with Error"
          options={exampleOptions}
          errors={['This field is required']}
          placeholder="Choose an option..."
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Required Field</h4>
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

  <!-- Tags -->
  <div class="tags">
    <span class="tag">form</span>
    <span class="tag">selector</span>
    <span class="tag">ui</span>
    <span class="tag">input</span>
  </div>
</div>

<style>
  .story-container {
    padding: 20px;
    max-width: 100%;
    font-family: sans-serif;
  }

  h2, h3, h4 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .interactive-demo {
    margin: 1.5rem 0;
  }

  .variants-section {
    margin-top: 2rem;
  }

  .variant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>