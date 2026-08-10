<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { DASHBOARD_NAVIGATION_ITEM } from '$stylist/dashboard/const/array/dashboard-navigation-item';
	import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
	import DashboardSidebar from './index.svelte';

	let activeScreen = $state<DashboardScreen>('audit-tree');
</script>

<Story
	component={DashboardSidebar}
	title="DashboardSidebar"
	description="Local dashboard navigation for the four operational panels."
	category="Dashboard Molecules"
	tags={['dashboard', 'navigation']}
>
	{#snippet children()}
		<div class="_wrap">
			<DashboardSidebar
				items={[...DASHBOARD_NAVIGATION_ITEM]}
				{activeScreen}
				statusByScreen={{
					'audit-tree': 'warning',
					'pipeline-reports': 'ok',
					indexation: 'stale',
					'error-list': 'error'
				}}
				onSelect={(screen) => {
					activeScreen = screen;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._wrap {
		max-width: 18rem;
	}
</style>
