<script lang="ts">
  import type { RangeInputProps } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

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
    inputClass = '',
    onInput,
    onChange,
    ...restProps
  }: RangeInputProps = $props();

  let minVal = $state(minValue);
  let maxVal = $state(maxValue);

  function update(kind: 'min' | 'max', value: number) {
    if (kind === 'min') minVal = Math.min(Math.max(value, min), maxVal);
    if (kind === 'max') maxVal = Math.max(Math.min(value, max), minVal);
    onInput?.({ min: minVal, max: maxVal });
  }

  function commit() {
    onChange?.({ min: minVal, max: maxVal });
  }
</script>

<div class={InteractionInputStyleManager.root('c-range-input w-full', className)} {...restProps}>
  <div class="relative h-8">
    <div class={`absolute top-1/2 -translate-y-1/2 h-2 w-full bg-gray-200 rounded ${rangeClass}`}></div>
    <input type="range" class="absolute w-full" min={min} max={max} step={step} bind:value={minVal} oninput={(e) => update('min', Number((e.target as HTMLInputElement).value))} onchange={commit} disabled={disabled} />
    <input type="range" class="absolute w-full" min={min} max={max} step={step} bind:value={maxVal} oninput={(e) => update('max', Number((e.target as HTMLInputElement).value))} onchange={commit} disabled={disabled} />
  </div>

  {#if showInputFields}
    <div class="flex justify-between mt-3 gap-3">
      <input type="number" class={InteractionInputStyleManager.input(`w-24 px-2 py-1 ${inputClass}`)} bind:value={minVal} oninput={(e) => update('min', Number((e.target as HTMLInputElement).value))} onchange={commit} />
      <input type="number" class={InteractionInputStyleManager.input(`w-24 px-2 py-1 ${inputClass}`)} bind:value={maxVal} oninput={(e) => update('max', Number((e.target as HTMLInputElement).value))} onchange={commit} />
    </div>
  {/if}
</div>
