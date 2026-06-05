<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import type { SlotDateTimeRangePickerComponent as DateTimeRangePickerComponentProps } from '$stylist/input/interface/slot/date-time-range-picker-component';
	import createDateTimeRangePickerState from '$stylist/input/function/state/date-time-range-picker/index.svelte';
	import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
	const Calendar = 'calendar';
	const Clock = 'clock';
	const X = 'x';

	let props: DateTimeRangePickerComponentProps = $props();
	const state = createDateTimeRangePickerState(props);
</script>

<div
	class={InteractionInputStyleManager.root(
		'c-date-time-range-picker relative w-full',
		state.className
	)}
>
	<div class="relative">
		<input
			readonly
			disabled={state.disabled}
			class={InteractionInputStyleManager.input(`w-full py-2 pr-10 pl-10 ${state.inputClass}`)}
			value={state.selectedRange.start && state.selectedRange.end
				? `${state.fmt(state.selectedRange.start)} - ${state.fmt(state.selectedRange.end)}`
				: state.placeholder}
			onclick={state.toggleOpen}
		/>
		<BaseIcon
			name={Calendar}
			class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[var(--color-text-secondary)]"
		/>
		{#if state.selectedRange.start || state.selectedRange.end}
			<button type="button" class="absolute top-1/2 right-3 -translate-y-1/2" onclick={state.clear}
				><BaseIcon name={X} class="h-4 w-4" /></button
			>
		{/if}
	</div>

	{#if state.isOpen}
		<div
			class={InteractionInputStyleManager.panel(
				`absolute z-[var(--z-index-docked)] mt-2 w-96 p-3 ${state.calendarClass}`
			)}
		>
			<div class="grid grid-cols-2 gap-4">
				<div>
					<div class="mb-2 flex items-center gap-1 text-sm font-medium">
						<BaseIcon name={Clock} class="h-4 w-4" /> Start
					</div>
					<input
						type="date"
						class="mb-2 w-full rounded border px-2 py-1"
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
						class="w-full rounded border px-2 py-1"
						onchange={(e) => {
							const [h, m] = (e.target as HTMLInputElement).value.split(':').map(Number);
							state.changeTime('start', h || 0, m || 0);
						}}
					/>
				</div>
				<div>
					<div class="mb-2 flex items-center gap-1 text-sm font-medium">
						<BaseIcon name={Clock} class="h-4 w-4" /> End
					</div>
					<input
						type="date"
						class="mb-2 w-full rounded border px-2 py-1"
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
						class="w-full rounded border px-2 py-1"
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
