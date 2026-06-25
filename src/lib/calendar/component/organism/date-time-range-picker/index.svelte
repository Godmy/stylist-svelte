<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotDateTimeRangePickerComponent as DateTimeRangePickerComponentProps } from '$stylist/calendar/interface/slot/date-time-range-picker-component';
	import createDateTimeRangePickerState from '$stylist/calendar/function/state/date-time-range-picker/index.svelte';
	const Calendar = 'calendar';
	const Clock = 'clock';
	const X = 'x';

	let props: DateTimeRangePickerComponentProps = $props();
	const state = createDateTimeRangePickerState(props);
</script>

<div class={`c-date-time-range-picker ${state.className}`.trim()}>
	<div class="c-dtrp__input-wrap">
		<input
			readonly
			disabled={state.disabled}
			class={`c-dtrp__input ${state.inputClass}`}
			value={state.selectedRange.start && state.selectedRange.end
				? `${state.fmt(state.selectedRange.start)} - ${state.fmt(state.selectedRange.end)}`
				: state.placeholder}
			onclick={state.toggleOpen}
		/>
		<BaseIcon
			name={Calendar}
			style="position: absolute; top: 50%; left: 0.75rem; transform: translateY(-50%); width: 1.25rem; height: 1.25rem; color: var(--color-text-secondary); pointer-events: none;"
		/>
		{#if state.selectedRange.start || state.selectedRange.end}
			<button type="button" class="c-dtrp__clear-btn" onclick={state.clear}>
				<BaseIcon name={X} style="width: 1rem; height: 1rem;" />
			</button>
		{/if}
	</div>

	{#if state.isOpen}
		<div class={`c-dtrp__panel ${state.calendarClass}`}>
			<div class="c-dtrp__grid">
				<div>
					<div class="c-dtrp__section-header">
						<BaseIcon name={Clock} style="width: 1rem; height: 1rem;" /> Start
					</div>
					<input
						type="date"
						class="c-dtrp__date-input"
						onchange={(e) =>
							state.changeTime(
								'start',
								state.selectedRange.start?.getHours() ?? 0,
								state.selectedRange.start?.getMinutes() ?? 0,
								(e.target as HTMLInputElement).value
							)}
					/>
					<input
						type="time"
						class="c-dtrp__time-input"
						onchange={(e) => {
							const [h, m] = (e.target as HTMLInputElement).value.split(':').map(Number);
							state.changeTime('start', h || 0, m || 0);
						}}
					/>
				</div>
				<div>
					<div class="c-dtrp__section-header">
						<BaseIcon name={Clock} style="width: 1rem; height: 1rem;" /> End
					</div>
					<input
						type="date"
						class="c-dtrp__date-input"
						onchange={(e) =>
							state.changeTime(
								'end',
								state.selectedRange.end?.getHours() ?? 0,
								state.selectedRange.end?.getMinutes() ?? 0,
								(e.target as HTMLInputElement).value
							)}
					/>
					<input
						type="time"
						class="c-dtrp__time-input"
						onchange={(e) => {
							const [h, m] = (e.target as HTMLInputElement).value.split(':').map(Number);
							state.changeTime('end', h || 0, m || 0);
						}}
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.c-date-time-range-picker {
		position: relative;
		width: 100%;
	}

	.c-dtrp__input-wrap {
		position: relative;
	}

	.c-dtrp__input {
		width: 100%;
		padding-block: 0.5rem;
		padding-inline: 2.5rem 2.5rem;
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		background-color: var(--color-background-primary);
		cursor: pointer;
	}

	.c-dtrp__clear-btn {
		position: absolute;
		top: 50%;
		right: 0.75rem;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	.c-dtrp__panel {
		position: absolute;
		z-index: var(--z-index-docked);
		margin-block-start: 0.5rem;
		width: 24rem;
		padding: 0.75rem;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.c-dtrp__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.c-dtrp__section-header {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-block-end: 0.5rem;
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: 500;
	}

	.c-dtrp__date-input,
	.c-dtrp__time-input {
		width: 100%;
		border-radius: var(--border-radius-sm, 0.25rem);
		border: 1px solid var(--color-border-primary);
		padding: 0.25rem 0.5rem;
		margin-block-end: 0.5rem;
	}
</style>
