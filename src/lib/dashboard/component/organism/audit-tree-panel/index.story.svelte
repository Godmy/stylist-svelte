<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AuditTreePanel from './index.svelte';
	import fixture from '$stylist/dashboard/data/json/dashboard-fixture/index.json';
	import type { AuditTreeNode } from '$stylist/dashboard/type/struct/audit-tree-node';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';

	const auditTree = fixture.auditTree as AuditTreeNode[];
	const summary = fixture.pipelineStatus.steps[0] as DashboardReportSummary;
</script>

<Story title="AuditTreePanel" description="Dashboard organism for audit tree, filters and selected-node details">
	<div class="story-shell">
		<AuditTreePanel nodes={auditTree} {summary} />
	</div>
</Story>

<style>
	.story-shell {
		padding: 1rem;
		background: var(--color-background-secondary);
	}
</style>
