<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { DASHBOARD_PIPELINE_STEP } from '$stylist/dashboard/const/array/dashboard-pipeline-step';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
	import PipelineReportList from './index.svelte';

	const reports: DashboardReportSummary[] = DASHBOARD_PIPELINE_STEP.map((report, index) => ({
		...report,
		status: (index === 3 ? 'failed' : index === 0 ? 'success' : report.status) as DashboardReportSummary['status'],
		updatedAt: `2026-08-10T12:4${index}:00Z`,
		errorCount: index === 3 ? 8 : 0,
		warningCount: index === 2 ? 12 : 0
	}));
</script>

<Story
	component={PipelineReportList}
	title="PipelineReportList"
	description="Dense selectable list of pipeline output folders and README reports."
	category="Dashboard Molecules"
	tags={['dashboard', 'reports']}
>
	{#snippet children()}
		<div class="_wrap">
			<PipelineReportList {reports} activeReportId="errors-latest" />
		</div>
	{/snippet}
</Story>

<style>
	._wrap {
		max-width: 44rem;
	}
</style>
