<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Minus, Plus } from 'lucide-svelte';
  import { createNumberInputState } from '$stylist/design-system/models/number-input.svelte';

  type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    readonly?: boolean;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    buttonWrapperClass?: string;
    onValueInput?: (value: number) => void;
    onValueChange?: (value: number) => void;
    onChange?: (value: number) => void;
  } & HTMLAttributes<HTMLInputElement>;

  let {
    value = 0,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    disabled = false,
    readonly = false,
    class: className = '',
    inputClass = '',
    buttonClass = '',
    buttonWrapperClass = '',
    onValueInput,
    onValueChange,
    onChange,
    ...restProps
  }: Props = $props();

  let currentValue = $state<number>(value);
  const numberInputState = $derived(
    createNumberInputState({
      disabled,
      readonly,
      class: className,
      inputClass,
      buttonClass
    })
  );

  function increment() {
    if (disabled || readonly) return;
    const newValue = currentValue + step;
    if (newValue <= max) {
      currentValue = newValue;
      emitChange();
    }
  }

  function decrement() {
    if (disabled || readonly) return;
    const newValue = currentValue - step;
    if (newValue >= min) {
      currentValue = newValue;
      emitChange();
    }
  }

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    if (!isNaN(newValue)) {
      // Make sure the value is within the allowed range
      let clampedValue = Math.min(Math.max(newValue, min), max);
      
      // Ensure it's a multiple of step (if step is defined)
      if (step !== undefined && step !== 0) {
        clampedValue = Math.round(clampedValue / step) * step;
      }
      
      currentValue = clampedValue;
      emitChange();
    }
  }

  function emitChange() {
    onValueInput?.(currentValue);
    onValueChange?.(currentValue);
    onChange?.(currentValue);
  }
</script>

<div class={numberInputState.containerClasses}>
  <button
    type="button"
    class={numberInputState.decrementButtonClasses}
    onclick={decrement}
    disabled={disabled || readonly || currentValue <= min}
  >
    <Minus class="w-4 h-4" />
  </button>
  
  <input
    type="number"
    class={numberInputState.inputClasses}
    bind:value={currentValue}
    min={min}
    max={max}
    step={step}
    disabled={disabled}
    readonly={readonly}
    oninput={handleInput}
    {...restProps}
  />
  
  <button
    type="button"
    class={numberInputState.incrementButtonClasses}
    onclick={increment}
    disabled={disabled || readonly || currentValue >= max}
  >
    <Plus class="w-4 h-4" />
  </button>
</div>



