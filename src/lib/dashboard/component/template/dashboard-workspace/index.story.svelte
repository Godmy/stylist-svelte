<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DashboardWorkspace from './index.svelte';
	import fixture from '$stylist/dashboard/data/json/dashboard-fixture/index.json';
	import type { AuditTreeNode } from '$stylist/dashboard/type/struct/audit-tree-node';
	import type { DashboardNavigationItem } from '$stylist/dashboard/type/struct/dashboard-navigation-item';
	import type { DashboardPipelineStatus } from '$stylist/dashboard/type/struct/dashboard-pipeline-status';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';
	import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/struct/error-diagnostic-item';
	import type { IndexationRunSummary } from '$stylist/dashboard/type/struct/indexation-run-summary';

	const activeScreen = fixture.activeScreen as DashboardScreen;
	const navigationItems = fixture.navigationItems as DashboardNavigationItem[];
	const pipelineStatus = fixture.pipelineStatus as DashboardPipelineStatus;
	const auditTree = fixture.auditTree as AuditTreeNode[];
	const reports = fixture.reports as DashboardReportSummary[];
	const indexationSummary = fixture.indexationSummary as IndexationRunSummary;
	const errors = fixture.errors as ErrorDiagnosticItem[];
</script>

<Story
	component={DashboardWorkspace}
	title="DashboardWorkspace"
	description="Operational dashboard template for audit tree, pipeline reports, indexation, and errors."
>
	{#snippet children()}
		<DashboardWorkspace
			{activeScreen}
			{navigationItems}
			{pipelineStatus}
			{auditTree}
			{reports}
			{indexationSummary}
			{errors}
		/>
	{/snippet}
</Story>
