<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  type Props = {
    id: string;
    label?: string;
    value?: number | [number, number];
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    disabled?: boolean;
    description?: string;
    range?: boolean; // New prop to indicate if it's a range slider
  } & Omit<HTMLInputAttributes, 'type' | 'value' | 'min' | 'max' | 'step'>;

  let {
    id,
    label,
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    showValue = true,
    disabled = false,
    description,
    range = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  // Handle both single value and range value
  let internalValue: number | [number, number] = $state(value);

  // For range slider, we need to handle two values
  let rangeMin = $state(min);
  let rangeMax = $state(min);

  // Calculate percentage for styling
  $effect(() => {
    if (range && Array.isArray(internalValue) && internalValue.length === 2) {
      [rangeMin, rangeMax] = internalValue;
    } else if (typeof internalValue === 'number') {
      rangeMin = min;
      rangeMax = internalValue;
    } else {
      rangeMin = min;
      rangeMax = min;
    }
  });

  const minPercentage = $derived(((rangeMin - min) / (max - min)) * 100);
  const maxPercentage = $derived(((rangeMax - min) / (max - min)) * 100);
  const trackStyle = $derived(
    `background: linear-gradient(to right,
      rgb(229 231 235) 0%,
      rgb(229 231 235) ${minPercentage}%,
      rgb(99 102 241) ${minPercentage}%,
      rgb(99 102 241) ${maxPercentage}%,
      rgb(229 231 235) ${maxPercentage}%,
      rgb(229 231 235) 100%)`
  );

  function updateRange(value: [number, number]) {
    internalValue = value;
  }
</script>

<div class="w-full {className}">
  {#if label || showValue}
    <div class="flex items-center justify-between mb-2">
      {#if label}
        <label for={id} class="text-sm font-medium text-gray-700">
          {label}
        </label>
      {/if}
      {#if showValue}
        <span class="text-sm text-gray-500">
          {#if range && Array.isArray(internalValue)}
            {internalValue[0]} - {internalValue[1]}
          {:else}
            {internalValue}
          {/if}
        </span>
      {/if}
    </div>
  {/if}

  {#if range}
    <!-- Range Slider Mode -->
    <div class="relative py-4">
      <!-- Track -->
      <div class="relative h-2 bg-gray-200 rounded-full">
        <div
          class="absolute top-0 h-2 bg-indigo-500 rounded-full"
          style={`left: ${minPercentage}%; width: ${maxPercentage - minPercentage}%`}
        ></div>
        <!-- Min thumb -->
        <input
          type="range"
          class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          bind:value={rangeMin}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          oninput={(e) => {
            if (rangeMax < parseFloat(e.currentTarget.value)) {
              rangeMax = parseFloat(e.currentTarget.value);
            }
            rangeMin = parseFloat(e.currentTarget.value);
            internalValue = [rangeMin, rangeMax];
            // Dispatch change event
            const event = new CustomEvent('change', { detail: internalValue });
            dispatch('change', { detail: internalValue });
          }}
          {...restProps}
        />
        <!-- Max thumb -->
        <input
          type="range"
          class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          bind:value={rangeMax}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          oninput={(e) => {
            if (rangeMin > parseFloat(e.currentTarget.value)) {
              rangeMin = parseFloat(e.currentTarget.value);
            }
            rangeMax = parseFloat(e.currentTarget.value);
            internalValue = [rangeMin, rangeMax];
            // Dispatch change event
            dispatch('change', { detail: internalValue });
          }}
          {...restProps}
        />
        <!-- Visual thumbs -->
        <div
          class="absolute top-1/2 w-4 h-4 -mt-2 -ml-2 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer"
          style={`left: ${minPercentage}%;`}
          class:disabled
        ></div>
        <div
          class="absolute top-1/2 w-4 h-4 -mt-2 -ml-2 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer"
          style={`left: ${maxPercentage}%;`}
          class:disabled
        ></div>
      </div>
    </div>
  {:else}
    <!-- Single Value Slider Mode -->
    <div class="relative py-1">
      <input
        id={id}
        type="range"
        class="w-full h-2 appearance-none rounded-full slider-thumb focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 disabled:opacity-50"
        bind:value={internalValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-describedby={description ? `${id}-description` : undefined}
        style={trackStyle}
        {...restProps}
      />
    </div>
  {/if}

  <div class="flex justify-between text-xs text-gray-400 mt-2">
    <span>{min}</span>
    <span>{max}</span>
  </div>

  {#if description}
    <p id={`${id}-description`} class="mt-2 text-sm text-gray-500">
      {description}
    </p>
  {/if}
</div>

<style>
  .slider-thumb::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 9999px;
    background-color: white;
    border: 2px solid rgb(99 102 241);
    box-shadow: 0 0 0 1px rgba(79, 70, 229, 0.2);
    cursor: pointer;
  }

  .slider-thumb:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .slider-thumb::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 9999px;
    background-color: white;
    border: 2px solid rgb(99 102 241);
    box-shadow: 0 0 0 1px rgba(79, 70, 229, 0.2);
    cursor: pointer;
  }

  .slider-thumb:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
</style>
