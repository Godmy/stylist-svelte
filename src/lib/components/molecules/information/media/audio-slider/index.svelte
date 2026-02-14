<script lang="ts">
  let {
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    label = '',
    showValue = true,
    class: className = ''
  } = $props<{
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    showValue?: boolean;
    class?: string;
  }>();

  let localValue = $state(value);

  $effect(() => {
    localValue = value;
  });
</script>

<div class={`w-full ${className}`}>
  <div class="flex items-center">
    {#if label}
      <label for="audio-slider" class="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {/if}
    <input
      id="audio-slider"
      type="range"
      min={min}
      max={max}
      step={step}
      bind:value={localValue}
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
    />
    {#if showValue}
      <span class="ml-4 w-12 text-center font-medium">{localValue}</span>
    {/if}
  </div>
</div>