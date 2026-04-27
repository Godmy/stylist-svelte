<script lang="ts">
  import type { ToggleButtonGroupProps } from '$stylist/control/type/struct/toggle-button-group-props';
  import { createToggleButtonGroupState } from '$stylist/control/function/state/toggle-button-group';

  let {
    options = [],
    value = '',
    multiple = false,
    disabled = false,
    size = 'md',
    class: className = '',
    buttonClass = '',
    activeButtonClass = '',
    inactiveButtonClass = '',
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: ToggleButtonGroupProps = $props();
  const state = createToggleButtonGroupState({
    options,
    value,
    multiple,
    disabled,
    size,
    class: className,
    buttonClass,
    activeButtonClass,
    inactiveButtonClass,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  });
</script>

<div class={`inline-flex rounded-md shadow-sm ${className}`} role="group" {...restProps}>
  {#each options as option, index}
    <button
      type="button"
      class={`relative inline-flex items-center border ${
        index === 0 ? 'rounded-l-md' : 
        index === options.length - 1 ? 'rounded-r-md' : 
        '-ml-px'
      } border-[var(--color-border-primary)] font-medium focus:z-[var(--z-index-docked)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] ${
        state.isSelected(option.value) 
          ? `bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] ${activeButtonClass}` 
          : `bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] ${inactiveButtonClass}`
      } ${
        option.disabled || disabled 
          ? 'opacity-[var(--opacity-50)] cursor-not-allowed' 
          : 'cursor-pointer'
      } ${state.sizeClasses} ${buttonClass}`}
      onclick={() => state.handleToggle(option.value)}
      disabled={option.disabled || disabled}
      aria-pressed={state.isSelected(option.value)}
    >
      {option.label}
    </button>
  {/each}
</div>





