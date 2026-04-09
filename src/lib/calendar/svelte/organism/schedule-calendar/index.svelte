<script lang="ts">
	import type { ScheduleCalendarContract, ScheduleCalendarEvent, ScheduleCalendarTimeSlot, ScheduleCalendarDaySchedule } from '$stylist/calendar/interface/record/calendar';
	import { Icon as BaseIcon, Button } from '$stylist';
	import { TimeSlot } from '$stylist/calendar/svelte/atom/time-slot';
	import { ScheduleCalendarStyleManager } from '$stylist/calendar/class/style-manager/schedule-calendar';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const Clock = 'clock';
	const MapPin = 'map-pin';
	const Users = 'users';

	let props: ScheduleCalendarContract = $props();
	let {
		events = [],
		startDate = new Date(),
		endDate = new Date(new Date().setDate(new Date().getDate() + 6)),
		startTime = 8,
		endTime = 20,
		showHeader = true,
		showTimeGutter = true,
		timeSlotHeight = 60,
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

	const wrapperClasses = $derived(ScheduleCalendarStyleManager.getWrapperClasses(hostClass));
	const headerClasses = $derived(ScheduleCalendarStyleManager.getHeaderClasses(headerClass));
	const gridClasses = $derived(ScheduleCalendarStyleManager.getGridClasses());

	function generateTimeSlots(): ScheduleCalendarTimeSlot[] {
		const slots: ScheduleCalendarTimeSlot[] = [];
		for (let hour = startTime; hour < endTime; hour++) {
			const period = hour >= 12 ? 'PM' : 'AM';
			const displayHour = hour % 12 || 12;
			slots.push({
				time: `${displayHour} ${period}`,
				hour,
				events: []
			});
		}
		return slots;
	}

	function generateSchedule(): ScheduleCalendarDaySchedule[] {
		const schedule: ScheduleCalendarDaySchedule[] = [];
		const daysCount = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

		for (let i = 0; i <= daysCount; i++) {
			const date = new Date(startDate);
			date.setDate(startDate.getDate() + i);

			if (date > endDate) break;

			const slots = generateTimeSlots();

			for (const event of events) {
				const eventDay = new Date(event.start);
				eventDay.setHours(0, 0, 0, 0);
				const dateDay = new Date(date);
				dateDay.setHours(0, 0, 0, 0);

				if (eventDay.getTime() === dateDay.getTime()) {
					const hour = event.start.getHours();
					const slotIndex = hour - startTime;

					if (slotIndex >= 0 && slotIndex < slots.length) {
						slots[slotIndex].events.push(event);
					}
				}
			}

			schedule.push({
				date,
				dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
				dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
				slots
			});
		}

		return schedule;
	}

	function handleEventClick(event: ScheduleCalendarEvent) {
		onEventClick?.(event);
	}

	function handleSlotClick(date: Date, hour: number) {
		const slotDate = new Date(date);
		slotDate.setHours(hour, 0, 0, 0);
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

	let schedule = $derived(generateSchedule());

	function isToday(date: Date): boolean {
		const today = new Date();
		return date.toDateString() === today.toDateString();
	}

	function isWeekend(date: Date): boolean {
		const day = date.getDay();
		return day === 0 || day === 6;
	}
</script>

<div class={`c-schedule-calendar ${wrapperClasses}`} {...restProps}>
	{#if showHeader}
		<div class={headerClasses}>
			<div class="flex items-center">
				<Button variant="ghost" size="sm" onclick={() => navigateWeek(-1)}>
					<BaseIcon name={ChevronLeft} class="h-5 w-5" />
				</Button>
				<Button variant="ghost" size="sm" onclick={navigateToToday} class="mx-2">
					Today
				</Button>
				<Button variant="ghost" size="sm" onclick={() => navigateWeek(1)}>
					<BaseIcon name={ChevronRight} class="h-5 w-5" />
				</Button>
				<h2 class="ml-4 text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">
					{viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
				</h2>
			</div>

			<div class="flex space-x-[--spacing-sm]">
				<Button variant="ghost" size="sm">Day</Button>
				<Button variant="ghost" size="sm">Week</Button>
				<Button variant="ghost" size="sm">Month</Button>
			</div>
		</div>
	{/if}

	{#if children}
		<div class="schedule-content">
			{@render children()}
		</div>
	{:else}
		<div class={gridClasses}>
			{#if showTimeGutter}
				<div class={ScheduleCalendarStyleManager.getTimeGutterClasses()}>
					<div class="h-[--spacing-xl]"></div>
					{#each generateTimeSlots() as slot}
						<div
							class={ScheduleCalendarStyleManager.getTimeSlotClasses()}
							style={`height: ${timeSlotHeight}px;`}
						>
							{slot.time}
						</div>
					{/each}
				</div>
			{/if}

			{#each schedule as day}
				<div class={ScheduleCalendarStyleManager.getDayColumnClasses(isWeekend(day.date))}>
					<div class={`${ScheduleCalendarStyleManager.getDayHeaderClasses(isToday(day.date), headerClass)}`}>
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
							class={slotClass}
							onClick={() => handleSlotClick(day.date, slot.hour)}
						/>

						{#each slot.events as event}
							<div
								class={ScheduleCalendarStyleManager.getEventClasses(event.color, eventClass)}
								style={`position: absolute; top: ${(slot.events.indexOf(event) * 20) + 2}px;`}
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
									<span class={ScheduleCalendarStyleManager.getPriorityBadgeClasses(event.priority)}>
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
