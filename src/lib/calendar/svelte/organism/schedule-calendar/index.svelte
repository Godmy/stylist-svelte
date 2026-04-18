<script lang="ts">
	import { createScheduleCalendarState } from '$stylist/calendar/function/state/schedule-calendar';
	import type { RecipeScheduleCalendar as ScheduleCalendarStateProps } from '$stylist/calendar/interface/recipe/schedule-calendar';
	import { Icon as BaseIcon, Button } from '$stylist';
	import { TimeSlot } from '$stylist/calendar/svelte/atom/time-slot';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const Clock = 'clock';
	const MapPin = 'map-pin';

	let props: ScheduleCalendarStateProps = $props();
	const state = createScheduleCalendarState(props);
</script>

<div class={`c-schedule-calendar ${state.wrapperClasses}`} {...state.restProps}>
	{#if state.showHeader}
		<div class={state.headerClasses}>
			<div class="flex items-center">
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(-1)}>
					<BaseIcon name={ChevronLeft} class="h-5 w-5" />
				</Button>
				<Button variant="ghost" size="sm" onclick={state.navigateToToday} class="mx-2">
					Today
				</Button>
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(1)}>
					<BaseIcon name={ChevronRight} class="h-5 w-5" />
				</Button>
				<h2 class="ml-4 text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">
					{state.viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>

			<div class="flex space-x-[--spacing-sm]">
				<Button variant="ghost" size="sm">Day</Button>
				<Button variant="ghost" size="sm">Week</Button>
				<Button variant="ghost" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if props.children}
		<div class="schedule-content">
			{@render props.children()}
		</div>
	{:else}
		<div class={state.gridClasses}>
			{#if state.showTimeGutter}
				<div class={state.getTimeGutterClasses()}>
					<div class="h-[--spacing-xl]"></div>
					{#each state.generateTimeSlots() as slot}
						<div
							class={state.getTimeSlotClasses()}
							style={`height: ${state.timeSlotHeight}px;`}
						>
							{slot.time}
						</div>
					{/each}
				</div>
			{/if}

			{#each state.schedule as day}
				<div class={state.getDayColumnClasses(day.date)}>
					<div class={state.getDayHeaderClasses(day.date)}>
						<div class="font-[--font-weight-semibold]">{day.dayOfWeek}</div>
						<div>{day.dateStr}</div>
					</div>

					{#each day.slots as slot}
						<TimeSlot
							start={new Date(day.date.setHours(slot.hour, 0, 0, 0))}
							end={new Date(day.date.setHours(slot.hour + 1, 0, 0, 0))}
							timeLabel={slot.time}
							available={true}
							events={slot.events as any}
							class={state.slotClass}
							onClick={() => state.handleSlotClick(day.date, slot.hour)}
						/>

						{#each slot.events as event}
							<div
								class={state.getEventClasses(event.color)}
								style={`position: absolute; top: ${(slot.events.indexOf(event) * 20) + 2}px;`}
								role="button"
								tabindex="0"
								onclick={(e) => {
									e.stopPropagation();
									state.handleEventClick(event);
								}}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										e.stopPropagation();
										state.handleEventClick(event);
									}
								}}
							>
								<div class="font-[--font-weight-medium] truncate">{event.title}</div>
								<div class="text-[--color-text-secondary] flex items-center">
									<BaseIcon name={Clock} class="h-3 w-3 mr-1" />
									{event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
								</div>
								{#if event.location}
									<div class="text-[--color-text-secondary] flex items-center">
										<BaseIcon name={MapPin} class="h-3 w-3 mr-1" />
										<span class="truncate">{event.location}</span>
									</div>
								{/if}
								{#if event.priority}
									<span class={state.getPriorityBadgeClasses(event.priority)}>
										{event.priority}
									</span>
								{/if}
							</div>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
