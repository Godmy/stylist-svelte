<script lang="ts">
	import type { SlotDatePicker as IDatePickerProps } from '$stylist/calendar/interface/slot/date-picker';
	import createDatePickerState from '$stylist/calendar/function/state/date-picker/index.svelte';

	let props: IDatePickerProps = $props();
	const state = createDatePickerState(props);
</script>

<div class="date-picker">
	<input
		type="text"
		readonly
		value={state.displayValue}
		placeholder={state.placeholder}
		class="date-picker__input"
		onclick={state.openPicker}
		disabled={state.disabled}
		{...props}
	/>

	{#if state.isOpen && !state.disabled}
		<input
			type="date"
			bind:value={state.internalValue}
			onchange={state.handleDateChange}
			min={state.minValue}
			max={state.maxValue}
			class="date-picker__calendar"
			style="width: fit-content;"
		/>
	{/if}
</div>

<style>
	.date-picker {
		position: relative;
		display: inline-block;
	}

	.date-picker__input {
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem;
	}

	.date-picker__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-200);
	}

	.date-picker__calendar {
		position: absolute;
		inset-block-start: 100%;
		inset-inline-start: 0;
		z-index: var(--z-index-docked);
		margin-block-start: 0.25rem;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
</style>
