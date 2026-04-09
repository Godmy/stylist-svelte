<script lang="ts">
	import type { TimeGridContract, TimeGridEvent, TimeGridExtendedTimeSlot, TimeGridDayTimeGrid } from '$stylist/calendar/interface/record/calendar';
	import { TimeSlot as TimeSlotComponent, Icon, Button } from '$stylist';
	import { TimeGridStyleManager } from '$stylist/management/class/style-manager/time-grid';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

	let props: TimeGridContract = $props();
	let {
		events = [],
		startDate = new Date(),
		endDate = new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() + 6)),
		startTime = 0,
		endTime = 24,
		timeStep = 60,
		showHeader = true,
		showCurrentTimeIndicator = true,
		showAllDayEvents = true,
		children,
		class: hostClass = '',
		slotClass = '',
		eventClass = '',
		headerClass = '',
		onEventClick,
		onSlotClick,
		...restProps
	} = props;

	let viewStartDate = $state(new Date(startDate));
	let viewEndDate = $state(new Date(endDate));

	function generateTimeSlots(): TimeGridExtendedTimeSlot[] {
		const slots: TimeGridExtendedTimeSlot[] = [];

		for (let hour = startTime; hour < endTime; hour++) {
			for (let minute = 0; minute < 60; minute += timeStep) {
				if (minute > 0 && timeStep >= 60) break;

				const period = hour >= 12 ? 'PM' : 'AM';
				const displayHour = hour % 12 || 12;
				const displayMinute = minute.toString().padStart(2, '0');
				const timeDisplay = timeStep < 60
					? `${displayHour}:${displayMinute} ${period}`
					: `${displayHour} ${period}`;

				const start = new Date();
				start.setHours(hour, minute, 0, 0);
				const end = new Date(start);
				end.setMinutes(start.getMinutes() + timeStep);

				slots.push({
					start,
					end,
					timeLabel: timeDisplay,
					available: true,
					events: [],
					hour,
					minute,
					time: timeDisplay
				});
			}
		}

		return slots;
	}

	function generateTimeGrid(): TimeGridDayTimeGrid[] {
		const grid: TimeGridDayTimeGrid[] = [];
		const start = new Date(startDate);
		start.setHours(0, 0, 0, 0);
		const end = new Date(endDate);
		end.setHours(0, 0, 0, 0);
		const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

		for (let i = 0; i <= daysCount; i++) {
			const date = new Date(start);
			date.setDate(start.getDate() + i);

			if (date > endDate) break;

			const slots: TimeGridExtendedTimeSlot[] = generateTimeSlots();

			for (const event of events) {
				const eventStart = new Date(event.start);
				const eventEnd = new Date(event.end);

				const eventDay = new Date(eventStart);
				eventDay.setHours(0, 0, 0, 0);
				const dateDay = new Date(date);
				dateDay.setHours(0, 0, 0, 0);

				if (eventDay.getTime() === dateDay.getTime()) {
					for (let j = 0; j < slots.length; j++) {
						const slot = slots[j];
						const slotStart = new Date(date);
						slotStart.setHours(slot.hour, slot.minute);
						slotStart.setSeconds(0);
						slotStart.setMilliseconds(0);

						const slotEnd = new Date(slotStart);
						slotEnd.setMinutes(slotEnd.getMinutes() + timeStep);

						if (
							(eventStart < slotEnd && eventEnd > slotStart) ||
							(eventStart.getTime() === slotStart.getTime())
						) {
							const slotEvents = slots[j].events || [];
							if (!slotEvents.find((e: TimeGridEvent) => e.id === event.id)) {
								slotEvents.push(event);
								slots[j].events = slotEvents;
							}
						}
					}
				}
			}

			grid.push({
				date,
				dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
				dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
				slots: slots
			});
		}

		return grid;
	}

	function handleEventClick(event: TimeGridEvent) {
		onEventClick?.(event);
	}

	function handleSlotClick(date: Date, hour: number, minute: number) {
		const slotDate = new Date(date);
		slotDate.setHours(hour, minute, 0, 0);
		onSlotClick?.(slotDate);
	}

	function navigateWeek(direction: number) {
		const newStart = new Date(viewStartDate);
		newStart.setDate(viewStartDate.getDate() + direction * 7);
		const newEnd = new Date(viewEndDate);
		newEnd.setDate(viewEndDate.getDate() + direction * 7);

		viewStartDate = newStart;
		viewEndDate = newEnd;
	}

	function navigateToToday() {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const start = new Date(today);
		start.setDate(today.getDate() - today.getDay());
		const end = new Date(start);
		end.setDate(start.getDate() + 6);

		viewStartDate = start;
		viewEndDate = end;
	}

	let timeGrid = $derived(generateTimeGrid());

	function isToday(date: Date): boolean {
		const today = new Date();
		return date.toDateString() === today.toDateString();
	}

	function isWeekend(date: Date): boolean {
		const day = date.getDay();
		return day === 0 || day === 6;
	}

	function getCurrentTimePosition(): number {
		const now = new Date();
		return ((now.getHours() - startTime) * 60 + now.getMinutes()) * (100 / 60);
	}

	const wrapperClasses = $derived(mergeClassNames(TimeGridStyleManager.getWrapperClasses(), hostClass));
	const headerClasses = $derived(mergeClassNames(TimeGridStyleManager.getHeaderClasses(), headerClass));
	const timeGridClasses = $derived(TimeGridStyleManager.getTimeGridClasses());
