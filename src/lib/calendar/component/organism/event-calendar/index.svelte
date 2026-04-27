<script lang="ts">
	import { createEventCalendarState } from '$stylist/calendar/function/state/event-calendar';
	import type { RecipeEventCalendar as EventCalendarStateProps } from '$stylist/calendar/interface/recipe/event-calendar';
	import { Icon as BaseIcon, Button } from '$stylist';

	const ChevronLeft = 'chevron-left';
	const ChevronRight = 'chevron-right';

	let props: EventCalendarStateProps = $props();
	const state = createEventCalendarState(props);
</script>

<div class={`${state.wrapperClasses} c-event-calendar ${state.className}`} {...state.restProps}>
	<div class={`${state.headerClasses} ${state.headerClassProp}`}>
		<div class="flex items-center">
			<Button variant="ghost" size="sm" onclick={() => state.navigateCurrent(-1)}>
				<BaseIcon name={ChevronLeft} class="h-5 w-5" />
			</Button>
			<Button variant="ghost" size="sm" onclick={state.navigateToToday} class="mx-2">
				Today
			</Button>
			<Button variant="ghost" size="sm" onclick={() => state.navigateCurrent(1)}>
				<BaseIcon name={ChevronRight} class="h-5 w-5" />
			</Button>
			<h2 class="ml-4 text-[--text-size-xl] font-[--font-weight-bold] text-[--color-text-primary]">{state.displayTitle}</h2>
		</div>

		<div class="flex space-x-[--spacing-sm]">
			<Button variant={state.currentViewMode === 'day' ? 'primary' : 'ghost'} size="sm" onclick={() => state.changeViewMode('day')}>
				Day
			</Button>
			<Button variant={state.currentViewMode === 'week' ? 'primary' : 'ghost'} size="sm" onclick={() => state.changeViewMode('week')}>
				Week
			</Button>
			<Button variant={state.currentViewMode === 'month' ? 'primary' : 'ghost'} size="sm" onclick={() => state.changeViewMode('month')}>
				Month
			</Button>
		</div>
	</div>

	{#if props.children}
		<div class="calendar-content">
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		{#if state.currentViewMode === 'day' || state.currentViewMode === 'week'}
			<div class="grid grid-cols-1 md:grid-cols-7">
				{#if state.currentViewMode === 'week'}
					{#each state.weekdays as day}
						<div class={`${state.getWeekdayHeaderClasses()} ${state.headerClassProp}`}>
							{day}
						</div>
					{/each}
				{/if}
				{#each state.days as day}
					<div class="border-r border-[--color-border-primary]">
						<div class={state.getDateHeaderClasses(day.isToday)}>
							{day.date.toLocaleDateString('en-US', { weekday: 'short' })}, {day.date.getDate()}
						</div>

						<div class="p-[--spacing-sm] max-h-[400px] overflow-y-auto">
							{#if state.showAllDayEvents}
								{#each day.events as event}
									<div
										class={`${state.getEventClasses(!!event.color, event.color)} ${state.eventClass}`}
										role="button"
										tabindex="0"
										onclick={(e) => state.handleEventClick(event, e)}
										onkeydown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												state.handleEventClick(event, e);
											}
										}}
									>
										{event.title}
										{#if state.showEventDuration && !event.allDay}
											<span class="text-[--text-size-xs] text-[--color-text-secondary] ml-1">
												({state.formatTimeRange(event.start, event.end)})
											</span>
										{/if}
										{#if state.showEventDuration && event.allDay}
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
			<div class={state.getGridClasses()}>
				{#each state.weekdays as day}
					<div class={`${state.getWeekdayHeaderClasses()} ${state.headerClassProp}`}>
						{day}
					</div>
				{/each}

				{#each state.days as day}
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
						<div class={state.getDateNumberClasses(day.isToday)}>
							{day.date.getDate()}
						</div>

						<div class="mt-[--spacing-xs] space-y-[--spacing-xs] max-h-[6rem] overflow-y-auto">
							{#if state.showAllDayEvents}
								{#each day.events as event}
									<div
										class={`${state.getEventClasses(!!event.color, event.color)} ${state.eventClass}`}
										role="button"
										tabindex="0"
										onclick={(e) => state.handleEventClick(event, e)}
										onkeydown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												state.handleEventClick(event, e);
											}
										}}
									>
										{event.title}
										{#if state.showEventDuration && event.allDay}
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

	{#if state.selectedEvent && state.showEventActions}
		<div class={state.getModalOverlayClasses()}>
			<div class={state.getModalContentClasses()}>
				<div class={state.getModalHeaderClasses()}>
					<h3 class="text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">{state.selectedEvent.title}</h3>
					<button onclick={state.closeEventActions} class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
						✕
					</button>
				</div>

				<div class="py-[--spacing-sm]">
					<p class="text-[--text-size-sm] text-[--color-text-secondary]">{state.selectedEvent.description}</p>
					<div class="mt-[--spacing-sm] text-[--text-size-xs] text-[--color-text-secondary]">
						<p>Start: {state.selectedEvent.start.toLocaleString()}</p>
						<p>End: {state.selectedEvent.end.toLocaleString()}</p>
						{#if state.selectedEvent.location}
							<p>SlotLocation: {state.selectedEvent.location}</p>
						{/if}
					</div>
				</div>

				<div class={state.getModalFooterClasses()}>
					<div class="flex space-x-[--spacing-sm]">
						<Button variant="secondary" size="sm" onclick={state.handleEventEdit}>
							Edit
						</Button>
						<Button variant="danger" size="sm" onclick={state.handleEventDelete}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
