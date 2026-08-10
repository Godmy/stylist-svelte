<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DashboardRunButton from './index.svelte';
</script>

<Story
	component={DashboardRunButton}
	title="DashboardRunButton"
	description="Read-only pipeline command affordance until the server command boundary exists."
	category="Dashboard Atoms"
	tags={['dashboard', 'pipeline', 'command']}
>
	{#snippet children()}
		<div class="_row">
			<DashboardRunButton label="Run indexation" status="idle" />
			<DashboardRunButton label="Running errors" pending disabled={false} />
			<DashboardRunButton label="Run auditor" status="warning" confirmRequired />
		</div>
	{/snippet}
</Story>

<style>
	._row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
</style>
