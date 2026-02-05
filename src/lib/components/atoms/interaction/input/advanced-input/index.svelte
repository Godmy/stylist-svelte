<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { INPUT_FIELD_PRESET } from '$stylist/design-system/presets';
  import { createInputState } from '../state.svelte';

  /**
   * AdvancedInput component - A flexible input component with various styles and states
   *
   * @param label - Label text for the input
   * @param value - Current value of the input
   * @param placeholder - Placeholder text for the input
   * @param type - Input type ('text', 'email', 'password', etc.)
   * @param disabled - Whether the input is disabled
   * @param class - Additional CSS classes to apply
   * @returns An accessible, styled input element
   */

  type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
  type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

  type AdvancedInputProps = {
    label?: string;
    value?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    error?: boolean;
    variant?: InputVariant;
    size?: InputSize;
    class?: string;
  } & Omit<HTMLInputAttributes, 'size'>;

  let {
    label = '',
    value = $bindable<string>(),
    placeholder = '',
    type = 'text',
    disabled = false,
    error = false,
    variant = INPUT_FIELD_PRESET.defaults.variant,
    size = INPUT_FIELD_PRESET.defaults.size,
    class: className = '',
    ...restProps
  }: AdvancedInputProps = $props();
  const state = $derived(createInputState({ variant, size, disabled, error }));

  // Calculate derived values
  const containerClass = $derived(
    [
      'w-full',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );

  const labelClass = $derived(
    [
      'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]',
      state.isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
    ]
      .filter(Boolean)
      .join(' ')
  );

  const inputClass = $derived(state.classes);
</script>

<div class={containerClass}>
  {#if label}
    <label class={labelClass} for="advanced-input">{label}</label>
  {/if}
  <input
    id="advanced-input"
    type={type}
    class={inputClass}
    placeholder={placeholder}
    bind:value
    disabled={disabled}
    {...restProps}
  />
</div>
