<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { DASHBOARD_PIPELINE_STEP } from '$stylist/dashboard/const/array/dashboard-pipeline-step';
	import type { DashboardPipelineStatus } from '$stylist/dashboard/type/struct/dashboard-pipeline-status';
	import DashboardStatusStrip from './index.svelte';

	const pipeline: DashboardPipelineStatus = {
		status: 'warning',
		updatedAt: '2026-08-10T12:40:00Z',
		errorCount: 8,
		warningCount: 21,
		totalFiles: 1284,
		steps: DASHBOARD_PIPELINE_STEP.map((step, index) => ({
			...step,
			status: index === 3 ? 'failed' : index === 2 ? 'warning' : 'success',
			errorCount: index === 3 ? 8 : 0,
			warningCount: index === 2 ? 21 : 0
		}))
	};
</script>

<Story
	component={DashboardStatusStrip}
	title="DashboardStatusStrip"
	description="Sticky status summary for the dashboard pipeline."
	category="Dashboard Molecules"
	tags={['dashboard', 'pipeline']}
>
	{#snippet children()}
		<DashboardStatusStrip {pipeline} />
	{/snippet}
</Story>
