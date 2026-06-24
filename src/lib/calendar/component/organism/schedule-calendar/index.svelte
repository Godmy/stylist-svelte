<script lang="ts">
	import createScheduleCalendarState from '$stylist/calendar/function/state/schedule-calendar/index.svelte';
	import type { RecipeScheduleCalendar as ScheduleCalendarStateProps } from '$stylist/calendar/interface/recipe/schedule-calendar';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import TimeSlot from '$stylist/calendar/component/atom/time-slot/index.svelte';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const Clock = 'clock';
	const MapPin = 'map-pin';

	let props: ScheduleCalendarStateProps = $props();
	const state = createScheduleCalendarState(props);
</script>

<div class="c-schedule-calendar {state.wrapperClasses}" {...state.restProps}>
	{#if state.showHeader}
		<div class={state.headerClasses}>
			<div class="c-schedule-calendar__header-left">
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(-1)}>
					<BaseIcon name={ChevronLeft} class="_c1" />
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onclick={state.navigateToToday}
					class="c-schedule-calendar__today-btn">Today</Button
				>
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(1)}>
					<BaseIcon name={ChevronRight} class="_c1" />
				</Button>
				<h2 class="c-schedule-calendar__title">
					{state.viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>
			<div class="c-schedule-calendar__view-tabs">
				<Button variant="ghost" size="sm">Day</Button>
				<Button variant="ghost" size="sm">Week</Button>
				<Button variant="ghost" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if props.children}
		<div class="c-schedule-calendar__content">
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		<div class={state.gridClasses}>
			{#if state.showTimeGutter}
				<div class={state.getTimeGutterClasses()}>
					<div class="c-schedule-calendar__gutter-spacer"></div>
					{#each state.generateTimeSlots() as slot}
						<div class={state.getTimeSlotClasses()} style={`height: ${state.timeSlotHeight}px;`}>
							{slot.time}
						</div>
					{/each}
				</div>
			{/if}

			{#each state.schedule as day}
				<div class={state.getDayColumnClasses(day.date)}>
					<div class={state.getDayHeaderClasses(day.date)}>
						<div class="c-schedule-calendar__day-name">{day.dayOfWeek}</div>
						<div class="c-schedule-calendar__day-date">{day.dateStr}</div>
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
								style={`position: absolute; top: ${slot.events.indexOf(event) * 20 + 2}px;${event.color ? ` background-color: ${event.color};` : ''}`}
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
								<div class="c-schedule-calendar__event-title">{event.title}</div>
								<div class="c-schedule-calendar__event-time">
									<BaseIcon name={Clock} class="c-schedule-calendar__event-icon" />
									{event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
								</div>
								{#if event.location}
									<div class="c-schedule-calendar__event-location">
										<BaseIcon name={MapPin} class="c-schedule-calendar__event-icon" />
										<span class="c-schedule-calendar__event-loc-text">{event.location}</span>
									</div>
								{/if}
								{#if event.priority}
									<span class={state.getPriorityBadgeClasses(event.priority)}>{event.priority}</span
									>
								{/if}
							</div>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.c-schedule-calendar {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-lg, 0.5rem);
		overflow: auto;
	}

	.c-schedule-calendar__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-lg, 1.5rem);
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-schedule-calendar__header-left {
		display: flex;
		align-items: center;
	}
	.c-schedule-calendar__today-btn {
		margin-inline: 0.5rem;
	}
	.c-schedule-calendar__title {
		margin-left: 1rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		font-size: var(--text-size-lg, 1.125rem);
	}
	.c-schedule-calendar__view-tabs {
		display: flex;
		gap: var(--spacing-sm, 0.75rem);
	}
	.c-schedule-calendar__content {
		padding: 1rem;
	}

	.c-schedule-calendar__grid {
		display: grid;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		min-width: max-content;
	}

	.c-schedule-calendar__gutter {
		border-right: 1px solid var(--color-border-primary);
	}
	.c-schedule-calendar__gutter-spacer {
		height: var(--spacing-xl, 2rem);
	}
	.c-schedule-calendar__gutter-slot {
		padding: var(--spacing-sm, 0.75rem);
		border-bottom: 1px solid var(--color-border-secondary, var(--color-border-primary));
		text-align: right;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.c-schedule-calendar__day-col {
		border-right: 1px solid var(--color-border-primary);
	}
	.c-schedule-calendar__day-col--weekend {
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}

	.c-schedule-calendar__day-header {
		padding: var(--spacing-sm, 0.75rem);
		text-align: center;
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: var(--font-weight-medium, 500);
	}

	.c-schedule-calendar__day-header--today {
		background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
	}

	.c-schedule-calendar__day-name {
		font-weight: var(--font-weight-semibold, 600);
	}
	.c-schedule-calendar__day-date {
		color: var(--color-text-secondary);
	}

	.c-schedule-calendar__slot {
		padding: var(--spacing-xs, 0.25rem);
		border-bottom: 1px solid var(--color-border-secondary, var(--color-border-primary));
		position: relative;
	}

	.c-schedule-calendar__event {
		font-size: var(--text-size-xs, 0.75rem);
		padding: var(--spacing-xs, 0.25rem);
		border-radius: var(--radius-sm, 0.25rem);
		margin-bottom: var(--spacing-xs, 0.25rem);
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-text-primary);
	}

	.c-schedule-calendar__event-title {
		font-weight: var(--font-weight-medium, 500);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.c-schedule-calendar__event-time,
	.c-schedule-calendar__event-location {
		display: flex;
		align-items: center;
		color: var(--color-text-secondary);
	}
	.c-schedule-calendar__event-icon {
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.25rem;
	}
	.c-schedule-calendar__event-loc-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-schedule-calendar__priority {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.375rem;
		border-radius: 9999px;
		font-size: var(--text-size-2xs, 0.625rem);
		font-weight: var(--font-weight-medium, 500);
	}

	.c-schedule-calendar__priority--high {
		background: color-mix(in srgb, var(--color-danger-500) 12%, transparent);
		color: var(--color-danger-800, var(--color-danger-700));
	}
	.c-schedule-calendar__priority--medium {
		background: color-mix(in srgb, var(--color-warning-500) 12%, transparent);
		color: var(--color-warning-800, var(--color-warning-700));
	}
	.c-schedule-calendar__priority--low {
		background: color-mix(in srgb, var(--color-success-500) 12%, transparent);
		color: var(--color-success-800, var(--color-success-700));
	}
	.c-schedule-calendar__priority--default {
		background: var(--color-background-tertiary, var(--color-background-secondary));
		color: var(--color-text-secondary);
	}

	._c1 {
		height: 1.25rem;
		width: 1.25rem;
	}
</style>
