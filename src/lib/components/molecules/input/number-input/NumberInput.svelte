<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Minus, Plus } from 'lucide-svelte';

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
    onChange,
    ...restProps
  }: Props = $props();

  let currentValue = $state<number>(value);

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
    if (onChange) {
      onChange(currentValue);
    }
  }
</script>

<div class={`relative inline-flex items-center ${className}`}>
  <button
    type="button"
    class={`p-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ${buttonClass} ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onclick={decrement}
    disabled={disabled || readonly || currentValue <= min}
  >
    <Minus class="w-4 h-4" />
  </button>
  
  <input
    type="number"
    class={`w-20 p-2 text-center border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      disabled ? 'bg-gray-100' : 'bg-white'
    } ${inputClass}`}
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
    class={`p-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ${buttonClass} ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onclick={increment}
    disabled={disabled || readonly || currentValue >= max}
  >
    <Plus class="w-4 h-4" />
  </button>
</div>