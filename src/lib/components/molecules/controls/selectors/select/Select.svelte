<script lang="ts">
  import type { ISelectProps } from './types';
  import './Select.css';

  /**
   * Select component - A stylized select with theme-aware dropdown
   *
   * @returns A form select element with custom dropdown visuals
   */
  type Props = ISelectProps;

  let {
    id,
    label,
    value = $bindable(''),
    options = [],
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    class: className = '',
    open = false,
    onToggle = undefined,
    ...restProps
  }: Props & {
    open?: boolean;
    onToggle?: () => void;
  } = $props();

  const labelId = `${id}-label`;
  const triggerId = `${id}-trigger`;
  const nativeId = `${id}-native`;

  let hasError = $derived(errors.length > 0);
  let errorId = $derived(`${id}-error`);
  let selectedOption = $derived(options.find((option) => option.value === value));

  // Define classes using utility classes (tailwind and css variables)
  let containerClass = `mb-4 ${className}`;
  let labelClass = 'block text-sm font-medium mb-1 text-[--color-text-primary]';
  let fieldWrapperClass = 'relative';
  let selectButtonClass = $derived(`w-full px-3 py-2 text-left bg-[--color-background-surface] border ${hasError ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md shadow-sm cursor-default focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : ''}`);
  let chevronClass = 'ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none';
  let errorClass = 'mt-1 text-sm text-[--color-danger-500]';
  let valueClass = $derived(selectedOption ? 'text-[--color-text-primary]' : 'text-[--color-text-secondary]');

  function handleClick() {
    if (onToggle && !disabled) {
      onToggle();
    }
  }
</script>

<div class={containerClass}>
  {#if label}
    <label
      id={labelId}
      for={nativeId}
      class={labelClass}
    >
      {label}
      {#if required}
        <span class="text-[--color-danger-500]">*</span>
      {/if}
    </label>
  {/if}

  <div class={fieldWrapperClass}>
    <button
      id={triggerId}
      type="button"
      class={selectButtonClass}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-labelledby={labelId}
      onclick={handleClick}
      disabled={disabled}
    >
      <span class={valueClass}>
        {#if selectedOption}
          {selectedOption.label}
        {:else}
          {placeholder ?? 'Select an option'}
        {/if}
      </span>
      <span class={chevronClass} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <!-- Native select for form integration -->
    <select
      id={nativeId}
      bind:value={value}
      class="absolute opacity-0 w-0 h-0 overflow-hidden"
      disabled={disabled}
      required={required}
      aria-hidden="true"
      aria-invalid={hasError}
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
  </div>

  {#if hasError}
    <p id={errorId} class={errorClass}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>