<script lang="ts">
	import { createAudioSliderState } from '$stylist/media/function/state/audio-slider';
	import type { AudioSliderProps } from '$stylist/media/type/struct/audio-slider';

	let props: AudioSliderProps = $props();
	const state = createAudioSliderState(props);
</script>

<div class={`w-full ${state.className}`} {...state.restProps}>
	<div class="flex items-center">
		{#if state.label}
			<label for="audio-slider" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
				>{state.label}</label
			>
		{/if}
		<input
			id="audio-slider"
			type="range"
			min={state.min}
			max={state.max}
			step={state.step}
			bind:value={state.value}
			class="w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer accent-blue-500"
		/>
		{#if state.showValue}
			<span class="ml-4 w-12 text-center font-medium">{state.value}</span>
		{/if}
	</div>
</div>
