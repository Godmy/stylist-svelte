<script context="module">
  export const title = "Textarea";
  export const category = "Atoms/Controls/Input";
</script>

<script lang="ts">
  import Textarea from "./index.svelte";

  let id = 'textarea-1';
  let label = 'Message';
  let placeholder = 'Enter text...';
  let required = false;
  let disabled = false;
  let value = '';
  let errors = '';
  let rows = 3;
  let maxlength: number | undefined = undefined;
  let className = '';

  // Normalize errors
  const normalizedErrors = typeof errors === 'string'
    ? errors.split(',').map(segment => segment.trim()).filter(segment => segment.length > 0)
    : Array.isArray(errors) ? errors : [];

  // Generate a random ID if needed
  const uniqueId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="story-container">
  <h2>{title}</h2>
  <p>Styled textarea field with label and error handling.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <div class="mb-6 p-4 border rounded">
      <h3 class="text-md font-semibold mb-2">Interactive Textarea</h3>
      <div class="p-4">
        <Textarea
          id={uniqueId}
          label={label}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          errors={normalizedErrors}
          rows={rows}
          maxlength={maxlength}
          class={className}
        />
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <div>
          <label for="textarea-id" class="block text-sm mb-1">ID:</label>
          <input
            id="textarea-id"
            type="text"
            bind:value={id}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-label" class="block text-sm mb-1">Label:</label>
          <input
            id="textarea-label"
            type="text"
            bind:value={label}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-placeholder" class="block text-sm mb-1">Placeholder:</label>
          <input
            id="textarea-placeholder"
            type="text"
            bind:value={placeholder}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-value" class="block text-sm mb-1">Value:</label>
          <input
            id="textarea-value"
            type="text"
            bind:value={value}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-errors" class="block text-sm mb-1">Errors (comma-separated):</label>
          <input
            id="textarea-errors"
            type="text"
            bind:value={errors}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-rows" class="block text-sm mb-1">Rows:</label>
          <input
            id="textarea-rows"
            type="number"
            bind:value={rows}
            class="border rounded p-1"
          />
        </div>

        <div>
          <label for="textarea-maxlength" class="block text-sm mb-1">Max Length:</label>
          <input
            id="textarea-maxlength"
            type="number"
            bind:value={maxlength}
            class="border rounded p-1"
          />
        </div>

        <div class="flex items-end">
          <label for="textarea-required" class="flex items-center gap-1">
            <input id="textarea-required" type="checkbox" bind:checked={required} />
            Required
          </label>
        </div>

        <div class="flex items-end">
          <label for="textarea-disabled" class="flex items-center gap-1">
            <input id="textarea-disabled" type="checkbox" bind:checked={disabled} />
            Disabled
          </label>
        </div>

        <div>
          <label for="textarea-classname" class="block text-sm mb-1">Class Name:</label>
          <input
            id="textarea-classname"
            type="text"
            bind:value={className}
            class="border rounded p-1"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Variants Section -->
  <div class="variants-section">
    <h3>Textarea States</h3>
    <div class="variant-grid">
      <div>
        <h4 class="text-sm font-medium mb-2">Normal State</h4>
        <Textarea
          id="normal-textarea"
          label="Normal Textarea"
          placeholder="Enter your message..."
          rows={3}
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Disabled State</h4>
        <Textarea
          id="disabled-textarea"
          label="Disabled Textarea"
          placeholder="This textarea is disabled"
          disabled={true}
          rows={3}
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">With Error</h4>
        <Textarea
          id="error-textarea"
          label="Textarea with Error"
          placeholder="This textarea has an error"
          errors={['This field is required']}
          rows={3}
        />
      </div>
      <div>
        <h4 class="text-sm font-medium mb-2">Required Field</h4>
        <Textarea
          id="required-textarea"
          label="Required Textarea"
          placeholder="This textarea is required"
          required={true}
          rows={3}
        />
      </div>
    </div>
  </div>

  <!-- Tags -->
  <div class="tags">
    <span class="tag">form</span>
    <span class="tag">textarea</span>
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
