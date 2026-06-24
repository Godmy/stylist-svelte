<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotDateRangePickerComponent as DateRangePickerComponentProps } from '$stylist/input/interface/slot/date-range-picker-component';
	import createDateRangePickerState from '$stylist/input/function/state/date-range-picker/index.svelte';
	const Calendar = 'calendar';
	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const X = 'x';

	let props: DateRangePickerComponentProps = $props();
	const state = createDateRangePickerState(props);
</script>

<div class={`c-date-range-picker ${state.className}`.trim()}>
	<div class="c-drp__input-wrap">
		<input
			type="text"
			readonly
			disabled={state.disabled}
			class={`c-drp__input ${state.inputClass}`}
			value={state.selectedRange.start
				? state.selectedRange.end
					? `${state.fmt(state.selectedRange.start)} - ${state.fmt(state.selectedRange.end)}`
					: `${state.fmt(state.selectedRange.start)} - ...`
				: state.placeholder}
			onclick={state.toggleOpen}
		/>
		<BaseIcon
			name={Calendar}
			style="position: absolute; top: 50%; left: 0.75rem; transform: translateY(-50%); width: 1.25rem; height: 1.25rem; color: var(--color-text-secondary); pointer-events: none;"
		/>
		{#if state.selectedRange.start}
			<button type="button" class="c-drp__clear-btn" onclick={state.clear}>
				<BaseIcon name={X} style="width: 1rem; height: 1rem;" />
			</button>
		{/if}
		<button
			type="button"
			class={`c-drp__toggle-btn ${state.buttonClass}`}
			onclick={state.toggleOpen}
		>
			<BaseIcon name={Calendar} style="width: 1rem; height: 1rem;" />
		</button>
	</div>

	{#if state.isOpen}
		<div class={`c-drp__panel ${state.calendarClass}`}>
			<div class="c-drp__nav">
				<button type="button" onclick={state.previousMonth}>
					<BaseIcon name={ChevronLeft} style="width: 1rem; height: 1rem;" />
				</button>
				<div class="c-drp__month-label">
					{state.currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</div>
				<button type="button" onclick={state.nextMonth}>
					<BaseIcon name={ChevronRight} style="width: 1rem; height: 1rem;" />
				</button>
			</div>
			<div class="c-drp__week-header">
				{#each ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as d}<div>{d}</div>{/each}
			</div>
			<div class="c-drp__days">
				{#each state.calendarDates as date}
					{#if date.getMonth() === state.currentDateView.getMonth()}
						<button
							type="button"
							class={`c-drp__day ${state.inRange(date) ? 'c-drp__day--in-range' : ''} ${state.selectedRange.start && date.toDateString() === state.selectedRange.start.toDateString() ? 'c-drp__day--selected' : ''} ${state.selectedRange.end && date.toDateString() === state.selectedRange.end.toDateString() ? 'c-drp__day--selected' : ''}`}
							onclick={() => state.pick(date)}>{date.getDate()}</button
						>
					{:else}
						<div class="c-drp__day-empty"></div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.c-date-range-picker {
		position: relative;
		width: 100%;
	}

	.c-drp__input-wrap {
		position: relative;
	}

	.c-drp__input {
		width: 100%;
		padding-block: 0.5rem;
		padding-inline: 2.5rem 4rem;
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		background-color: var(--color-background-primary);
		cursor: pointer;
	}

	.c-drp__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-200);
	}

	.c-drp__clear-btn {
		position: absolute;
		top: 50%;
		right: 2.5rem;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	.c-drp__toggle-btn {
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	.c-drp__panel {
		position: absolute;
		z-index: var(--z-index-docked);
		margin-block-start: 0.5rem;
		width: 20rem;
		padding: 0.75rem;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.c-drp__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-block-end: 0.5rem;
	}

	.c-drp__nav button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	.c-drp__month-label {
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: 500;
	}

	.c-drp__week-header {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.25rem;
		margin-block-end: 0.25rem;
		text-align: center;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.c-drp__days {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.25rem;
	}

	.c-drp__day {
		height: 2rem;
		border-radius: var(--border-radius-sm, 0.25rem);
		font-size: var(--text-size-xs, 0.75rem);
		background: none;
		border: none;
		cursor: pointer;
	}

	.c-drp__day:hover {
		background-color: var(--color-background-secondary);
	}

	.c-drp__day--in-range {
		background-color: var(--color-primary-100);
	}

	.c-drp__day--selected {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}

	.c-drp__day-empty {
		height: 2rem;
	}
</style>
