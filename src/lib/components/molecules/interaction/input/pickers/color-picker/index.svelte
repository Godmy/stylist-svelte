<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Palette } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;

  type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    pickerClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };

  let {
    value = '#000000',
    class: hostClass = '',
    inputClass = '',
    pickerClass = '',
    label,
    helperText,
    error,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedColor = $state(value);

  $effect(() => {
    selectedColor = value;
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    onValueInput?.(selectedColor, event);
    onValueChange?.(selectedColor, event);
    onInput?.(selectedColor, event);
  }

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    onValueChange?.(selectedColor, event);
    onChange?.(selectedColor, event);
  }
</script>

<div class={`color-picker-container ${hostClass}`}>
  <div class="flex items-center gap-3">
    <label for="color-picker-input" class="block text-sm font-medium text-gray-700">
      {label || 'Color'}
    </label>
    <div class="flex items-center gap-2">
      <div
        class={`w-8 h-8 rounded-md border border-gray-300 ${pickerClass}`}
        style={`background-color: ${selectedColor};`}
        role="button"
        tabindex="0"
        aria-label={`Select color, current value is ${selectedColor}`}
      >
        <input
          id="color-picker-input"
          type="color"
          class={`w-8 h-8 opacity-0 cursor-pointer ${inputClass}`}
          value={selectedColor}
          oninput={handleInput}
          onchange={handleChange}
          {...restProps}
        />
      </div>
      <input
        type="text"
        class={`w-24 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm ${inputClass}`}
        value={selectedColor}
        oninput={handleInput}
        onchange={handleChange}
        {...restProps}
      />
    </div>
  </div>

  {#if helperText}
    <p class="mt-1 text-xs text-gray-500">{helperText}</p>
  {/if}

  {#if error}
    <p class="mt-1 text-xs text-red-600">{error}</p>
  {/if}
</div>
