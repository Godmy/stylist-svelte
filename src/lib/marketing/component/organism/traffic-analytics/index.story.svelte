<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import TrafficAnalytics from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = []
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	const trafficSources = [
		{ id: 'direct', name: 'Direct', value: 45, percentage: 45, color: '#3b82f6' },
		{ id: 'social', name: 'Social', value: 25, percentage: 25, color: '#8b5cf6' },
		{ id: 'referral', name: 'Referral', value: 20, percentage: 20, color: '#ec4899' },
		{ id: 'organic', name: 'Organic', value: 10, percentage: 10, color: '#10b981' }
	];

	const trafficData = [
		{ date: new Date(2023, 0, 1), value: 1000 },
		{ date: new Date(2023, 0, 2), value: 1200 },
		{ date: new Date(2023, 0, 3), value: 900 },
		{ date: new Date(2023, 0, 4), value: 1400 },
		{ date: new Date(2023, 0, 5), value: 1600 },
		{ date: new Date(2023, 0, 6), value: 1800 },
		{ date: new Date(2023, 0, 7), value: 1300 }
	];
</script>

<Story {id} {title} {description} component={TrafficAnalytics} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-traffic-analytics _c1">
			<div class="_c2">
				<p class="_c3">Default Traffic Analytics</p>
				<p class="_c4">Standard analytics dashboard with traffic sources and chart.</p>

				<div class="_c5">
					<TrafficAnalytics
						totalVisitors={12500}
						uniqueVisitors={9800}
						pageViews={52000}
						timeOnPage="2m 45s"
						bounceRate={32}
						{trafficSources}
						{trafficData}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">High Bounce Rate Variant</h3>
				<p class="_c8">Analytics with elevated bounce rate indicator.</p>

				<div class="_c9">
					<TrafficAnalytics
						title="Weekly Overview"
						subtitle="High traffic period"
						totalVisitors={3200}
						uniqueVisitors={2100}
						pageViews={8900}
						timeOnPage="1m 12s"
						bounceRate={72}
						{trafficSources}
						{trafficData}
					/>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c2 {
		border-radius: 2rem;
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
	}
	._c6 {
		border-radius: 2rem;
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
</style>
