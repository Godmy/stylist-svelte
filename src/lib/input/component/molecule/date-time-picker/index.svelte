<script lang="ts">
	import type { SlotDateTimePicker as IDateTimePickerProps } from '$stylist/input/interface/slot/date-time-picker';
	import { createDateTimePickerState } from '$stylist/input/function/state/date-time-picker';
	import FormDatePicker from '../form-date-picker/index.svelte';
	import { Icon as BaseIcon } from '$stylist/media';
	const Calendar = 'calendar';

	let props: IDateTimePickerProps = $props();
	const state = createDateTimePickerState(props);
</script>

<div class={`relative ${state.className}`.trim()}>
	<div class="flex items-center">
		<input
			use:state.dateInputAction
			type="text"
			class={`w-full cursor-pointer rounded-l-md border border-[var(--color-border-primary)] p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${state.dateClass} ${
				state.disabled
					? 'cursor-not-allowed bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)]'
					: ''
			}`}
			readonly
			value={state.selectedDate ? state.selectedDate.toLocaleDateString() : ''}
			onclick={state.toggleDropdown}
			disabled={state.disabled}
			{...props}
		/>

		<select
			class={`rounded-r-md border border-l-0 border-[var(--color-border-primary)] p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${state.timeClass} ${
				state.disabled
					? 'cursor-not-allowed bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)]'
					: ''
			}`}
			value={state.selectedTime}
			onchange={state.handleTimeChange}
			disabled={state.disabled}
		>
			{#each state.timeOptions as option}
				<option value={option}>
					{new Date(`1970-01-01T${option}:00`).toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit'
					})}
				</option>
			{/each}
		</select>

		<button
			type="button"
			class={`absolute top-0 right-0 h-full rounded-r-md px-3 hover:bg-[var(--color-background-secondary)] ${state.disabled ? 'hidden' : 'block'}`}
			onclick={state.toggleDropdown}
		>
			<BaseIcon name={Calendar} class="h-4 w-4 text-[var(--color-text-secondary)]" />
		</button>
	</div>

	{#if state.isOpen}
		<div
			use:state.datePickerAction
			class={`absolute z-[var(--z-index-docked)] mt-1 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-lg ${state.dropdownClass}`}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
			role="dialog"
			tabindex={0}
		>
			<FormDatePicker
				value={state.selectedDate ? state.selectedDate.toISOString().split('T')[0] : ''}
				onchange={state.handleDateChange}
				minDate={state.minDate ? state.minDate.toISOString().split('T')[0] : undefined}
				maxDate={state.maxDate ? state.maxDate.toISOString().split('T')[0] : undefined}
			/>
		</div>
	{/if}
</div>
