<script lang="ts">
  import { InputStyleManager } from '$stylist/design-system/interaction/input/field/input-text';
  import type { IInputProps } from '$stylist/design-system/interaction/input/field/input-text';
  import type { HTMLInputAttributes } from 'svelte/elements';

  /**
   * Input component - A styled input field with label and error handling
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying a styled input field with label and error handling.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: Input can be substituted with other input components without breaking functionality.
   * Interface Segregation Principle: IInputProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    id,
    label,
    type = 'text',
    value = $bindable<string>(),
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    min,
    max,
    step,
    ...restProps
  }: IInputProps & HTMLInputAttributes = $props();

  // Calculate derived values
  const hasError = $derived(errors.length > 0);
  const errorId = $derived(`${id}-error`);

  // Generate the CSS classes using the style manager
  const containerClass = $derived(InputStyleManager.generateContainerClass(restProps.class));
  const labelClass = $derived(InputStyleManager.generateLabelClass());
  const inputClass = $derived(InputStyleManager.generateInputClass(hasError, disabled));
  const errorClass = $derived(InputStyleManager.generateErrorClass());
  const requiredClass = $derived(InputStyleManager.generateRequiredClass());
</script>

<div class={containerClass}>
  <label
    for={id}
    class={labelClass}
  >
    {label}
    {#if required}
      <span class={requiredClass}>*</span>
    {/if}
  </label>

  <input
    id={id}
    type={type}
    bind:value={value}
    class={inputClass}
    disabled={disabled}
    placeholder={placeholder}
    required={required}
    min={min}
    max={max}
    step={step}
    aria-describedby={hasError ? errorId : undefined}
    aria-invalid={hasError}
    aria-required={required}
    {...restProps}
  />

  {#if hasError}
    <p id={errorId} class={errorClass}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>
