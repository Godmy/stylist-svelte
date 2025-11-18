<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import type { ICheckboxProps } from './types';
  import { CheckboxStyleManager } from './styles';

  /**
   * Checkbox component - A form checkbox with label and error handling
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles checkbox rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other form components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param id - Unique identifier for the checkbox
   * @param label - Label text for the checkbox
   * @param description - Description text for the checkbox
   * @param checked - Whether the checkbox is checked
   * @param errors - Array of error messages
   * @param required - Whether the field is required
   * @param disabled - Whether the field is disabled
   * @param class - Additional CSS classes
   * @returns A form checkbox element with label and error handling
   */
  type Props = ICheckboxProps;

  let {
    id,
    label,
    description,
    checked = $bindable(false),
    errors = [],
    required = false,
    disabled = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  let hasError = $derived(errors.length > 0);
  let errorId = $derived(`${id}-error`);
  let containerClasses = $derived(CheckboxStyleManager.getContainerClasses());
  let wrapperClasses = $derived(CheckboxStyleManager.getWrapperClasses());
  let checkboxWrapperClasses = $derived(CheckboxStyleManager.getCheckboxWrapperClasses());
  let checkboxClasses = $derived(CheckboxStyleManager.getCheckboxClasses(disabled));
  let labelWrapperClasses = $derived(CheckboxStyleManager.getLabelWrapperClasses());
  let labelClasses = $derived(CheckboxStyleManager.getLabelClasses());
  let descriptionClasses = $derived(CheckboxStyleManager.getDescriptionClasses());
  let errorClasses = $derived(CheckboxStyleManager.getErrorClasses());
</script>

<div class={containerClasses}>
  <div class={wrapperClasses}>
    <div class={checkboxWrapperClasses}>
      <input
        id={id}
        type="checkbox"
        bind:checked={checked}
        class={checkboxClasses}
        disabled={disabled}
        required={required}
        aria-describedby={hasError ? errorId : undefined}
        {...restProps}
      />
    </div>
    <div class={labelWrapperClasses}>
      <label for={id} class={labelClasses}>
        {label}
        {#if required}
          <span class="text-red-500">*</span>
        {/if}
      </label>
      {#if description}
        <p class={descriptionClasses}>{description}</p>
      {/if}
    </div>
  </div>

  {#if hasError}
    <p id={errorId} class={errorClasses}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>