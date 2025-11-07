<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    id: string;
    label?: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    disabled?: boolean;
    description?: string;
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
    class: className = '',
    ...restProps
  }: Props = $props();

  const percentage = $derived(((value - min) / (max - min)) * 100);
  const trackStyle = $derived(
    `background: linear-gradient(to right, rgb(99 102 241) 0%, rgb(99 102 241) ${percentage}%, rgb(229 231 235) ${percentage}%, rgb(229 231 235) 100%)`
  );
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
          {value}
        </span>
      {/if}
    </div>
  {/if}

  <div class="relative py-1">
    <input
      id={id}
      type="range"
      class="w-full h-2 appearance-none rounded-full slider-thumb focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 disabled:opacity-50"
      bind:value
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      aria-describedby={description ? `${id}-description` : undefined}
      style={trackStyle}
      {...restProps}
    />
  </div>

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
