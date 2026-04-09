<script lang="ts">
	import { createMiniCalendarState } from '$stylist/calendar/function/state/mini-calendar';
	import type { MiniCalendarStateProps } from '$stylist/calendar/function/state/mini-calendar';
	import { Icon as BaseIcon, Button } from '$stylist';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';

	let props: MiniCalendarStateProps = $props();
	const state = createMiniCalendarState(props);
</script>

<div class={state.wrapperClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<Button variant="ghost" size="sm" onclick={() => state.navigateMonth(-1)}>
			<BaseIcon name={ChevronLeft} class="h-4 w-4" />
		</Button>

		<div class="font-[--font-weight-medium] text-[--color-text-primary]">
			{state.monthYear}
		</div>

		<div class="flex items-center space-x-[--spacing-xs]">
			{#if state.showToday}
				<Button variant="ghost" size="sm" onclick={state.navigateToToday} title="Today">
					<span class="text-[--text-size-xs]">Today</span>
				</Button>
			{/if}
			<Button variant="ghost" size="sm" onclick={() => state.navigateMonth(1)}>
				<BaseIcon name={ChevronRight} class="h-4 w-4" />
			</Button>
		</div>
	</div>

	<div class={state.gridClasses}>
		{#if state.showWeekNumbers}
			<div class="p-[--spacing-xs] text-center text-[--color-text-secondary]"></div>
		{/if}

		{#each state.weekdays as day}
			<div class={state.weekdayHeaderClasses}>
				{day}
			</div>
		{/each}

		{#each state.days as day}
			<button
				type="button"
				class={state.getDayCellClasses(day.isToday, day.isCurrentMonth, day.hasEvent)}
				onclick={() => state.handleDateSelect(day.date)}
				aria-label={day.date.toISOString()}
			>
				<div class={state.getDateNumberClasses()}>
					<span>{day.date.getDate()}</span>
					{#if day.hasEvent && !state.compact}
						<div class="flex flex-wrap justify-center gap-[var(--spacing-1)] mt-[var(--spacing-1)]">
							{#each day.events.slice(0, 2) as event}
								<div
									class={state.getEventIndicatorClasses(event.color)}
									role="button"
									tabindex="0"
									onclick={(e) => state.handleEventClick(event, e)}
									onkeydown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											state.handleEventClick(event, e);
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
