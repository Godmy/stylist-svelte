<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import PipelineReportsPanel from './index.svelte';
	import fixture from '$stylist/dashboard/data/json/dashboard-fixture/index.json';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';

	const reports = [...fixture.pipelineStatus.steps, ...fixture.reports] as DashboardReportSummary[];
</script>

<Story title="PipelineReportsPanel" description="Dashboard organism for run summaries, filtering and selected report details">
	<div class="story-shell">
		<PipelineReportsPanel {reports} />
	</div>
</Story>

<style>
	.story-shell {
		padding: 1rem;
		background: var(--color-background-secondary);
	}
</style>
