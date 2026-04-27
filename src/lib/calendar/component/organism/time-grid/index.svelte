<script lang="ts">
	import { createTimeGridState } from '$stylist/calendar/function/state/time-grid';
	import type { RecipeTimeGrid as TimeGridStateProps } from '$stylist/calendar/interface/recipe/time-grid';
	import { TimeSlot as TimeSlotComponent, Icon, Button } from '$stylist';

	let props: TimeGridStateProps = $props();
	const state = createTimeGridState(props);
</script>

<div class={state.wrapperClasses} {...state.restProps}>
	{#if state.showHeader}
		<div class={state.headerClasses}>
			<div class="flex items-center">
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(-1)}>
					<Icon name="chevron-down" direction="left" size="md" />
				</Button>
				<Button variant="ghost" size="sm" onclick={state.navigateToToday} class="mx-2">
					Today
				</Button>
				<Button variant="ghost" size="sm" onclick={() => state.navigateWeek(1)}>
					<Icon name="chevron-down" direction="right" size="md" />
				</Button>
				<h2 class="ml-4 text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">
					{state.viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>

			<div class="flex space-x-[--spacing-sm]">
				<Button variant="secondary" size="sm">Day</Button>
				<Button variant="secondary" size="sm">Week</Button>
				<Button variant="secondary" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if props.children}
		<div class="time-grid-content">
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		<div class={state.timeGridClasses}>
			{#if state.showCurrentTimeIndicator}
				<div class="relative">
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
						<div class="font-[--font-weight-semibold]">{day.dayOfWeek}</div>
						<div>{day.dateStr}</div>
					</div>

					<div class="relative" style={`height: ${state.getColumnHeight()}px;`}>
						{#each day.slots as slot, slotIndex}
							<div
								class="flex flex-col"
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
										style={`top: ${slotIndex * state.getSlotHeight()}px; height: ${state.getSlotHeight()}px;`}
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
										{#if event.location}
											<div class="text-[--color-text-secondary] flex items-center text-[--text-size-2xs]">
												<Icon name="map-pin" size="xs" class="mr-1" />
												<span class="truncate">{event.location}</span>
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
