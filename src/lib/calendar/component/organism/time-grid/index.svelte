<script lang="ts">
	import createTimeGridState from '$stylist/calendar/function/state/time-grid/index.svelte';
	import type { RecipeTimeGrid as TimeGridStateProps } from '$stylist/calendar/interface/recipe/time-grid';
	import TimeSlotComponent from '$stylist/calendar/component/atom/time-slot/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: TimeGridStateProps = $props();
	const state = createTimeGridState(props);
</script>

<div class={state.wrapperClasses} {...state.restProps}>
	{#if state.showHeader}
		<div class={state.headerClasses}>
			<div class="c-time-grid__header-left">
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(-1)}>
					<Icon name="chevron-down" direction="left" size="md" />
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onclick={state.navigateToToday}
					class="c-time-grid__today-btn">Today</Button
				>
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(1)}>
					<Icon name="chevron-down" direction="right" size="md" />
				</Button>
				<h2 class="c-time-grid__title">
					{state.viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>
			<div class="c-time-grid__view-tabs">
				<Button variant="secondary" size="sm">Day</Button>
				<Button variant="secondary" size="sm">Week</Button>
				<Button variant="secondary" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if props.children}
		<div class="c-time-grid__content">
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		<div class={state.timeGridClasses}>
			{#if state.showCurrentTimeIndicator}
				<div class="c-time-grid__indicator-wrap">
					{#if state.isTodayDate(state.viewStartDate)}
						<div
							class={state.getTimeIndicatorClasses()}
							style={`top: ${state.getCurrentTimePosition()}px;`}
						></div>
					{/if}
				</div>
			{/if}

			{#each state.timeGrid as day}
				<div class={state.getDayColumnClasses(day.date)}>
					<div class={state.getDayHeaderClasses(day.date)}>
						<div class="c-time-grid__day-name">{day.dayOfWeek}</div>
						<div class="c-time-grid__day-date">{day.dateStr}</div>
					</div>

					<div class="c-time-grid__day-body" style={`height: ${state.getColumnHeight()}px;`}>
						{#each day.slots as slot, slotIndex}
							<div
								class="c-time-grid__slot-row"
								style={`height: ${state.getSlotHeight()}px;`}
								role="button"
								tabindex="0"
								onclick={() => state.handleSlotClick(day.date, slot.hour, slot.minute)}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										state.handleSlotClick(day.date, slot.hour, slot.minute);
									}
								}}
							>
								<TimeSlotComponent
									start={slot.start}
									end={slot.end}
									timeLabel={slot.timeLabel}
									available={slot.available}
									events={slot.events as any}
									class={state.getTimeSlotClasses()}
									onClick={() => state.handleSlotClick(day.date, slot.hour, slot.minute)}
								/>
							</div>

							{#each slot.events as event}
								{#if event.allDay && state.showAllDayEvents}
									<div
										class={state.getEventClasses(event.color)}
										style={`top: ${slotIndex * state.getSlotHeight()}px; height: ${state.getSlotHeight()}px;${event.color ? ` background-color: ${event.color};` : ''}`}
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
										<div class="c-time-grid__event-title">{event.title}</div>
										{#if event.location}
											<div class="c-time-grid__event-location">
												<Icon name="map-pin" size="xs" class="c-time-grid__event-icon" />
												<span class="c-time-grid__event-loc-text">{event.location}</span>
											</div>
										{/if}
									</div>
								{/if}
							{/each}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.c-time-grid {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-lg, 0.5rem);
		overflow: auto;
	}

	.c-time-grid__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-lg, 1.5rem);
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-time-grid__header-left {
		display: flex;
		align-items: center;
	}
	.c-time-grid__today-btn {
		margin-inline: 0.5rem;
	}
	.c-time-grid__title {
		margin-left: 1rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		font-size: var(--text-size-lg, 1.125rem);
	}
	.c-time-grid__view-tabs {
		display: flex;
		gap: var(--spacing-sm, 0.75rem);
	}
	.c-time-grid__content {
		padding: 1rem;
	}

	.c-time-grid__grid {
		display: grid;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		min-width: max-content;
		height: calc(100vh - 12.5rem);
	}

	.c-time-grid__indicator-wrap {
		position: relative;
	}

	.c-time-grid__day-col {
		border-right: 1px solid var(--color-border-primary);
	}
	.c-time-grid__day-col--weekend {
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}

	.c-time-grid__day-header {
		padding: var(--spacing-sm, 0.75rem);
		text-align: center;
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: var(--font-weight-medium, 500);
	}

	.c-time-grid__day-header--today {
		background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
	}

	.c-time-grid__day-name {
		font-weight: var(--font-weight-semibold, 600);
	}
	.c-time-grid__day-date {
		color: var(--color-text-secondary);
	}

	.c-time-grid__day-body {
		position: relative;
	}

	.c-time-grid__slot-row {
		display: flex;
		flex-direction: column;
	}

	.c-time-grid__slot {
		border-bottom: 1px solid var(--color-border-secondary, var(--color-border-primary));
		position: relative;
	}

	.c-time-grid__now-indicator {
		position: absolute;
		width: 100%;
		height: 2px;
		background: var(--color-danger-500);
		z-index: 10;
	}

	.c-time-grid__event {
		position: absolute;
		left: var(--spacing-xs, 0.25rem);
		right: var(--spacing-xs, 0.25rem);
		padding: var(--spacing-xs, 0.25rem);
		font-size: var(--text-size-xs, 0.75rem);
		border-radius: var(--radius-sm, 0.25rem);
		margin: 0.125rem;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-text-primary);
	}

	.c-time-grid__allday-event {
		height: var(--spacing-lg, 1.5rem);
	}

	.c-time-grid__event-title {
		font-weight: var(--font-weight-medium, 500);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-time-grid__event-location {
		display: flex;
		align-items: center;
		font-size: var(--text-size-2xs, 0.625rem);
		color: var(--color-text-secondary);
	}
	.c-time-grid__event-icon {
		width: 0.625rem;
		height: 0.625rem;
		margin-right: 0.25rem;
	}
	.c-time-grid__event-loc-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-time-grid__time-label {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		text-align: right;
		padding-right: var(--spacing-sm, 0.75rem);
		padding-top: var(--spacing-xs, 0.25rem);
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.c-time-grid__time-label--first {
		color: var(--color-text-primary);
	}
</style>
