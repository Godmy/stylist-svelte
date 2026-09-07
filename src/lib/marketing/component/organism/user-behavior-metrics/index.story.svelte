<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import UserBehaviorMetrics from './index.svelte';

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

	const sampleMetrics = [
		{
			id: 'pageviews',
			name: 'Page Views',
			value: '23,456',
			change: 12.5,
			changeType: 'positive' as const,
			description: 'Total number of pages viewed'
		},
		{
			id: 'session',
			name: 'Session Duration',
			value: '4m 32s',
			change: 8.2,
			changeType: 'positive' as const,
			description: 'Average session length'
		},
		{
			id: 'bounce',
			name: 'Bounce Rate',
			value: '32.1%',
			change: -4.3,
			changeType: 'negative' as const,
			description: 'Percentage of single-page sessions'
		},
		{
			id: 'pages',
			name: 'Pages/Session',
			value: '3.24',
			change: 2.1,
			changeType: 'positive' as const,
			description: 'Average pages viewed per session'
		}
	];

	const minimalMetrics = [
		{ id: 'clicks', name: 'Clicks', value: '5,120', description: 'Total link clicks' },
		{ id: 'conversions', name: 'Conversions', value: '312', description: 'Goal completions' }
	];
</script>

<Story {id} {title} {description} component={UserBehaviorMetrics} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-user-behavior-metrics _c1">
			<div class="_c2">
				<p class="_c3">Default User Behavior Metrics</p>
				<p class="_c4">Full set of metrics with change indicators.</p>

				<div class="_c5">
					<UserBehaviorMetrics metrics={sampleMetrics} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Minimal Variant</h3>
				<p class="_c8">Condensed view with fewer metrics and custom title.</p>

				<div class="_c9">
					<UserBehaviorMetrics
						title="Quick Stats"
						subtitle="Last 24 hours"
						metrics={minimalMetrics}
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
