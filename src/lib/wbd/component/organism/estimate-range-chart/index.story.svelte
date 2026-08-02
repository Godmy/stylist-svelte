<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import EstimateRangeChart from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'itemCount', type: 'number', defaultValue: 12, min: 1, max: 20 }
	];

	const labels = [
		'Payment gateway integration',
		'Order confirmation email',
		'Cart abandonment recovery',
		'Guest checkout flow',
		'Address validation service',
		'Admin refund panel',
		'Inventory sync job',
		'Bulk order export',
		'Audit log viewer',
		'Role-based permissions',
		'Faceted search filters',
		'Autocomplete suggestions',
		'Personalized recommendations',
		'Search analytics dashboard',
		'Email notification templates',
		'SMS notification provider',
		'In-app notification center',
		'Notification preferences UI',
		'CI/CD pipeline upgrade',
		'Observability/tracing rollout'
	];

	const tasks = labels.map((label, index) => ({ id: `t${index + 1}`, label }));
	const results = Object.fromEntries(
		labels.map((_, index) => {
			const base = 2 + ((index * 7) % 12);
			const volatility = 1.1 + ((index * 3) % 10) / 10;
			return [
				`t${index + 1}`,
				{
					optimistic: +(base * 0.7).toFixed(1),
					mostLikely: base,
					pessimistic: +(base * volatility).toFixed(1),
					expected: +((base * 0.7 + 4 * base + base * volatility) / 6).toFixed(1),
					stdDev: +((base * volatility - base * 0.7) / 6).toFixed(1)
				}
			];
		})
	);
</script>

<Story
	{controls}
	component={EstimateRangeChart}
	title="EstimateRangeChart"
	category="Organisms/Wbd"
	description="Tornado/range chart comparing three-point estimates across many WBS items at once, sorted by spread."
>
	{#snippet children(values: any)}
		<EstimateRangeChart
			tasks={tasks.slice(0, values.itemCount as number)}
			results={Object.fromEntries(
				Object.entries(results).slice(0, values.itemCount as number)
			)}
			unit="d"
		/>
	{/snippet}
</Story>
