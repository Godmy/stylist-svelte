<script lang="ts">
	import type { MiniCalendarContract, MiniCalendarEvent, MiniCalendarDay } from '$stylist/calendar/interface/record/calendar';
	import { Icon as BaseIcon, Button } from '$stylist';
	import { MiniCalendarStyleManager } from '$stylist/calendar/class/style-manager/mini-calendar';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';

	let props: MiniCalendarContract = $props();
	let {
		events = [],
		initialDate = new Date(),
		compact = false,
		showToday = true,
		showWeekNumbers = false,
		onDateSelect,
		onEventClick,
		class: hostClass = '',
		dayClass = '',
		eventClass = '',
		headerClass = '',
		...restProps
	} = props;

	let currentDate = $state(new Date(initialDate));
	let selectedDate = $state<Date | null>(null);

	const wrapperClasses = $derived(MiniCalendarStyleManager.getWrapperClasses(compact, `c-mini-calendar ${hostClass}`));
	const headerClasses = $derived(MiniCalendarStyleManager.getHeaderClasses(headerClass));
	const weekdayHeaderClasses = $derived(MiniCalendarStyleManager.getWeekdayHeaderClasses(headerClass));
	const gridClasses = $derived(MiniCalendarStyleManager.getGridClasses());

	function getDaysInMonth(date: Date): MiniCalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const days: MiniCalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const date = new Date(d);
			const isCurrentMonth = date.getMonth() === month;
			const isToday = date.getTime() === today.getTime();

			const dayEvents = events.filter(event => {
				const eventDate = new Date(event.start);
				eventDate.setHours(0, 0, 0, 0);
				return eventDate.getTime() === date.getTime();
			});

			days.push({
				date,
				isCurrentMonth,
				isToday,
				isSelected: selectedDate ? date.getTime() === selectedDate.getTime() : false,
				hasEvent: dayEvents.length > 0,
				events: dayEvents
			});
		}

		return days;
	}

	function navigateMonth(direction: number) {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateToToday() {
		currentDate = new Date();
	}

	function handleDateSelect(date: Date) {
		selectedDate = new Date(date);
		onDateSelect?.(date);
	}

	function handleEventClick(event: MiniCalendarEvent, e: Event) {
		e.stopPropagation();
		onEventClick?.(event);
	}

	let days = $derived(getDaysInMonth(currentDate));
	let weekdays = $derived(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
	let monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
</script>

<div class={wrapperClasses} {...restProps}>
	<div class={headerClasses}>
		<Button variant="ghost" size="sm" onclick={() => navigateMonth(-1)}>
			<BaseIcon name={ChevronLeft} class="h-4 w-4" />
		</Button>

		<div class="font-[--font-weight-medium] text-[--color-text-primary]">
			{monthYear}
		</div>

		<div class="flex items-center space-x-[--spacing-xs]">
			{#if showToday}
				<Button
					variant="ghost"
					size="sm"
					onclick={navigateToToday}
					title="Today"
				>
					<span class="text-[--text-size-xs]">Today</span>
				</Button>
			{/if}
			<Button variant="ghost" size="sm" onclick={() => navigateMonth(1)}>
				<BaseIcon name={ChevronRight} class="h-4 w-4" />
			</Button>
		</div>
	</div>

	<div class={gridClasses}>
		{#if showWeekNumbers}
			<div class="p-[--spacing-xs] text-center text-[--color-text-secondary]"></div>
		{/if}

		{#each weekdays as day}
			<div class={weekdayHeaderClasses}>
				{day}
			</div>
		{/each}

		{#each days as day}
			<button
				type="button"
				class={MiniCalendarStyleManager.getDayCellClasses(day.isToday, day.isCurrentMonth, day.hasEvent, dayClass)}
				onclick={() => handleDateSelect(day.date)}
				aria-label={day.date.toISOString()}
			>
				<div class={MiniCalendarStyleManager.getDateNumberClasses()}>
					<span>{day.date.getDate()}</span>
					{#if day.hasEvent && !compact}
						<div class="flex flex-wrap justify-center gap-[var(--spacing-1)] mt-[var(--spacing-1)]">
							{#each day.events.slice(0, 2) as event, index}
								<div
									class={MiniCalendarStyleManager.getEventIndicatorClasses(event.color, eventClass)}
									role="button"
									tabindex="0"
									onclick={(e) => handleEventClick(event, e)}
									onkeydown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											handleEventClick(event, e);
										}
									}}
									title={event.title}
								></div>
							{/each}
							{#if day.events.length > 2}
								<div class="text-[--text-size-2xs] text-[--color-text-secondary]">+{day.events.length - 2}</div>
							{/if}
						</div>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</div>
