<script lang="ts">
  import type { SlotColorPicker as IColorPickerProps } from '$stylist/input/interface/slot/color-picker';
  import { createColorPickerState } from '$stylist/input/function/state/color-picker';

  let props: IColorPickerProps = $props();
  const state = createColorPickerState(props);
</script>

<div class={state.containerClass}>
  <div class="flex items-center gap-3">
    <label for="color-picker-input" class="block text-sm font-medium text-[var(--color-text-primary)]">
      {state.label}
    </label>
    <div class="flex items-center gap-2">
      <div
        class={`w-8 h-8 rounded-md border border-[var(--color-border-primary)] ${state.pickerClass}`}
        style={`background-color: ${state.selectedColor};`}
        role="presentation"
      >
        <input
          id="color-picker-input"
          type="color"
          class={`w-8 h-8 opacity-[var(--opacity-0)] cursor-pointer ${state.inputClass}`}
          bind:value={state.selectedColor}
          oninput={state.handleInput}
          onchange={state.handleChange}
          {...props}
        />
      </div>
      <input
        type="text"
        class={`w-24 px-3 py-1 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] text-sm ${state.inputClass}`}
        bind:value={state.selectedColor}
        oninput={state.handleInput}
        onchange={state.handleChange}
        {...props}
      />
    </div>
  </div>

  {#if state.helperText}
    <p class="mt-1 text-xs text-[var(--color-text-secondary)]">{state.helperText}</p>
  {/if}

  {#if state.error}
    <p class="mt-1 text-xs text-[var(--color-danger-600)]">{state.error}</p>
  {/if}
</div>





