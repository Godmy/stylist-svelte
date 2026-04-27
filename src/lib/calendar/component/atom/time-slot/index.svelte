<script lang="ts">
	import { createTimeSlotState } from '$stylist/calendar/function/state/time-slot';
	import type { TimeSlotProps } from '$stylist/calendar/interface/recipe/time-slot';
	import { TimeSlotStyleManager } from '$stylist/input/class/style-manager/time-slot';

	let props: TimeSlotProps = $props();
	const state = createTimeSlotState(props);
</script>

<div
	class={state.wrapperClasses}
	role="button"
	tabindex="0"
	onclick={state.handleClick}
	onkeydown={state.handleKeyDown}
	aria-label={state.ariaLabel}
	{...state.restProps}
>
	<div class={TimeSlotStyleManager.getTimeLabelClasses()}>
		{state.displayTimeLabel}
	</div>
	{#if state.events && state.events.length > 0}
		<div class={TimeSlotStyleManager.getEventCountClasses()}>
			{state.events.length} {state.events.length === 1 ? 'event' : 'events'}
		</div>
	{/if}
</div>
