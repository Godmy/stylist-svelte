<script lang="ts">
  import { createAudioSliderState, type AudioSliderProps } from '$stylist/media/function/state/audio-slider';

  let props: AudioSliderProps = $props();
  const vm = createAudioSliderState(props);

  let localValue = $state(vm.value);

  $effect(() => {
    localValue = vm.value;
  });
</script>

<div class={`w-full ${vm.className}`}>
  <div class="flex items-center">
    {#if vm.label}
      <label for="audio-slider" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">{vm.label}</label>
    {/if}
    <input
      id="audio-slider"
      type="range"
      min={vm.min}
      max={vm.max}
      step={vm.step}
      bind:value={localValue}
      class="w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer accent-blue-500"
    />
    {#if vm.showValue}
      <span class="ml-4 w-12 text-center font-medium">{localValue}</span>
    {/if}
  </div>
</div>
