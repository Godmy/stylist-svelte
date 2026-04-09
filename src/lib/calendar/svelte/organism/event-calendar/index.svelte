<script lang="ts">
	import type { EventCalendarContract, EventCalendarEvent, EventCalendarDay } from '$stylist/calendar/interface/record/calendar';
	import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
	import { Icon as BaseIcon, Button } from '$stylist';
	import { EventCalendarStyleManager } from '$stylist/calendar/class/style-manager/event-calendar';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';

	let props: EventCalendarContract = $props();
	let {
		events = [],
		initialDate = new Date(),
		viewMode: initialViewMode = 'month',
		class: hostClass = '',
		dayClass = '',
		eventClass = '',
		headerClass = '',
		showAllDayEvents = true,
		showEventDuration = true,
		children,
		onEventClick,
		onEventCreate,
		onEventEdit,
		onEventDelete,
		...restProps
	} = props;

	let currentDate = $state(new Date(initialDate));
	let selectedEvent: EventCalendarEvent | null = $state(null);
	let showEventActions = $state(false);
	let currentViewMode = $state<TokenTimeMeasure>(initialViewMode);

	const viewModeHandler: Record<TokenTimeMeasure, (date: Date) => EventCalendarDay[]> = {
		month: getDaysInMonth,
		week: getDaysInWeek,
		day: getDayInDay
	};

	const wrapperClasses = $derived(EventCalendarStyleManager.getWrapperClasses(currentViewMode));
	const headerClasses = $derived(EventCalendarStyleManager.getHeaderClasses());

	function getDaysInMonth(date: Date): EventCalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		return generateCalendarDays(startDay, endDay, month, events);
	}

	function getDaysInWeek(date: Date): EventCalendarDay[] {
		const startOfWeek = new Date(date);
		startOfWeek.setDate(date.getDate() - date.getDay());

		const endOfWeek = new Date(startOfWeek);
		endOfWeek.setDate(startOfWeek.getDate() + 6);

		return generateCalendarDays(startOfWeek, endOfWeek, date.getMonth(), events);
	}

	function getDayInDay(date: Date): EventCalendarDay[] {
		const startOfDay = new Date(date);
		startOfDay.setHours(0, 0, 0, 0);

		const endOfDay = new Date(date);
		endOfDay.setHours(23, 59, 59, 999);

		return generateCalendarDays(startOfDay, endOfDay, date.getMonth(), events);
	}

	function generateCalendarDays(
		startDate: Date,
		endDate: Date,
		currentMonth: number,
		events: EventCalendarEvent[]
	): EventCalendarDay[] {
		const days: EventCalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
			const date = new Date(d);
			const isCurrentMonth = date.getMonth() === currentMonth;
			const isToday = date.getTime() === today.getTime();

			const dayEvents = events.filter(event => isEventInDay(event, date));

			days.push({ date, isCurrentMonth, isToday, isSelected: false, events: dayEvents });
		}

		return days;
	}

	function isEventInDay(event: EventCalendarEvent, dayDate: Date): boolean {
		const eventDate = new Date(event.start);
		eventDate.setHours(0, 0, 0, 0);
		return eventDate.getTime() === dayDate.getTime();
	}

	function navigateMonth(direction: number) {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateWeek(direction: number) {
		currentDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate() + (direction * 7)
		);
	}

	function navigateDay(direction: number) {
		currentDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate() + direction
		);
	}

	function navigateToToday() {
		currentDate = new Date();
	}

	function changeViewMode(mode: TokenTimeMeasure) {
		currentViewMode = mode;
	}

	function handleDayClick(date: Date) {
		onEventCreate?.(date);
	}

	function handleEventClick(event: EventCalendarEvent, e: Event) {
		e.stopPropagation();
		selectedEvent = event;
		showEventActions = true;
		onEventClick?.(event);
	}

	function handleEventEdit() {
		if (selectedEvent) {
			onEventEdit?.(selectedEvent);
			showEventActions = false;
		}
	}

	function handleEventDelete() {
		if (selectedEvent) {
			onEventDelete?.(selectedEvent);
			showEventActions = false;
			selectedEvent = null;
		}
	}

	let days = $derived(viewModeHandler[currentViewMode](currentDate));
	let weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
	let displayTitle = $derived(getDisplayTitle(currentDate, currentViewMode));

	function getDisplayTitle(date: Date, viewMode: TokenTimeMeasure): string {
		switch (viewMode) {
			case 'day':
				return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
			case 'week':
				const endOfWeek = new Date(date);
				endOfWeek.setDate(date.getDate() + 6);
				const startFormat = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
				const endFormat = endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
				return `${startFormat} - ${endFormat}`;
			case 'month':
			default:
				return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
		}
	}

	function formatDate(date: Date): string {
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	function formatTimeRange(start: Date, end: Date): string {
		return `${formatDate(start)} - ${formatDate(end)}`;
	}
</script>

<div class={`${wrapperClasses} c-event-calendar ${hostClass}`} {...restProps}>
	<div class={`${headerClasses} ${headerClass}`}>
		<div class="flex items-center">
			<Button variant="ghost" size="sm" onclick={() => {
				if (currentViewMode === 'month') navigateMonth(-1);
				else if (currentViewMode === 'week') navigateWeek(-1);
				else navigateDay(-1);
			}}>
				<BaseIcon name={ChevronLeft} class="h-5 w-5" />
			</Button>
			<Button variant="ghost" size="sm" onclick={navigateToToday} class="mx-2">
				Today
			</Button>
			<Button variant="ghost" size="sm" onclick={() => {
				if (currentViewMode === 'month') navigateMonth(1);
				else if (currentViewMode === 'week') navigateWeek(1);
				else navigateDay(1);
			}}>
				<BaseIcon name={ChevronRight} class="h-5 w-5" />
			</Button>
			<h2 class="ml-4 text-[--text-size-xl] font-[--font-weight-bold] text-[--color-text-primary]">{displayTitle}</h2>
		</div>

		<div class="flex space-x-[--spacing-sm]">
			<Button variant={currentViewMode === 'day' ? 'primary' : 'ghost'} size="sm" onclick={() => changeViewMode('day')}>
				Day
			</Button>
			<Button variant={currentViewMode === 'week' ? 'primary' : 'ghost'} size="sm" onclick={() => changeViewMode('week')}>
				Week
			</Button>
			<Button variant={currentViewMode === 'month' ? 'primary' : 'ghost'} size="sm" onclick={() => changeViewMode('month')}>
				Month
			</Button>
		</div>
	</div>

	{#if children}
		<div class="calendar-content">
			{@render children()}
		</div>
	{:else}
		{#if currentViewMode === 'day' || currentViewMode === 'week'}
			<div class="grid grid-cols-1 md:grid-cols-7">
				{#if currentViewMode === 'week'}
					{#each weekdays as day, i}
						<div class={`${EventCalendarStyleManager.getWeekdayHeaderClasses()} ${headerClass}`}>
							{day}
						</div>
					{/each}
				{/if}
				{#each days as day}
					<div class="border-r border-[--color-border-primary]">
						<div class={`${EventCalendarStyleManager.getDateHeaderClasses(day.isToday)}`}>
							{day.date.toLocaleDateString('en-US', { weekday: 'short' })}, {day.date.getDate()}
						</div>

						<div class="p-[--spacing-sm] max-h-[400px] overflow-y-auto">
							{#if showAllDayEvents}
								{#each day.events as event}
									<div
										class={`${EventCalendarStyleManager.getEventClasses(!!event.color, event.color)} ${eventClass}`}
										role="button"
										tabindex="0"
										onclick={(e) => handleEventClick(event, e)}
										onkeydown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												handleEventClick(event, e);
											}
										}}
									>
										{event.title}
										{#if showEventDuration && !event.allDay}
											<span class="text-[--text-size-xs] text-[--color-text-secondary] ml-1">
												({formatTimeRange(event.start, event.end)})
											</span>
										{/if}
										{#if showEventDuration && event.allDay}
											<span class="text-[--text-size-xs] text-[--color-text-secondary] ml-1"> (all day)</span>
										{/if}
									</div>
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class={EventCalendarStyleManager.getGridClasses()}>
				{#each weekdays as day}
					<div class={`${EventCalendarStyleManager.getWeekdayHeaderClasses()} ${headerClass}`}>
						{day}
					</div>
				{/each}

				{#each days as day, index}
					<div
						class={`${EventCalendarStyleManager.getDayCellClasses(day.isToday, day.isCurrentMonth)} ${dayClass}`}
						role="button"
						tabindex="0"
						onclick={() => handleDayClick(day.date)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleDayClick(day.date);
							}
						}}
					>
						<div class={EventCalendarStyleManager.getDateNumberClasses(day.isToday)}>
							{day.date.getDate()}
						</div>

						<div class="mt-[--spacing-xs] space-y-[--spacing-xs] max-h-[6rem] overflow-y-auto">
							{#if showAllDayEvents}
								{#each day.events as event}
									<div
										class={`${EventCalendarStyleManager.getEventClasses(!!event.color, event.color)} ${eventClass}`}
										role="button"
										tabindex="0"
										onclick={(e) => handleEventClick(event, e)}
										onkeydown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												handleEventClick(event, e);
											}
										}}
									>
										{event.title}
										{#if showEventDuration && event.allDay}
											<span class="text-[--text-size-xs] text-[--color-text-secondary] ml-1"> (all day)</span>
										{/if}
									</div>
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/if}

	{#if selectedEvent && showEventActions}
		<div class={EventCalendarStyleManager.getModalOverlayClasses()}>
			<div class={EventCalendarStyleManager.getModalContentClasses()}>
				<div class={EventCalendarStyleManager.getModalHeaderClasses()}>
					<h3 class="text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">{selectedEvent.title}</h3>
					<button onclick={() => showEventActions = false} class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
						✕
					</button>
				</div>

				<div class="py-[--spacing-sm]">
					<p class="text-[--text-size-sm] text-[--color-text-secondary]">{selectedEvent.description}</p>
					<div class="mt-[--spacing-sm] text-[--text-size-xs] text-[--color-text-secondary]">
						<p>Start: {selectedEvent.start.toLocaleString()}</p>
						<p>End: {selectedEvent.end.toLocaleString()}</p>
						{#if selectedEvent.location}
							<p>Location: {selectedEvent.location}</p>
						{/if}
					</div>
				</div>

				<div class={EventCalendarStyleManager.getModalFooterClasses()}>
					<div class="flex space-x-[--spacing-sm]">
						<Button variant="secondary" size="sm" onclick={handleEventEdit}>
							Edit
						</Button>
						<Button variant="danger" size="sm" onclick={handleEventDelete}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
