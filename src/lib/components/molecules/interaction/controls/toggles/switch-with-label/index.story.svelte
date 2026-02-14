<script lang="ts">
  import SwitchWithLabel from './index.svelte';
  import type { ISwitchWithLabelProps } from '$stylist/design-system/props/switch-with-label';

  let {
    variant = 'primary'
  } = $props();

  let checked: boolean = $state(false);
  let disabled: boolean = $state(false);
  let label: string = $state('Enable notifications');
  let labelPosition: 'start' | 'end' = $state('end');
  let className: string = $state('');
  let switchClass: string = $state('');
  let labelClass: string = $state('');

  function handleChange(checked: boolean) {
    console.log('Change event:', checked);
  }

  function handleInput(checked: boolean) {
    console.log('Input event:', checked);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">SwitchWithLabel Component</h1>
  <p class="mb-4">A toggle switch component with an associated label.</p>

  <div class="mb-4 space-y-4">
    <div>
      <label class="block mb-1">
        <input
          type="checkbox"
          bind:checked={checked}
          class="mr-1"
        />
        Checked
      </label>
    </div>

    <div>
      <label class="block mb-1">
        <input
          type="checkbox"
          bind:checked={disabled}
          class="mr-1"
        />
        Disabled
      </label>
    </div>

    <div>
      <label class="block mb-1">Label: <input
        type="text"
        bind:value={label}
        class="border rounded p-1 ml-2 w-full"
      /></label>
    </div>

    <div>
      <label class="block mb-1">
        Label Position:
        <select bind:value={labelPosition} class="border rounded p-1 ml-2">
          <option value="start">start</option>
          <option value="end">end</option>
        </select>
      </label>
    </div>

    <div>
      <label class="block mb-1">Class: <input
        type="text"
        bind:value={className}
        class="border rounded p-1 ml-2 w-full"
      /></label>
    </div>

    <div>
      <label class="block mb-1">Switch Class: <input
        type="text"
        bind:value={switchClass}
        class="border rounded p-1 ml-2 w-full"
      /></label>
    </div>

    <div>
      <label class="block mb-1">Label Class: <input
        type="text"
        bind:value={labelClass}
        class="border rounded p-1 ml-2 w-full"
      /></label>
    </div>
  </div>

  <div class="border p-4 rounded">
    <SwitchWithLabel
      checked={checked}
      disabled={disabled}
      label={label}
      labelPosition={labelPosition}
      class={className}
      switchClass={switchClass}
      labelClass={labelClass}
      onChange={handleChange}
      onInput={handleInput}
    />
  </div>
</div>