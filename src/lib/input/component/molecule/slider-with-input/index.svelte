<script lang="ts">
	import type { SlotSliderWithInput as ISliderWithInputProps } from '$stylist/input/interface/slot/slider-with-input';
	import { createSliderWithInputState } from '$stylist/input/function/state/slider-with-input';

	let props: ISliderWithInputProps = $props();
	const state = createSliderWithInputState(props);
</script>

<div class={`flex items-center space-x-4 ${state.className}`} {...props}>
	<input
		type="range"
		class={`h-2 w-full cursor-pointer appearance-none rounded-lg bg-[var(--color-background-tertiary)] ${
			state.disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : ''
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
			class={`w-${state.inputWidth.replace('px', '')} rounded-md border border-[var(--color-border-primary)] px-3 py-2 shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none ${
				state.disabled ? 'cursor-not-allowed bg-[var(--color-background-secondary)]' : ''
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
