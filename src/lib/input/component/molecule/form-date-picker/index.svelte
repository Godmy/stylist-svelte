<script lang="ts">
	import type { SlotFormDatePicker as IFormDatePickerProps } from '$stylist/input/interface/slot/form-date-picker';
	import createFormDatePickerState from '$stylist/input/function/state/form-date-picker/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const Calendar = 'calendar';

	let props: IFormDatePickerProps = $props();
	const state = createFormDatePickerState(props);
</script>

<div class={`date-picker-container relative ${state.hostClass}`}>
	<label
		for="date-picker-input"
		class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
	>
		{state.label}
	</label>

	<div class="relative">
		<input
			id="date-picker-hidden"
			type="date"
			class="hidden"
			value={state.selectedDate}
			min={state.minDate}
			max={state.maxDate}
			oninput={state.handleInput}
			onchange={state.handleChange}
			{...props}
		/>

		<input
			id="date-picker-input"
			type="text"
			class={`block w-full rounded-md border border-[var(--color-border-primary)] py-2 pr-10 pl-3 shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none ${state.inputClass}`}
			placeholder={state.placeholder}
			value={state.selectedDate ? state.formatDate(state.selectedDate) : ''}
			readonly
			onclick={state.toggleCalendar}
			aria-label={state.label || 'Select date'}
		/>

		<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
			<BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
		</div>
	</div>

	{#if state.showCalendar}
		<div
			class={`absolute z-[var(--z-index-docked)] mt-1 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3 shadow-lg ${state.calendarClass}`}
		>
			<input
				type="date"
				class="block w-full rounded-md border border-[var(--color-border-primary)] p-2"
				value={state.selectedDate}
				min={state.minDate}
				max={state.maxDate}
				onchange={(e) => {
					state.handleChange(e);
					state.closeCalendar();
				}}
			/>
		</div>
	{/if}

	{#if state.helperText}
		<p class="mt-1 text-xs text-[var(--color-text-secondary)]">{state.helperText}</p>
	{/if}

	{#if state.error}
		<p class="mt-1 text-xs text-[var(--color-danger-600)]">{state.error}</p>
	{/if}
</div>

<style>
	.date-picker-container {
		position: relative;
	}

	.date-picker-container input[type='date']::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
</style>
