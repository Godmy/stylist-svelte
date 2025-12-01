<script lang="ts">
  import type { IRangeSliderProps } from './types';
  import './RangeSlider.css';

  /**
   * RangeSlider component - A slider with single or dual handles
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles slider rendering
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

  // Calculate percentage for styling
  let minPercentage = $derived(range && Array.isArray(value) ? ((value[0] - min) / (max - min)) * 100 : 0);

  let maxPercentage = $derived(
    range && Array.isArray(value)
      ? ((value[1] - min) / (max - min)) * 100
      : ((value as number) - min) / (max - min) * 100
  );

  // Define classes using utility classes
  let containerClass = `mb-4 ${className}`;
  let labelContainerClass = 'flex justify-between items-center mb-2';
  let labelClass = 'text-sm font-medium text-[--color-text-primary]';
  let valueDisplayClass = 'text-sm text-[--color-text-secondary]';
  let trackContainerClass = 'relative h-2';
  let trackClass = 'w-full h-2 bg-[--color-border-secondary] rounded-full';
  let fillClass = `absolute h-2 bg-[--color-primary-500] rounded-full ${disabled ? 'bg-[--color-border-secondary]' : ''}`;
  let thumbClass = `w-4 h-4 rounded-full ${disabled ? 'bg-[--color-text-disabled]' : 'bg-[--color-primary-600]'} cursor-pointer appearance-none absolute top-1/2 -translate-y-1/2`;
  let minMaxLabelClass = 'flex justify-between text-xs text-[--color-text-secondary] mt-1';
  let descriptionClass = 'text-xs text-[--color-text-secondary] mt-1';

  // Calculate fill position and width
  let fillStyle = $derived(
    range && Array.isArray(value)
      ? `left: ${minPercentage}%; width: ${maxPercentage - minPercentage}%`
      : `left: 0%; width: ${maxPercentage}%`
  );
</script>

<div class={containerClass}>
  {#if label || showValue}
    <div class={labelContainerClass}>
      {#if label}
        <label for={id} class={labelClass}>
          {label}
        </label>
      {/if}
      {#if showValue}
        <span class={valueDisplayClass}>
          {#if range && Array.isArray(value)}
            {value[0]} - {value[1]}
          {:else}
            {value}
          {/if}
        </span>
      {/if}
    </div>
  {/if}

  <div class={trackContainerClass}>
    <div class={trackClass}></div>
    <div class={fillClass} style={fillStyle}></div>

    {#if range && Array.isArray(value)}
      <!-- Range slider with two thumbs -->
      <input
        id={`${id}-min`}
        type="range"
        class={thumbClass}
        style={`left: ${minPercentage}%`}
        bind:value={value[0]}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-describedby={description ? `${id}-description` : undefined}
        {...restProps}
      />
      <input
        id={`${id}-max`}
        type="range"
        class={thumbClass}
        style={`left: ${maxPercentage}%`}
        bind:value={value[1]}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-describedby={description ? `${id}-description` : undefined}
        {...restProps}
      />
    {:else}
      <!-- Single slider -->
      <input
        id={id}
        type="range"
        class={thumbClass}
        style={`left: ${maxPercentage}%`}
        bind:value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-describedby={description ? `${id}-description` : undefined}
        {...restProps}
      />
    {/if}
  </div>

  <div class={minMaxLabelClass}>
    <span>{min}</span>
    <span>{max}</span>
  </div>

  {#if description}
    <p id={`${id}-description`} class={descriptionClass}>
      {description}
    </p>
  {/if}
</div>