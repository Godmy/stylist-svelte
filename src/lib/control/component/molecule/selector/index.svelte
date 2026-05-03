<script lang="ts">
  import type { SelectorProps } from '$stylist/control/type/struct/selector-props';
  import { createSelectorState } from '$stylist/control/function/state/selector';

  let props: SelectorProps = $props();
  const state = createSelectorState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      id: _id,
      label: _label,
      value: _value,
      options: _options,
      errors: _errors,
      required: _required,
      disabled: _disabled,
      placeholder: _placeholder,
      open: _open,
      onToggle: _onToggle,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClass}>
  {#if state.label}
    <label
      id={state.labelId}
      for={state.nativeId}
      class={state.labelClass}
    >
      {state.label}
      {#if state.required}
        <span class="text-[--color-danger-500]">*</span>
      {/if}
    </label>
  {/if}

  <div class={state.fieldWrapperClass}>
    <button
      id={state.triggerId}
      type="button"
      class={state.selectButtonClass}
      aria-haspopup="listbox"
      aria-expanded={state.open}
      aria-labelledby={state.labelId}
      onclick={state.handleClick}
      disabled={state.disabled}
    >
      <span class={state.valueClass}>
        {#if state.selectedOption}
          {state.selectedOption.label}
        {:else}
          {state.placeholder ?? 'Select an option'}
        {/if}
      </span>
      <span class={state.chevronClass} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <!-- Native select for form integration -->
    <select
      id={state.nativeId}
      bind:value={props.value}
      class="absolute opacity-[var(--opacity-0)] w-0 h-0 overflow-hidden"
      disabled={state.disabled}
      required={state.required}
      aria-hidden="true"
      aria-invalid={state.hasError}
      aria-describedby={state.hasError ? state.errorId : undefined}
      {...restProps}
    >
      {#if state.placeholder}
        <option value="">{state.placeholder}</option>
      {/if}
      {#each state.options as option}
        <option value={option.value}>
          {option.label}
        </option>
      {/each}
    </select>
  </div>

  {#if state.hasError}
    <p id={state.errorId} class={state.errorClass}>
      {#each state.errors as error, i}
        {error}{i < state.errors.length - 1 ? ' ' : ''}
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
  --select-option-border: color-mix(in srgb, var(--color-text-primary) 8%, transparent);
}

[data-theme='dark'],
.dark {
  --select-option-bg: color-mix(in srgb, var(--color-background-secondary) 96%, transparent);
  --select-option-color: var(--color-text-primary);
  --select-option-hover: color-mix(in srgb, var(--color-primary-300) 25%, var(--color-background-secondary));
  --select-option-selected-bg: color-mix(in srgb, var(--color-primary-400) 80%, transparent);
  --select-option-selected-color: var(--color-text-inverse);
  --select-option-border: color-mix(in srgb, var(--color-text-primary) 35%, transparent);
}

.select-native {
  position: absolute;
  inset: 0;
  width: 1px;
  height: 1px;
  opacity: var(--opacity-0);
  pointer-events: none;
}

.select-trigger {
  min-height: var(--size-2_875rem);
  letter-spacing: var(--letter-spacing-narrow);
  background-image: var(--gradient-custom12);
  color-scheme: var(--theme, light);
}

.select-trigger:focus-visible {
  outline: none;
}

.select-dropdown {
  background: color-mix(in srgb, var(--color-background-primary) 98%, transparent);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  animation: select-dropdown-appear var(--duration-180) var(--easing-ease-entrance);
}

.select-option,
.select-native option {
  background-color: var(--select-option-bg);
  color: var(--select-option-color);
  font-weight: var(--font-weight-medium);
}

.select-option {
  transition: background var(--duration-150) var(--animation-ease), color var(--duration-150) var(--animation-ease), transform var(--duration-150) var(--animation-ease);
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
  box-shadow: var(--shadow-custom23);
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
    opacity: var(--opacity-0);
    transform: translateY(-6px) scale(0.98);
  }
  100% {
    opacity: var(--opacity-100);
    transform: translateY(0) scale(1);
  }
}

</style>






