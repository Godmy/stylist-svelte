<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { createEventDispatcher } from 'svelte';

  import type { IRangeSliderProps } from './types';
  import { RangeSliderStyleManager } from './styles';

  /**
   * RangeSlider component - A slider with single or dual handles
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles slider rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other input components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param id - Unique identifier for the slider
   * @param label - Label text for the slider
   * @param value - Current value(s) of the slider
   * @param min - Minimum value of the slider
   * @param max - Maximum value of the slider
   * @param step - Step increment for the slider
   * @param showValue - Whether to show the current value
   * @param disabled - Whether the slider is disabled
   * @param description - Description text for the slider
   * @param range - Whether to use range mode (dual handles)
   * @param class - Additional CSS classes
   * @returns A slider control with optional range functionality
   */
  type Props = IRangeSliderProps;

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

  const dispatch = createEventDispatcher();

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
    RangeSliderStyleManager.getSingleSliderRangeStyle(minPercentage, maxPercentage)
  );

  function updateRange(value: [number, number]) {
    internalValue = value;
  }
</script>

<div class={RangeSliderStyleManager.getContainerClasses(className)}>
  {#if label || showValue}
    <div class={RangeSliderStyleManager.getMainContainerClasses()}>
      {#if label}
        <label for={id} class={RangeSliderStyleManager.getLabelClasses()}>
          {label}
        </label>
      {/if}
      {#if showValue}
        <span class={RangeSliderStyleManager.getValueClasses()}>
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
      <div class={RangeSliderStyleManager.getRangeTrackClasses()}>
        <div
          class={RangeSliderStyleManager.getRangeFillClasses()}
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
          class={RangeSliderStyleManager.getRangeThumbClasses()}
          style={`left: ${minPercentage}%;`}
          class:disabled
        ></div>
        <div
          class={RangeSliderStyleManager.getRangeThumbClasses()}
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
        class={RangeSliderStyleManager.getSliderThumbClasses()}
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

  <div class={RangeSliderStyleManager.getMinMaxLabelClasses()}>
    <span>{min}</span>
    <span>{max}</span>
  </div>

  {#if description}
    <p id={`${id}-description`} class={RangeSliderStyleManager.getDescriptionClasses()}>
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