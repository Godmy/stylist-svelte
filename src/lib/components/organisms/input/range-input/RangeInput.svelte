<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    min?: number;
    max?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    disabled?: boolean;
    showInputFields?: boolean;
    class?: string;
    rangeClass?: string;
    thumbClass?: string;
    inputClass?: string;
    onInput?: (values: { min: number; max: number }) => void;
    onChange?: (values: { min: number; max: number }) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    min = 0,
    max = 100,
    minValue = min,
    maxValue = max,
    step = 1,
    disabled = false,
    showInputFields = true,
    class: className = '',
    rangeClass = '',
    thumbClass = '',
    inputClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let minVal = $state(minValue);
  let maxVal = $state(maxValue);

  // Update local state when prop values change
  $effect(() => {
    if (minVal !== minValue) minVal = minValue;
    if (maxVal !== maxValue) maxVal = maxValue;
  });

  // Ensure minVal is not greater than maxVal
  $effect(() => {
    if (minVal > maxVal) {
      minVal = maxVal;
    }
    if (maxVal < minVal) {
      maxVal = minVal;
    }
  });

  // Calculate the left and width positions for the range highlight
  $effect(() => {
    const range = max - min;
    const leftPos = ((minVal - min) / range) * 100;
    const width = ((maxVal - minVal) / range) * 100;
    
    const rangeElement = document.getElementById('range-slider');
    if (rangeElement) {
      rangeElement.style.setProperty('--min-pos', `${leftPos}%`);
      rangeElement.style.setProperty('--max-width', `${width}%`);
    }
  });

  function handleMinInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    let newMin = Math.min(Math.max(value, min), max);
    // Ensure min doesn't exceed max
    newMin = Math.min(newMin, maxVal);
    
    minVal = newMin;
    
    if (onInput) {
      onInput({ min: minVal, max: maxVal });
    }
  }

  function handleMaxInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    let newMax = Math.min(Math.max(value, min), max);
    // Ensure max isn't less than min
    newMax = Math.max(newMax, minVal);
    
    maxVal = newMax;
    
    if (onInput) {
      onInput({ min: minVal, max: maxVal });
    }
  }

  function handleMinChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    let newMin = Math.min(Math.max(value, min), maxVal);
    minVal = newMin;
    
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }

  function handleMaxChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    let newMax = Math.min(Math.max(value, minVal), max);
    maxVal = newMax;
    
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }

  function handleMinSliderInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    // Ensure min doesn't exceed max
    const newMin = Math.min(value, maxVal);
    minVal = newMin;
    
    if (onInput) {
      onInput({ min: minVal, max: maxVal });
    }
  }

  function handleMaxSliderInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    
    // Ensure max isn't less than min
    const newMax = Math.max(value, minVal);
    maxVal = newMax;
    
    if (onInput) {
      onInput({ min: minVal, max: maxVal });
    }
  }
</script>

<div class={`w-full ${className}`} {...restProps}>
  <div class="relative w-full">
    <!-- Range slider -->
    <div class="relative h-10">
      <!-- Highlighted range -->
      <div 
        id="range-slider"
        class="absolute top-1/2 left-0 w-full h-2 -mt-1"
      >
        <div class="absolute top-1/2 left-0 w-full h-2 -mt-1 bg-gray-200 rounded-lg"></div>
        <div 
          class="absolute top-1/2 h-2 bg-blue-500 rounded-lg -mt-1 ${rangeClass}"
          style="left: var(--min-pos, 0%); width: var(--max-width, 100%);"
        ></div>
      </div>
      
      <!-- Min slider -->
      <input
        type="range"
        class="absolute top-1/2 w-full h-2 opacity-0 cursor-pointer ${disabled ? 'cursor-not-allowed' : ''}"
        min={min}
        max={max}
        step={step}
        bind:value={minVal}
        oninput={handleMinSliderInput}
        onchange={handleMinChange}
        disabled={disabled}
        style={`z-index: 2;`}
      />
      
      <!-- Max slider -->
      <input
        type="range"
        class="absolute top-1/2 w-full h-2 opacity-0 cursor-pointer ${disabled ? 'cursor-not-allowed' : ''}"
        min={min}
        max={max}
        step={step}
        bind:value={maxVal}
        oninput={handleMaxSliderInput}
        onchange={handleMaxChange}
        disabled={disabled}
        style={`z-index: 1;`}
      />
    </div>
  </div>
  
  <!-- Input fields -->
  {#if showInputFields}
    <div class="flex justify-between mt-4">
      <input
        type="number"
        class={`w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${inputClass} ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        }`}
        min={min}
        max={maxVal}
        step={step}
        bind:value={minVal}
        oninput={handleMinInput}
        onchange={handleMinChange}
        disabled={disabled}
      />
      <input
        type="number"
        class={`w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${inputClass} ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        }`}
        min={minVal}
        max={max}
        step={step}
        bind:value={maxVal}
        oninput={handleMaxInput}
        onchange={handleMaxChange}
        disabled={disabled}
      />
    </div>
  {/if}
  
  <!-- Values display -->
  <div class="flex justify-between mt-2 text-sm text-gray-600">
    <span>Min: {minVal}</span>
    <span>Max: {maxVal}</span>
  </div>
</div>