<script lang="ts">
  import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
  import type { RangeInputProps } from '$stylist/input/interface/component/range-input/other';
  import { createRangeInputState } from '$stylist/input/function/state/range-input';

  let props: RangeInputProps = $props();
  const state = createRangeInputState(props);
</script>

<div class={InteractionInputStyleManager.root('c-range-input w-full', state.className)}>
  <div class="relative h-8">
    <div class={`absolute top-1/2 -translate-y-1/2 h-2 w-full bg-[var(--color-background-tertiary)] rounded ${state.rangeClass}`}></div>
    <input type="range" class="absolute w-full" min={state.min} max={state.max} step={state.step} bind:value={state.minVal} oninput={(e) => state.update('min', Number((e.target as HTMLInputElement).value))} onchange={state.commit} disabled={state.disabled} />
    <input type="range" class="absolute w-full" min={state.min} max={state.max} step={state.step} bind:value={state.maxVal} oninput={(e) => state.update('max', Number((e.target as HTMLInputElement).value))} onchange={state.commit} disabled={state.disabled} />
  </div>

  {#if state.showInputFields}
    <div class="flex justify-between mt-3 gap-3">
      <input type="number" class={InteractionInputStyleManager.input(`w-24 px-2 py-1 ${state.inputClass}`)} bind:value={state.minVal} oninput={(e) => state.update('min', Number((e.target as HTMLInputElement).value))} onchange={state.commit} />
      <input type="number" class={InteractionInputStyleManager.input(`w-24 px-2 py-1 ${state.inputClass}`)} bind:value={state.maxVal} oninput={(e) => state.update('max', Number((e.target as HTMLInputElement).value))} onchange={state.commit} />
    </div>
  {/if}
</div>






