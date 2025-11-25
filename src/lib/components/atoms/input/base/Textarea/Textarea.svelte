<script lang="ts">
  import { TextareaStyleManager } from './styles';
  import type { ITextareaProps } from './types';

  /**
   * Textarea component - A styled textarea field with label and error handling
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying a styled textarea field with label and error handling.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: Textarea can be substituted with other textarea components without breaking functionality.
   * Interface Segregation Principle: ITextareaProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    id,
    label,
    value = $bindable<string>(),  // Use $bindable for two-way binding
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    rows = 3,
    maxlength,
    ...restProps
  }: ITextareaProps & import('svelte/elements').HTMLTextareaAttributes<HTMLTextAreaElement> = $props();

  // Calculate derived values
  const hasError = $derived(errors.length > 0);
  const errorId = $derived(`${id}-error`);
  const length = $derived(value?.length || 0);
  const showCounter = $derived(maxlength !== undefined);

  // Generate the CSS classes using the style manager
  const containerClass = $derived(TextareaStyleManager.generateContainerClass(restProps.class));
  const labelWrapperClass = $derived(TextareaStyleManager.generateLabelWrapperClass());
  const labelClass = $derived(TextareaStyleManager.generateLabelClass());
  const counterClass = $derived(TextareaStyleManager.generateCounterClass());
  const textareaClass = $derived(TextareaStyleManager.generateTextareaClass(hasError, disabled));
  const errorClass = $derived(TextareaStyleManager.generateErrorClass());
  const requiredClass = $derived(TextareaStyleManager.generateRequiredClass());
</script>

<div class={containerClass}>
  <div class={labelWrapperClass}>
    <label
      for={id}
      class={labelClass}
    >
      {label}
      {#if required}
        <span class={requiredClass}>*</span>
      {/if}
    </label>

    {#if showCounter}
      <span class={counterClass}>
        {length}/{maxlength}
      </span>
    {/if}
  </div>

  <textarea
    id={id}
    bind:value
    class={textareaClass}
    disabled={disabled}
    placeholder={placeholder}
    required={required}
    rows={rows}
    maxlength={maxlength}
    aria-describedby={hasError ? errorId : undefined}
    {...restProps}
  ></textarea>

  {#if hasError}
    <p id={errorId} class={errorClass}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>