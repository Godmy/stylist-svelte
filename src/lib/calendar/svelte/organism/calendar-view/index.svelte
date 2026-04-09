<script lang="ts">
	import type { CalendarViewContract } from '$stylist/calendar/interface/record/calendar';
	import { Icon as BaseIcon, Button } from '$stylist';
	import { CalendarViewStyleManager } from '$stylist/calendar/class/style-manager/calendar-view';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const Plus = 'plus';

	let props: CalendarViewContract = $props();
	let {
		events = [],
		initialDate = new Date(),
		viewMode = 'month',
		showWeekNumbers = false,
		weekendDays = [0, 6],
		class: hostClass = '',
		dayClass = '',
		eventClass = '',
		headerClass = '',
		children,
		onEventClick,
		onDayClick,
		onEventCreate,
		...restProps
	} = props;

	let currentDate = $state(new Date(initialDate));

	type CalendarEvent = {
		id: string;
		title: string;
		start: Date;
		end: Date;
		color?: string;
		allDay?: boolean;
	};

	type CalendarDay = {
		date: Date;
		isCurrentMonth: boolean;
		isToday: boolean;
		events: CalendarEvent[];
	};

	function getDaysInMonth(date: Date): CalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const days: CalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const date = new Date(d);
			const isCurrentMonth = date.getMonth() === month;
			const isToday = date.getTime() === today.getTime();

			const dayEvents = events.filter((event: CalendarEvent) => {
				const eventStart = new Date(event.start);
				eventStart.setHours(0, 0, 0, 0);
				return eventStart.getTime() === date.getTime();
			});

			days.push({ date, isCurrentMonth, isToday, events: dayEvents });
		}

		return days;
	}

	function navigateMonth(direction: number) {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateToToday() {
		currentDate = new Date();
	}

	function handleDayClick(date: Date) {
		onDayClick?.(date);
	}

	function handleEventClick(event: CalendarEvent) {
		onEventClick?.(event);
	}

	function handleAddEvent(date: Date) {
		onEventCreate?.(date);
	}

	let days = $derived(getDaysInMonth(currentDate));
	let weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
	let monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

	const wrapperClasses = $derived(`${CalendarViewStyleManager.getWrapperClasses()} ${hostClass}`);
	const headerClasses = $derived(`${CalendarViewStyleManager.getHeaderClasses()} ${headerClass}`);
	const gridClasses = $derived(CalendarViewStyleManager.getGridClasses());
	const weekdayHeaderClasses = $derived(CalendarViewStyleManager.getWeekdayHeaderClasses());
	const todayButtonClasses = $derived(CalendarViewStyleManager.getTodayButtonClasses());
	const navigationButtonClasses = $derived(CalendarViewStyleManager.getNavigationButtonClasses());

	function getViewToggleButtonClasses(isActive: boolean) {
		return CalendarViewStyleManager.getViewToggleButtonClasses(isActive);
	}
</script>

<div class={wrapperClasses} {...restProps}>
	<div class={headerClasses}>
		<div class="flex items-center">
			<Button variant="ghost" size="sm" class={navigationButtonClasses} onclick={() => navigateMonth(-1)}>
				<BaseIcon name={ChevronLeft} class="h-5 w-5" />
			</Button>
			<Button variant="ghost" size="sm" class={todayButtonClasses} onclick={navigateToToday}>
				Today
			</Button>
			<Button variant="ghost" size="sm" class={navigationButtonClasses} onclick={() => navigateMonth(1)}>
				<BaseIcon name={ChevronRight} class="h-5 w-5" />
			</Button>
			<h2 class="ml-4 text-xl font-bold text-[--color-text-primary]">{monthYear}</h2>
		</div>

		<div class="flex space-x-2">
			<Button
				variant={viewMode === 'month' ? 'primary' : 'ghost'}
				size="sm"
				class={getViewToggleButtonClasses(viewMode === 'month')}
				onclick={() => {}}
			>
				Month
			</Button>
			<Button
				variant={viewMode === 'week' ? 'primary' : 'ghost'}
				size="sm"
				class={getViewToggleButtonClasses(viewMode === 'week')}
				onclick={() => {}}
			>
				Week
			</Button>
			<Button
				variant={viewMode === 'day' ? 'primary' : 'ghost'}
				size="sm"
				class={getViewToggleButtonClasses(viewMode === 'day')}
				onclick={() => {}}
			>
				Day
			</Button>
		</div>
	</div>

	{#if children}
		<div class="calendar-content">
			{@render children()}
		</div>
	{:else}
		<div class={gridClasses}>
			{#if showWeekNumbers}
				<div class={CalendarViewStyleManager.getWeekNumberClasses()}></div>
			{/if}

			{#each weekdays as day}
				<div class={weekdayHeaderClasses}>
					{day}
				</div>
			{/each}

			{#each days as day, index}
				<div
					class={`${CalendarViewStyleManager.getDayCellClasses(day.isToday, day.isCurrentMonth)} ${dayClass}`}
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
					<div class="flex justify-between">
						<span class={`text-[--text-size-sm] ${CalendarViewStyleManager.getDateNumberClasses(day.isToday)}`}>
							{day.date.getDate()}
						</span>
						<button
							class={CalendarViewStyleManager.getAddEventButtonClasses()}
							onclick={(e) => {
								e.stopPropagation();
								handleAddEvent(day.date);
							}}
						>
							<BaseIcon name={Plus} class="h-4 w-4" />
						</button>
					</div>

					<div class="mt-1 space-y-1 max-h-20 overflow-y-auto">
						{#each day.events as event}
							<div
								class={`${CalendarViewStyleManager.getEventItemClasses(event.color)} ${eventClass}`}
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
								{event.title}
							</div>
						{/each}
					</div>
				</div>

				{#if showWeekNumbers}
					{#if (index + 1) % 7 === 0}
						<div class={CalendarViewStyleManager.getWeekNumberClasses()}></div>
					{/if}
				{/if}
			{/each}
		</div>
	{/if}
</div>
