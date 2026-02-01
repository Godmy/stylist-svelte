<script lang="ts">
  import AdvancedInput from './index.svelte';

  let label: string = 'Username';
  let value: string = '';
  let placeholder: string = 'Enter your username';
  let type: string = 'text';
  let disabled: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AdvancedInput Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Input</h2>
    <div class="flex flex-col gap-4">
      <AdvancedInput
        {label}
        bind:value
        {placeholder}
        {type}
        {disabled}
      />
      <p class="text-sm text-gray-500">
        Value: <span class="font-mono">{value}</span>
      </p>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="input-label" class="block text-sm mb-1">Label:</label>
        <input
          id="input-label"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="input-placeholder" class="block text-sm mb-1">Placeholder:</label>
        <input
          id="input-placeholder"
          type="text"
          bind:value={placeholder}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="input-type" class="block text-sm mb-1">Type:</label>
        <select id="input-type" bind:value={type} class="border rounded p-1">
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="number">Number</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="input-disabled" class="flex items-center gap-1">
          <input id="input-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Input Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <AdvancedInput
          label="Text Input"
          placeholder="Enter text..."
          type="text"
        />
      </div>
      <div>
        <AdvancedInput
          label="Email Input"
          placeholder="Enter email..."
          type="email"
        />
      </div>
      <div>
        <AdvancedInput
          label="Password Input"
          placeholder="Enter password..."
          type="password"
        />
      </div>
      <div>
        <AdvancedInput
          label="Number Input"
          placeholder="Enter number..."
          type="number"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Disabled State</h2>
    <AdvancedInput
      label="Disabled Input"
      placeholder="This input is disabled"
      disabled={true}
    />
  </div>
</div>