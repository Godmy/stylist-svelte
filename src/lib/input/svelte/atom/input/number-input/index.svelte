<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { INumberInputProps } from '$stylist/input/interface/component/number-input/other';
  import { Icon as BaseIcon } from '$stylist';
  import { createNumberInputState } from '$stylist/input/function/state/number-input';

  const Minus = 'minus';
  const Plus = 'plus';

  let props: INumberInputProps & InteractionHTMLAttributes<HTMLInputElement> = $props();
  const state = createNumberInputState(props);
</script>

<div class={state.containerClasses}>
  <button
    type="button"
    class={state.decrementButtonClasses}
    onclick={state.decrement}
    disabled={state.disabled || state.readonly || state.currentValue <= state.min}
  >
    <BaseIcon name={Minus} class="w-4 h-4" />
  </button>
  
  <input
    type="number"
    class={state.inputClasses}
    bind:value={state.currentValue}
    min={state.min}
    max={state.max}
    step={state.step}
    disabled={state.disabled}
    readonly={state.readonly}
    oninput={state.handleInput}
    {...props}
  />
  
  <button
    type="button"
    class={state.incrementButtonClasses}
    onclick={state.increment}
    disabled={state.disabled || state.readonly || state.currentValue >= state.max}
  >
    <BaseIcon name={Plus} class="w-4 h-4" />
  </button>
</div>






