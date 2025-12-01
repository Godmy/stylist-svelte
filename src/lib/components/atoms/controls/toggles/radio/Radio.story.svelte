<script context="module">
  export const title = "Radio";
  export const category = "Atoms/Controls/Toggles";
</script>

<script>
  import Radio from "./Radio.svelte";

  let label = 'Radio option';
  let disabled = false;
  let required = false;

  // Generate a random ID and name for the radio
  const id = `radio-${Math.random().toString(36).substr(2, 9)}`;
  const name = `radio-group`;
</script>

<div class="story-container">
  <h2>{title}</h2>
  <p>Single radio button with optional label.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <div class="mb-6 p-4 border rounded">
      <h3 class="text-md font-semibold mb-2">Interactive Radio</h3>
      <div class="flex flex-col gap-4">
        <Radio
          id={id}
          name={name}
          value="option1"
          label={label}
          disabled={disabled}
          required={required}
        />
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <div>
          <label for="radio-label" class="block text-sm mb-1">Label:</label>
          <input
            id="radio-label"
            type="text"
            bind:value={label}
            class="border rounded p-1"
          />
        </div>

        <div class="flex items-end">
          <label for="radio-disabled" class="flex items-center gap-1">
            <input id="radio-disabled" type="checkbox" bind:checked={disabled} />
            Disabled
          </label>
        </div>

        <div class="flex items-end">
          <label for="radio-required" class="flex items-center gap-1">
            <input id="radio-required" type="checkbox" bind:checked={required} />
            Required
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- States Section -->
  <div class="variants-section">
    <h3>Radio States</h3>
    <div class="variant-grid">
      <div>
        <h4 class="text-sm font-medium mb-2">Normal State</h4>
        <Radio
          id="normal-radio"
          name="normal-group"
          value="option1"
          label="Normal Radio"
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Disabled State</h4>
        <Radio
          id="disabled-radio"
          name="disabled-group"
          value="option1"
          label="Disabled Radio"
          disabled={true}
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Required Field</h4>
        <Radio
          id="required-radio"
          name="required-group"
          value="option1"
          label="Required Radio"
          required={true}
        />
      </div>
    </div>
  </div>

  <!-- Tags -->
  <div class="tags">
    <span class="tag">form</span>
    <span class="tag">toggle</span>
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