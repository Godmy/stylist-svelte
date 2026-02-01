<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction';

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

  const {
    INTERACTIVE_BASE_CLASS,
    STATE_CLASSES,
    ACCESSIBILITY_CLASSES
  } = INTERACTION_TOKENS;

  type AdvancedInputProps = {
    label?: string;
    value?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    class?: string | null;
  } & Omit<HTMLInputAttributes, 'size'>;

  let {
    label = '',
    value = $bindable<string>(),
    placeholder = '',
    type = 'text',
    disabled = false,
    class: className = '',
    ...restProps
  }: AdvancedInputProps = $props();

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
      disabled ? STATE_CLASSES.disabled : ''
    ]
      .filter(Boolean)
      .join(' ')
  );

  const inputClass = $derived(
    [
      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500]',
      disabled ? 'bg-[--color-background-tertiary] text-[--color-text-secondary]' : 'bg-[--color-background-primary]',
      disabled ? STATE_CLASSES.disabled : ''
    ]
      .filter(Boolean)
      .join(' ')
  );
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


