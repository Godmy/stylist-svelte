<script lang="ts">
  import type { SlotSliderWithInput as ISliderWithInputProps } from '$stylist/input/interface/slot/slider-with-input';
  import { createSliderWithInputState } from '$stylist/input/function/state/slider-with-input';

  let props: ISliderWithInputProps = $props();
  const state = createSliderWithInputState(props);
</script>

<div class={`flex items-center space-x-4 ${state.className}`} {...props}>
  <input
    type="range"
    class={`w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer ${
      state.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
    } ${state.sliderClass}`}
    min={state.min}
    max={state.max}
    step={state.step}
    bind:value={state.currentValue}
    oninput={state.handleSliderChange}
    onchange={(e) => {
      const nextValue = parseFloat((e.target as HTMLInputElement).value);
      props.onValueChange?.(nextValue);
      props.onChange?.(nextValue);
    }}
    disabled={state.disabled}
  />
  
  {#if state.showInput}
    <input
      type="number"
      class={`w-${state.inputWidth.replace('px', '')} px-3 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] ${
        state.disabled ? 'bg-[var(--color-background-secondary)] cursor-not-allowed' : ''
      } ${state.inputClass}`}
      min={state.min}
      max={state.max}
      step={state.step}
      bind:value={state.currentValue}
      oninput={state.handleInputChange}
      onblur={state.handleInputBlur}
      disabled={state.disabled}
    />
  {/if}
</div>




