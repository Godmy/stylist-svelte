<script lang="ts">
	import type { RecipeStatCard } from '$stylist/management/interface/recipe/stat-card';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import StatCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'text', type: 'text', defaultValue: 'Total Components' },
		{ name: 'value', type: 'text', defaultValue: '429' },
		{ name: 'trend', type: 'select', options: ['up', 'down', 'neutral'], defaultValue: 'up' }
	];

	const sampleStats: RecipeStatCard[] = [
		{
			text: 'Total Components',
			value: '429',
			icon: 'package',
			trend: 'up',
			trendValue: '+23 this month',
			description: 'Production-ready Svelte 5 components'
		},
		{
			text: 'Test Coverage',
			value: '94%',
			icon: 'shield',
			trend: 'neutral',
			description: 'Automated testing coverage'
		}
	];
</script>

<Story
	component={StatCard}
	title="Stat Card"
	description="Metric card with trend and description."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			{#each sampleStats as stat}
				<StatCard
					text={stat.text}
					value={stat.value}
					icon={stat.icon}
					trend={stat.trend}
					trendValue={stat.trendValue}
					description={stat.description}
					animated={stat.animated}
				/>
			{/each}
			<StatCard
				text={values.text as string}
				value={values.value as string}
				trend={values.trend as 'up' | 'down' | 'neutral'}
				icon="package"
				description="Production-ready Svelte 5 components"
			/>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