</script>

<div class={wrapperClasses} {...restProps}>
	{#if showHeader}
		<div class={headerClasses}>
			<div class="flex items-center">
				<Button variant="ghost" size="sm" onclick={() => navigateWeek(-1)}>
					<Icon name="chevron-down" direction="left" size="md" />
				</Button>
				<Button variant="ghost" size="sm" onclick={navigateToToday} class="mx-2">
					Today
				</Button>
				<Button variant="ghost" size="sm" onclick={() => navigateWeek(1)}>
					<Icon name="chevron-down" direction="right" size="md" />
				</Button>
				<h2 class="ml-4 text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">
					{viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>

			<div class="flex space-x-[--spacing-sm]">
				<Button variant="secondary" size="sm">Day</Button>
				<Button variant="secondary" size="sm">Week</Button>
				<Button variant="secondary" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if children}
		<div class="time-grid-content">
			{@render children()}
		</div>
	{:else}
		<div class={timeGridClasses}>
			{#if showCurrentTimeIndicator}
				<div class="relative">
					{#if isToday(viewStartDate)}
						<div
							class={TimeGridStyleManager.getTimeIndicatorClasses()}
							style={`top: ${getCurrentTimePosition()}px;`}
						></div>
					{/if}
				</div>
			{/if}

			{#each timeGrid as day}
				<div class={mergeClassNames(TimeGridStyleManager.getDayColumnClasses(isWeekend(day.date)))}>
					<div class={mergeClassNames(TimeGridStyleManager.getDayHeaderClasses(isToday(day.date)), headerClass)}>
						<div class="font-[--font-weight-semibold]">{day.dayOfWeek}</div>
						<div>{day.dateStr}</div>
					</div>

					<div class="relative" style={`height: ${(endTime - startTime) * 60 * (100 / 60)}px;`}>
						{#each day.slots as slot, slotIndex}
							<div
								class="flex flex-col"
								style={`height: ${timeStep * (100 / 60)}px;`}
								role="button"
								tabindex="0"
								onclick={() => handleSlotClick(day.date, slot.hour, slot.minute)}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										handleSlotClick(day.date, slot.hour, slot.minute);
									}
								}}
							>
								<TimeSlotComponent
									start={slot.start}
									end={slot.end}
									timeLabel={slot.timeLabel}
									available={slot.available}
									events={slot.events as any}
									class={mergeClassNames(TimeGridStyleManager.getTimeSlotClasses(), slotClass)}
									onClick={() => handleSlotClick(day.date, slot.hour, slot.minute)}
								/>
							</div>

							{#each slot.events as event}
								{#if event.allDay && showAllDayEvents}
									<div
										class={mergeClassNames(TimeGridStyleManager.getEventClasses(event.color, eventClass))}
										style={`top: ${slotIndex * timeStep * (100 / 60)}px; height: ${timeStep * (100 / 60)}px;`}
										role="button"
										tabindex="0"
										onclick={(e) => {
											e.stopPropagation();
											handleEventClick(event);
										}}
										onkeydown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												e.stopPropagation();
												handleEventClick(event);
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

