<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DashboardCountTile from './index.svelte';
</script>

<Story
	component={DashboardCountTile}
	title="DashboardCountTile"
	description="Stable metric tile for dense dashboard counters."
	category="Dashboard Atoms"
	tags={['dashboard', 'metric']}
>
	{#snippet children()}
		<div class="_grid">
			<DashboardCountTile label="Errors" value={18} status="error" delta="+4" caption="latest run" />
			<DashboardCountTile label="Warnings" value={42} status="warning" delta="-7" caption="since previous" />
			<DashboardCountTile label="Files scanned" value={1284} unit="files" status="ok" caption="auditor" />
			<DashboardCountTile label="Long metric label stays inside tile" value="..." status="running" loading />
		</div>
	{/snippet}
</Story>

<style>
	._grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		gap: 0.75rem;
		max-width: 52rem;
	}
</style>
