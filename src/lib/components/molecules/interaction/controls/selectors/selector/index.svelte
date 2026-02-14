<script lang="ts">
  import type { ISelectProps } from '$stylist/design-system/props/selector';

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

<style>
:root {
  --select-option-bg: var(--color-background-primary);
  --select-option-color: var(--color-text-primary);
  --select-option-hover: color-mix(in srgb, var(--color-primary-500) 12%, var(--color-background-primary));
  --select-option-selected-bg: var(--color-primary-600);
  --select-option-selected-color: var(--color-text-inverse);
  --select-option-border: rgba(15, 23, 42, 0.08);
}

[data-theme='dark'],
.dark {
  --select-option-bg: color-mix(in srgb, var(--color-background-secondary) 96%, transparent);
  --select-option-color: var(--color-text-primary);
  --select-option-hover: color-mix(in srgb, var(--color-primary-300) 25%, var(--color-background-secondary));
  --select-option-selected-bg: color-mix(in srgb, var(--color-primary-400) 80%, transparent);
  --select-option-selected-color: var(--color-text-inverse);
  --select-option-border: rgba(15, 23, 42, 0.35);
}

.select-native {
  position: absolute;
  inset: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.select-trigger {
  min-height: 2.875rem;
  letter-spacing: -0.01em;
  background-image: linear-gradient(
    120deg,
    color-mix(in srgb, var(--color-background-primary) 95%, transparent),
    color-mix(in srgb, var(--color-background-secondary) 85%, transparent)
  );
  color-scheme: var(--theme, light);
}

.select-trigger:focus-visible {
  outline: none;
}

.select-dropdown {
  background: color-mix(in srgb, var(--color-background-primary) 98%, transparent);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  animation: select-dropdown-appear 180ms cubic-bezier(0.2, 0.8, 0.4, 1);
}

.select-option,
.select-native option,
.select-native optgroup {
  background-color: var(--select-option-bg);
  color: var(--select-option-color);
  font-weight: 500;
}

.select-option {
  transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
  border: 1px solid transparent;
}

.select-option:hover:not(.is-selected) {
  background-color: var(--select-option-hover);
  border-color: var(--select-option-border);
  color: var(--color-text-primary);
}

.select-option.is-highlighted:not(.is-selected) {
  background-color: var(--select-option-hover);
  border-color: var(--select-option-border);
  color: var(--color-text-primary);
}

.select-option.is-selected {
  background-color: var(--select-option-selected-bg);
  color: var(--select-option-selected-color);
  box-shadow: 0 12px 20px rgba(14, 165, 233, 0.25);
}

/* Native select fallback */
.select-native option:checked,
.select-native option:focus,
.select-native option:hover {
  background-color: var(--select-option-hover);
  color: var(--select-option-color);
}

.select-native option:checked {
  background-color: var(--select-option-selected-bg);
  color: var(--select-option-selected-color);
}

@keyframes select-dropdown-appear {
  0% {
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

</style>
