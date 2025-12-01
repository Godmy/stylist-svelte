<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    showInput?: boolean;
    inputWidth?: string;
    class?: string;
    sliderClass?: string;
    inputClass?: string;
    onInput?: (value: number) => void;
    onChange?: (value: number) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showInput = true,
    inputWidth = '80px',
    class: className = '',
    sliderClass = '',
    inputClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let currentValue = $state<number>(value);

  // Update local state when value prop changes
  $effect(() => {
    if (currentValue !== value) {
      currentValue = value;
    }
  });

  function handleSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    currentValue = newValue;
    
    if (onInput) {
      onInput(newValue);
    }
  }

  function handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    // Ensure the value is within the allowed range
    const clampedValue = Math.min(Math.max(newValue, min), max);
    currentValue = clampedValue;
    
    if (onInput) {
      onInput(clampedValue);
    }
  }

  function handleInputBlur(e: FocusEvent) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    // If the input is invalid or empty, reset to the current value
    if (isNaN(value)) {
      target.value = currentValue.toString();
    } else {
      // Ensure the value is within the allowed range and on a valid step
      let clampedValue = Math.min(Math.max(value, min), max);
      
      if (step !== undefined && step !== 0) {
        clampedValue = Math.round(clampedValue / step) * step;
      }
      
      currentValue = clampedValue;
      target.value = clampedValue.toString();
      
      if (onChange) {
        onChange(clampedValue);
      }
    }
  }
</script>

<div class={`flex items-center space-x-4 ${className}`} {...restProps}>
  <input
    type="range"
    class={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    } ${sliderClass}`}
    min={min}
    max={max}
    step={step}
    bind:value={currentValue}
    oninput={handleSliderChange}
    onchange={(e) => {
      if (onChange) {
        onChange(parseFloat((e.target as HTMLInputElement).value));
      }
    }}
    disabled={disabled}
  />
  
  {#if showInput}
    <input
      type="number"
      class={`w-${inputWidth.replace('px', '')} px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : ''
      } ${inputClass}`}
      min={min}
      max={max}
      step={step}
      bind:value={currentValue}
      oninput={handleInputChange}
      onblur={handleInputBlur}
      disabled={disabled}
    />
  {/if}
</div>