<script lang="ts">
	import { createCalendarViewState } from '$stylist/calendar/function/state/calendar-view';
	import type { CalendarViewStateProps } from '$stylist/calendar/function/state/calendar-view';
	import { Icon as BaseIcon, Button } from '$stylist';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';
	const Plus = 'plus';

	let props: CalendarViewStateProps = $props();
	const state = createCalendarViewState(props);
</script>

<div class={state.wrapperClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="flex items-center">
			<Button variant="ghost" size="sm" class={state.navigationButtonClasses} onclick={() => state.navigateMonth(-1)}>
				<BaseIcon name={ChevronLeft} class="h-5 w-5" />
			</Button>
			<Button variant="ghost" size="sm" class={state.todayButtonClasses} onclick={state.navigateToToday}>
				Today
			</Button>
			<Button variant="ghost" size="sm" class={state.navigationButtonClasses} onclick={() => state.navigateMonth(1)}>
				<BaseIcon name={ChevronRight} class="h-5 w-5" />
			</Button>
			<h2 class="ml-4 text-xl font-bold text-[--color-text-primary]">{state.monthYear}</h2>
		</div>

		<div class="flex space-x-2">
			<Button
				variant={state.viewMode === 'month' ? 'primary' : 'ghost'}
				size="sm"
				class={state.getViewToggleButtonClasses(state.viewMode === 'month')}
				onclick={() => {}}
			>
				Month
			</Button>
			<Button
				variant={state.viewMode === 'week' ? 'primary' : 'ghost'}
				size="sm"
				class={state.getViewToggleButtonClasses(state.viewMode === 'week')}
				onclick={() => {}}
			>
				Week
			</Button>
			<Button
				variant={state.viewMode === 'day' ? 'primary' : 'ghost'}
				size="sm"
				class={state.getViewToggleButtonClasses(state.viewMode === 'day')}
				onclick={() => {}}
			>
				Day
			</Button>
		</div>
	</div>

	{#if props.children}
		<div class="calendar-content">
			{@render props.children()}
		</div>
	{:else}
		<div class={state.gridClasses}>
			{#if state.showWeekNumbers}
				<div class={state.getWeekNumberClasses()}></div>
			{/if}

			{#each state.weekdays as day}
				<div class={state.weekdayHeaderClasses}>
					{day}
				</div>
			{/each}

			{#each state.days as day, index}
				<div
					class={`${state.getDayCellClasses(day.isToday, day.isCurrentMonth)} ${state.dayClass}`}
					role="button"
					tabindex="0"
					onclick={() => state.handleDayClick(day.date)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							state.handleDayClick(day.date);
						}
					}}
				>
					<div class="flex justify-between">
						<span class={`text-[--text-size-sm] ${state.getDateNumberClasses(day.isToday)}`}>
							{day.date.getDate()}
						</span>
						<button
							class={state.getAddEventButtonClasses()}
							onclick={(e) => {
								e.stopPropagation();
								state.handleAddEvent(day.date);
							}}
						>
							<BaseIcon name={Plus} class="h-4 w-4" />
						</button>
					</div>

					<div class="mt-1 space-y-1 max-h-20 overflow-y-auto">
						{#each day.events as event}
							<div
								class={`${state.getEventItemClasses(event.color)} ${state.eventClass}`}
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
								{event.title}
							</div>
						{/each}
					</div>
				</div>

				{#if state.showWeekNumbers}
					{#if (index + 1) % 7 === 0}
						<div class={state.getWeekNumberClasses()}></div>
					{/if}
				{/if}
			{/each}
		</div>
	{/if}
</div>
