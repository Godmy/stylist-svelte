<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements';

  import type { ISelectProps, ISelectOption } from './types';
  import { SelectStyleManager } from './styles';

  /**
   * Select component - A form select element with label and error handling
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles select field rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other form components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param id - Unique identifier for the select element
   * @param label - Label text for the select
   * @param value - Current selected value
   * @param options - Array of options for the select
   * @param errors - Array of error messages
   * @param required - Whether the field is required
   * @param disabled - Whether the field is disabled
   * @param placeholder - Placeholder text for the select
   * @param class - Additional CSS classes
   * @returns A form select element with label and error handling
   */
  type Props = ISelectProps;

  let {
    id,
    label,
    value = $bindable(),
    options,
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    class: className = '',
    ...restProps
  }: Props = $props();

  let hasError = $derived(errors.length > 0);
  let errorId = $derived(`${id}-error`);
  let selectClasses = $derived(SelectStyleManager.getSelectClasses(hasError, disabled, className));
  let labelClasses = $derived(SelectStyleManager.getLabelClasses());
  let errorClasses = $derived(SelectStyleManager.getErrorClasses());
  let containerClasses = $derived(SelectStyleManager.getContainerClasses());
</script>

<div class={containerClasses}>
  <label
    for={id}
    class={labelClasses}
  >
    {label}
    {#if required}
      <span class="text-[--color-danger-500]">*</span>
    {/if}
  </label>

  <select
    id={id}
    bind:value={value}
    class={selectClasses}
    disabled={disabled}
    required={required}
    aria-describedby={hasError ? errorId : undefined}
    {...restProps}
  >
    {#if placeholder}
      <option value="">{placeholder}</option>
    {/if}
    {#each options as option}
      <option value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>

  {#if hasError}
    <p id={errorId} class={errorClasses}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>