<script lang="ts">
	import type { SlotDatePicker as IDatePickerProps } from '$stylist/input/interface/slot/date-picker';
	import createDatePickerState from '$stylist/input/function/state/date-picker/index.svelte';

	let props: IDatePickerProps = $props();
	const state = createDatePickerState(props);
</script>

<div class="relative inline-block">
	<input
		type="text"
		readonly
		value={state.displayValue}
		placeholder={state.placeholder}
		class="rounded-md border border-[var(--color-border-primary)] px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
			class="absolute top-full left-0 z-[var(--z-index-docked)] mt-1 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-2 shadow-lg"
			style="width: fit-content;"
		/>
	{/if}
</div>
