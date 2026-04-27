<script lang="ts">
  import { createQuantitySelectorState } from '$stylist/control/function/state/quantity-selector';
  import type { SlotQuantitySelector as IQuantitySelectorProps } from '$stylist/control/interface/slot/quantity-selector';
  import { Icon as BaseIcon } from '$stylist';

  const Plus = 'plus';
  const Minus = 'minus';

  let {
    value = 1,
    min = 1,
    max = 99,
    step = 1,
    disabled = false,
    variant = 'default',
    size = 'md',
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    onValueChange,
    onIncrement,
    onDecrement,
    showInput = true,
    showButtons = true,
    label,
    ...restProps
  }: IQuantitySelectorProps = $props();

  const state = createQuantitySelectorState({
    value,
    min,
    max,
    step,
    disabled,
    variant,
    size,
    class: hostClass,
    inputClass,
    buttonClass,
    onValueChange,
    onIncrement,
    onDecrement,
    showInput,
    showButtons,
    label
  });
</script>

<div class={state.rootClasses} {...restProps}>
  {#if label}
    <label for={state.inputId} class={state.labelClasses}>{label}</label>
  {/if}

  <div class={state.containerClasses}>
    {#if showButtons}
      <button
        type="button"
        class={state.decrementButtonClasses}
        onclick={state.decrement}
        disabled={disabled || state.quantity <= min}
        aria-label="Decrease quantity"
      >
        <BaseIcon name={Minus} class={state.iconClasses} />
      </button>
    {/if}

    {#if showInput}
      <input
        id={state.inputId}
        type="number"
        class={state.inputClasses}
        value={state.quantity}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        oninput={state.handleInputChange}
        aria-label="Quantity selector"
      />
    {/if}

    {#if showButtons}
      <button
        type="button"
        class={state.incrementButtonClasses}
        onclick={state.increment}
        disabled={disabled || state.quantity >= max}
        aria-label="Increase quantity"
      >
        <BaseIcon name={Plus} class={state.iconClasses} />
      </button>
    {/if}
  </div>
</div>
