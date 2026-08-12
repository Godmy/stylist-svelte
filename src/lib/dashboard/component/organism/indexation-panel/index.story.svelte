<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import IndexationPanel from './index.svelte';
	import fixture from '$stylist/dashboard/data/json/dashboard-fixture/index.json';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
	import type { IndexationRunSummary } from '$stylist/dashboard/type/object/indexation-run-summary';

	const summary = fixture.indexationSummary as IndexationRunSummary;
	const steps = fixture.pipelineStatus.steps as DashboardReportSummary[];
</script>

<Story title="IndexationPanel" description="Dashboard organism for indexation counters, steps and touched files">
	<div class="story-shell">
		<IndexationPanel {summary} {steps} changedIndexes={summary.changedIndexPaths} affectedDomains={summary.affectedDomains} />
	</div>
</Story>

<style>
	.story-shell {
		padding: 1rem;
		background: var(--color-background-secondary);
	}
</style>
