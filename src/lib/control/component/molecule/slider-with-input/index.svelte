<script lang="ts">
	import type { SlotSliderWithInput as ISliderWithInputProps } from '$stylist/control/interface/slot/slider-with-input';
	import createSliderWithInputState from '$stylist/control/function/state/slider-with-input/index.svelte';

	let props: ISliderWithInputProps = $props();
	const state = createSliderWithInputState(props);
</script>

<div class={`slider-with-input ${state.className}`} {...props}>
	<input
		type="range"
		class={`slider-with-input__range ${state.disabled ? 'slider-with-input__range--disabled' : ''} ${state.sliderClass}`}
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
			class={`slider-with-input__number ${state.disabled ? 'slider-with-input__number--disabled' : ''} ${state.inputClass}`}
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

<style>
	.slider-with-input {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.slider-with-input__range {
		height: 0.5rem;
		width: 100%;
		cursor: pointer;
		appearance: none;
		border-radius: var(--border-radius-full, 9999px);
		background-color: var(--color-background-tertiary);
	}

	.slider-with-input__range--disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.slider-with-input__number {
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.slider-with-input__number:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 2px var(--color-primary-100);
	}

	.slider-with-input__number--disabled {
		cursor: not-allowed;
		background-color: var(--color-background-secondary);
	}
</style>
