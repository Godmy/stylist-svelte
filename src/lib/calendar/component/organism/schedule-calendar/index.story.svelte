<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import * as ScheduleCalendarModule from './index.svelte';
	const ScheduleCalendar: any = ScheduleCalendarModule.default ?? ScheduleCalendarModule;
	import type { SlotCalendarEvent as ScheduleEvent } from '$stylist/calendar/interface/slot/calendar-event';

	export let id: string;
	export let title: string;
	export let description: string;
	export let controls: InterfaceControllerSettings[] = [
		{ name: 'showHeader', type: 'boolean', defaultValue: true },
		{ name: 'showTimeGutter', type: 'boolean', defaultValue: true }
	];

	// Sample events data
	const sampleEvents: ScheduleEvent[] = [
		{
			id: '1',
			title: 'Team Meeting',
			start: new Date(new Date().setHours(10, 0, 0, 0)),
			end: new Date(new Date().setHours(11, 30, 0, 0)),
			location: 'Conference Room A',
			color: '#3b82f6',
			priority: 'high'
		},
		{
			id: '2',
			title: 'Design SlotReview',
			start: new Date(
				new Date().setDate(new Date().getDate() + 1),
				new Date().setHours(14, 0, 0, 0)
			),
			end: new Date(
				new Date().setDate(new Date().getDate() + 1),
				new Date().setHours(15, 30, 0, 0)
			),
			location: 'Design Studio',
			color: '#10b981',
			priority: 'medium'
		},
		{
			id: '3',
			title: 'Client Call',
			start: new Date(
				new Date().setDate(new Date().getDate() + 2),
				new Date().setHours(9, 0, 0, 0)
			),
			end: new Date(new Date().setDate(new Date().getDate() + 2), new Date().setHours(10, 0, 0, 0)),
			location: 'Phone',
			color: '#8b5cf6',
			priority: 'high'
		},
		{
			id: '4',
			title: 'Lunch Break',
			start: new Date(
				new Date().setDate(new Date().getDate() + 3),
				new Date().setHours(12, 0, 0, 0)
			),
			end: new Date(new Date().setDate(new Date().getDate() + 3), new Date().setHours(13, 0, 0, 0)),
			location: 'Cafeteria',
			color: '#f59e0b',
			priority: 'low'
		}
	];

	// Event handlers
	function handleEventClick(event: ScheduleEvent) {
		console.log('Event clicked:', event.title);
	}

	function handleSlotClick(date: Date) {
		console.log('Time slot clicked:', date);
	}
</script>

<Story {id} {title} {description} component={ScheduleCalendar} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-schedule-calendar _c1">
			<div class="_c2">
				<p class="_c3">Primary Schedule Calendar Example</p>
				<p class="_c4">Interactive schedule calendar with time-based events.</p>

				<div class="_c5">
					<ScheduleCalendar
						events={sampleEvents}
						startDate={new Date()}
						endDate={new Date(new Date().setDate(new Date().getDate() + 6))}
						showHeader={values.showHeader ?? true}
						showTimeGutter={values.showTimeGutter ?? true}
						onEventClick={handleEventClick}
						onSlotClick={handleSlotClick}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Schedule Variations</h3>
				<p class="_c8">Different schedule calendar configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Header</p>
						<div class="_c12">
							<ScheduleCalendar
								events={sampleEvents}
								startDate={new Date()}
								endDate={new Date(new Date().setDate(new Date().getDate() + 4))}
								showHeader={false}
								showTimeGutter={true}
								onEventClick={handleEventClick}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Without Time Gutter</p>
						<div class="_c12">
							<ScheduleCalendar
								events={sampleEvents}
								startDate={new Date()}
								endDate={new Date(new Date().setDate(new Date().getDate() + 4))}
								showHeader={true}
								showTimeGutter={false}
								onEventClick={handleEventClick}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Limited Time Range</p>
						<div class="_c12">
							<ScheduleCalendar
								events={sampleEvents}
								startDate={new Date()}
								endDate={new Date(new Date().setDate(new Date().getDate() + 3))}
								startTime={9}
								endTime={17}
								showHeader={true}
								showTimeGutter={true}
								onEventClick={handleEventClick}
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	}
	._c10 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c12 {
		height: 20rem;
	}
	._c2 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		height: 500px;
	}
	._c6 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
