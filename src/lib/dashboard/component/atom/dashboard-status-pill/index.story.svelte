<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DashboardStatusPill from './index.svelte';

	const statuses = ['ok', 'warning', 'error', 'running', 'stale', 'unknown', 'no-data'] as const;
</script>

<Story
	component={DashboardStatusPill}
	title="DashboardStatusPill"
	description="Compact dashboard status badge for pipeline and diagnostic states."
	category="Dashboard Atoms"
	tags={['dashboard', 'status']}
>
	{#snippet children()}
		<div class="_grid">
			{#each statuses as status}
				<DashboardStatusPill {status} label={status} />
			{/each}
			<DashboardStatusPill status="warning" label="Long stale analyzer output label" compact />
		</div>
	{/snippet}
</Story>

<style>
	._grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
		max-width: 34rem;
	}
</style>
