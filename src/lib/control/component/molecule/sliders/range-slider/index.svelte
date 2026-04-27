<script lang="ts">
  import type { RangeSliderProps } from '$stylist/control/type/struct/range-slider-props';
  import { createRangeSliderState } from '$stylist/control/function/state/range-slider';

  let props: RangeSliderProps = $props();
  const state = createRangeSliderState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      id: _id,
      label: _label,
      value: _value,
      min: _min,
      max: _max,
      step: _step,
      showValue: _showValue,
      disabled: _disabled,
      description: _description,
      range: _range,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClass}>
  {#if state.label || state.showValue}
    <div class={state.labelContainerClass}>
      {#if state.label}
        <label for={state.id} class={state.labelClass}>
          {state.label}
        </label>
      {/if}
      {#if state.showValue}
        <span class={state.valueDisplayClass}>
          {#if state.isRange && Array.isArray(state.value)}
            {state.value[0]} - {state.value[1]}
          {:else}
            {state.value}
          {/if}
        </span>
      {/if}
    </div>
  {/if}

  <div class={state.trackContainerClass}>
    <div class={state.trackClass}></div>
    <div class={state.fillClass} style={state.fillStyle}></div>

    {#if state.isRange && Array.isArray(state.value)}
      <!-- Range slider with two thumbs -->
      <input
        id={`${state.id}-min`}
        type="range"
        class={state.thumbClass}
        style={`left: ${state.minPercentage}%`}
        bind:value={state.value[0]}
        min={state.min}
        max={state.max}
        step={state.step}
        disabled={state.disabled}
        aria-describedby={state.description ? `${state.id}-description` : undefined}
        {...restProps}
      />
      <input
        id={`${state.id}-max`}
        type="range"
        class={state.thumbClass}
        style={`left: ${state.maxPercentage}%`}
        bind:value={state.value[1]}
        min={state.min}
        max={state.max}
        step={state.step}
        disabled={state.disabled}
        aria-describedby={state.description ? `${state.id}-description` : undefined}
        {...restProps}
      />
    {:else}
      <!-- Single slider -->
      <input
        id={state.id}
        type="range"
        class={state.thumbClass}
        style={`left: ${state.maxPercentage}%`}
        bind:value={state.value}
        min={state.min}
        max={state.max}
        step={state.step}
        disabled={state.disabled}
        aria-describedby={state.description ? `${state.id}-description` : undefined}
        {...restProps}
      />
    {/if}
  </div>

  <div class={state.minMaxLabelClass}>
    <span>{state.min}</span>
    <span>{state.max}</span>
  </div>

  {#if state.description}
    <p id={`${state.id}-description`} class={state.descriptionClass}>
      {state.description}
    </p>
  {/if}
</div>

<style>
:root {
  --range-slider-thumb-size: 1rem;
  --range-slider-thumb-background: var(--color-background-primary);
  --range-slider-thumb-border-color: var(--color-primary-500);
  --range-slider-thumb-shadow: var(--shadow-sm);
}

.slider-thumb::-webkit-slider-thumb {
  appearance: none;
  height: var(--range-slider-thumb-size);
  width: var(--range-slider-thumb-size);
  border-radius: var(--border-radius-full);
  background-color: var(--range-slider-thumb-background);
  border: 2px solid var(--range-slider-thumb-border-color);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.slider-thumb:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
  opacity: var(--opacity-60);
}

.slider-thumb::-moz-range-thumb {
  height: var(--range-slider-thumb-size);
  width: var(--range-slider-thumb-size);
  border-radius: var(--border-radius-full);
  background-color: var(--range-slider-thumb-background);
  border: 2px solid var(--range-slider-thumb-border-color);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.slider-thumb:disabled::-moz-range-thumb {
  cursor: not-allowed;
  opacity: var(--opacity-60);
}

.slider-thumb::-moz-range-track,
.slider-thumb::-webkit-slider-runnable-track {
  background-color: transparent;
}

</style>





