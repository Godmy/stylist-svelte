<script lang="ts">
	import type { TimeSlotEvent } from '$stylist/calendar/interface/record/calendar';
	import { TimeSlotStyleManager } from '$stylist/input/class/style-manager/time-slot';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TimeSlotProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
		start: Date;
		end: Date;
		timeLabel?: string;
		available?: boolean;
		selected?: boolean;
		active?: boolean;
		events?: TimeSlotEvent[];
		class?: string;
		onValueInput?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
		onValueChange?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
		onClick?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
		onKeyDown?: (event: KeyboardEvent) => void;
	}

	let {
		start,
		end,
		timeLabel,
		available = true,
		selected = false,
		active = false,
		events = [],
		class: hostClass = '',
		onValueInput,
		onValueChange,
		onClick,
		onKeyDown,
		...restProps
	}: TimeSlotProps = $props();

	const safeStart = $derived(
		start instanceof Date ? start : start ? new Date(start as unknown as string | number | Date) : new Date(0)
	);
	const safeEnd = $derived(
		end instanceof Date ? end : end ? new Date(end as unknown as string | number | Date) : new Date(0)
	);
	const startTimeText = $derived(
		Number.isNaN(safeStart.getTime()) ? 'unknown start time' : safeStart.toLocaleTimeString()
	);
	const endTimeText = $derived(
		Number.isNaN(safeEnd.getTime()) ? 'unknown end time' : safeEnd.toLocaleTimeString()
	);
	const displayTimeLabel = $derived(timeLabel ?? `${startTimeText} - ${endTimeText}`);

	const wrapperClasses = $derived(
		TimeSlotStyleManager.getTimeSlotClasses(available, selected, active, hostClass)
	);

	function handleClick() {
		const slot = {
			start: safeStart,
			end: safeEnd,
			timeLabel: displayTimeLabel,
			available,
			selected,
			active,
			events
		};
		onValueInput?.(slot);
		onValueChange?.(slot);
		onClick?.(slot);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
		onKeyDown?.(e);
	}
</script>

<div
	class={wrapperClasses}
	role="button"
	tabindex="0"
	onclick={handleClick}
	onkeydown={handleKeyDown}
	aria-label={`Time slot from ${startTimeText} to ${endTimeText}, ${available ? 'available' : 'not available'}`}
	{...restProps}
>
	<div class={TimeSlotStyleManager.getTimeLabelClasses()}>
		{displayTimeLabel}
	</div>
	{#if events && events.length > 0}
		<div class={TimeSlotStyleManager.getEventCountClasses()}>
			{events.length} {events.length === 1 ? 'event' : 'events'}
		</div>
	{/if}
</div>
