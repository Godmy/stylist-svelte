<script lang="ts">
	import { onMount } from 'svelte';
	import { DASHBOARD_NAVIGATION_ITEM } from '$stylist/dashboard/const/array/dashboard-navigation-item';
	import { DASHBOARD_PIPELINE_STEP } from '$stylist/dashboard/const/array/dashboard-pipeline-step';
	import { DASHBOARD_SCREEN_AUDIT_TREE } from '$stylist/dashboard/const/value/dashboard-screen-audit-tree';
	import { DASHBOARD_SCREEN_ERROR_LIST } from '$stylist/dashboard/const/value/dashboard-screen-error-list';
	import { DASHBOARD_SCREEN_INDEXATION } from '$stylist/dashboard/const/value/dashboard-screen-indexation';
	import { DASHBOARD_SCREEN_PIPELINE_REPORTS } from '$stylist/dashboard/const/value/dashboard-screen-pipeline-reports';
	import DashboardSidebar from '$stylist/dashboard/component/molecule/dashboard-sidebar/index.svelte';
	import DashboardStatusStrip from '$stylist/dashboard/component/molecule/dashboard-status-strip/index.svelte';
	import AuditTreePanel from '$stylist/dashboard/component/organism/audit-tree-panel/index.svelte';
	import ErrorListPanel from '$stylist/dashboard/component/organism/error-list-panel/index.svelte';
	import IndexationPanel from '$stylist/dashboard/component/organism/indexation-panel/index.svelte';
	import PipelineReportsPanel from '$stylist/dashboard/component/organism/pipeline-reports-panel/index.svelte';
	import type { RecipeDashboardShell } from '$stylist/dashboard/interface/recipe/dashboard-shell';
	import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
	import type { AuditTreeNode } from '$stylist/dashboard/type/struct/audit-tree-node';
	import type { DashboardNavigationItem } from '$stylist/dashboard/type/struct/dashboard-navigation-item';
	import type { DashboardPipelineStatus } from '$stylist/dashboard/type/struct/dashboard-pipeline-status';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/struct/error-diagnostic-item';
	import type { IndexationRunSummary } from '$stylist/dashboard/type/struct/indexation-run-summary';

	let {
		activeScreen = DASHBOARD_SCREEN_AUDIT_TREE,
		navigationItems = DASHBOARD_NAVIGATION_ITEM,
		pipelineStatus = {
			status: 'unknown',
			errorCount: 0,
			warningCount: 0,
			totalFiles: 0,
			steps: DASHBOARD_PIPELINE_STEP
		},
		auditTree = [],
		reports = DASHBOARD_PIPELINE_STEP,
		indexationSummary,
		errors = [],
		loadingByScreen = {},
		onScreenChange,
		onRefresh,
		onRunIndexation,
		onOpenReport,
		onOpenFile,
		class: className = ''
	}: Partial<RecipeDashboardShell> & {
		onRunIndexation?: () => void;
		onOpenReport?: (report: DashboardReportSummary) => void;
		onOpenFile?: (item: ErrorDiagnosticItem) => void;
	} = $props();

	let localScreen = $state<DashboardScreen>(activeScreen);
	let navigationItemsState = $state<DashboardNavigationItem[]>([...navigationItems]);
	let pipelineStatusState = $state<DashboardPipelineStatus>(pipelineStatus);
	let auditTreeState = $state<AuditTreeNode[]>(auditTree);
	let reportsState = $state<DashboardReportSummary[]>(reports);
	let indexationSummaryState = $state<IndexationRunSummary | undefined>(indexationSummary);
	let errorsState = $state<ErrorDiagnosticItem[]>(errors);
	let loadingByScreenState = $state<NonNullable<RecipeDashboardShell['loadingByScreen']>>(loadingByScreen);
	let loadError = $state<string | undefined>();
	let selectedReportId = $state<string | undefined>(reports[0]?.id);
	let selectedErrorId = $state<string | undefined>(errors[0]?.id);

	const selectedNavigationItem = $derived(
		navigationItemsState.find((item) => item.id === localScreen) ?? navigationItemsState[0]
	);
	const auditSummary = $derived(
		pipelineStatusState.steps.find((step) => step.tool === 'auditor') ?? reportsState.find((report) => report.tool === 'auditor') ?? pipelineStatusState.steps[0] ?? reportsState[0]
	);
	const reportList = $derived([...pipelineStatusState.steps, ...reportsState].filter((report, index, list) => list.findIndex((item) => item.id === report.id) === index));
	const summaryByTool = $derived(
		Object.fromEntries(reportList.map((report) => [report.tool, report])) as Partial<Record<DashboardReportSummary['tool'], DashboardReportSummary>>
	);
	const resolvedNavigationItems = $derived(
		navigationItemsState.map((item) => {
			if (item.id === DASHBOARD_SCREEN_AUDIT_TREE) {
				return { ...item, status: resolveNavigationStatus(summaryByTool.auditor?.status, item.status) };
			}
			if (item.id === DASHBOARD_SCREEN_PIPELINE_REPORTS) {
				return { ...item, status: pipelineStatusState.status };
			}
			if (item.id === DASHBOARD_SCREEN_INDEXATION) {
				const status = indexationSummaryState?.status ?? summaryByTool.indexation?.status;
				return { ...item, status: resolveNavigationStatus(status, item.status) };
			}
			if (item.id === DASHBOARD_SCREEN_ERROR_LIST) {
				return { ...item, status: resolveNavigationStatus(summaryByTool.errors?.status, item.status) };
			}
			return item;
		})
	);

	function resolveNavigationStatus(
		status: DashboardReportSummary['status'] | undefined,
		fallback: DashboardNavigationItem['status']
	): DashboardNavigationItem['status'] {
		if (status === 'success') return 'ok';
		if (status === 'failed') return 'error';
		if (status === 'no-data') return 'stale';
		return status ?? fallback;
	}

	function handleScreenSelect(screen: DashboardScreen) {
		localScreen = screen;
		onScreenChange?.(screen);
	}

	async function loadDashboardData() {
		loadingByScreenState = {
			[DASHBOARD_SCREEN_AUDIT_TREE]: true,
			[DASHBOARD_SCREEN_PIPELINE_REPORTS]: true,
			[DASHBOARD_SCREEN_INDEXATION]: true,
			[DASHBOARD_SCREEN_ERROR_LIST]: true
		};
		loadError = undefined;

		try {
			const [reportsResponse, auditResponse, errorsResponse, indexationResponse] = await Promise.all([
				fetch('/api/dashboard/reports/latest'),
				fetch('/api/dashboard/audit-tree'),
				fetch('/api/dashboard/errors/latest'),
				fetch('/api/dashboard/indexation/latest')
			]);
			const reportsPayload = reportsResponse.ok
				? ((await reportsResponse.json()) as {
						reports?: DashboardReportSummary[];
						status?: DashboardPipelineStatus;
					})
				: {};
			const auditPayload = auditResponse.ok
				? ((await auditResponse.json()) as { root?: AuditTreeNode; report?: DashboardReportSummary })
				: {};
			const errorsPayload = errorsResponse.ok
				? ((await errorsResponse.json()) as { items?: ErrorDiagnosticItem[]; report?: DashboardReportSummary })
				: {};
			const indexationPayload = indexationResponse.ok
				? ((await indexationResponse.json()) as {
						summary?: IndexationRunSummary;
						report?: DashboardReportSummary;
					})
				: {};
			const nextReports = reportsPayload.reports ?? [];

			reportsState = [
				...nextReports,
				...(auditPayload.report ? [auditPayload.report] : []),
				...(errorsPayload.report ? [errorsPayload.report] : []),
				...(indexationPayload.report ? [indexationPayload.report] : [])
			].filter((report, index, list) => list.findIndex((item) => item.id === report.id) === index);
			pipelineStatusState =
				reportsPayload.status ?? {
					status: 'unknown',
					errorCount: reportsState.reduce((count, report) => count + report.errorCount, 0),
					warningCount: reportsState.reduce((count, report) => count + report.warningCount, 0),
					totalFiles: reportsState.reduce((count, report) => count + report.totalFiles, 0),
					steps: reportsState
				};
			auditTreeState = auditPayload.root ? [auditPayload.root] : [];
			errorsState = errorsPayload.items ?? [];
			indexationSummaryState = indexationPayload.summary;
			selectedReportId = reportsState[0]?.id;
			selectedErrorId = errorsState[0]?.id;
		} catch (error) {
			loadError = error instanceof Error ? error.message : 'Failed to load dashboard data.';
		} finally {
			loadingByScreenState = {};
		}
	}

	onMount(() => {
		void loadDashboardData();
	});
</script>

<main class="c-dashboard-workspace {className}">
	<section class="c-dashboard-workspace__masthead" aria-label="Dashboard heading">
		<div>
			<p class="c-dashboard-workspace__eyebrow">Stylist Dashboard</p>
			<h1>{selectedNavigationItem?.label ?? 'Dashboard'}</h1>
		</div>
		<p>{selectedNavigationItem?.description ?? 'Internal pipeline overview'}</p>
	</section>

	<DashboardStatusStrip
		pipeline={pipelineStatusState}
		steps={pipelineStatusState.steps}
		busy={pipelineStatusState.status === 'running'}
		onRefresh={() => {
			onRefresh?.();
			void loadDashboardData();
		}}
	/>

	{#if loadError}
		<p class="c-dashboard-workspace__load-error">{loadError}</p>
	{/if}

	<section class="c-dashboard-workspace__grid">
		<DashboardSidebar items={resolvedNavigationItems} activeScreen={localScreen} onSelect={handleScreenSelect} />

		<section class="c-dashboard-workspace__panel" aria-live="polite">
			{#if localScreen === DASHBOARD_SCREEN_AUDIT_TREE}
				<AuditTreePanel
					summary={auditSummary}
					nodes={auditTreeState}
					loading={loadingByScreenState[DASHBOARD_SCREEN_AUDIT_TREE]}
				/>
			{:else if localScreen === DASHBOARD_SCREEN_PIPELINE_REPORTS}
				<PipelineReportsPanel
					reports={reportList}
					{selectedReportId}
					{summaryByTool}
					loading={loadingByScreenState[DASHBOARD_SCREEN_PIPELINE_REPORTS]}
					onSelectReport={(report) => (selectedReportId = report.id)}
					{onOpenReport}
				/>
			{:else if localScreen === DASHBOARD_SCREEN_INDEXATION}
				<IndexationPanel
					summary={indexationSummaryState}
					steps={pipelineStatusState.steps}
					changedIndexes={indexationSummaryState?.changedIndexPaths ?? []}
					affectedDomains={indexationSummaryState?.affectedDomains ?? []}
					running={pipelineStatusState.status === 'running'}
					canRun={Boolean(onRunIndexation)}
					onRun={onRunIndexation}
				/>
			{:else if localScreen === DASHBOARD_SCREEN_ERROR_LIST}
				<ErrorListPanel
					items={errorsState}
					selectedId={selectedErrorId}
					loading={loadingByScreenState[DASHBOARD_SCREEN_ERROR_LIST]}
					onSelect={(item) => (selectedErrorId = item.id)}
					{onOpenFile}
				/>
			{/if}
		</section>
	</section>
</main>

<style>
	.c-dashboard-workspace {
		box-sizing: border-box;
		display: grid;
		gap: 0.85rem;
		min-height: 100vh;
		min-width: 0;
		padding: 1rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-dashboard-workspace__masthead {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		min-width: 0;
	}

	.c-dashboard-workspace__masthead h1,
	.c-dashboard-workspace__masthead p,
	.c-dashboard-workspace__eyebrow {
		margin: 0;
	}

	.c-dashboard-workspace__masthead h1 {
		margin-top: 0.25rem;
		font-size: 1.35rem;
		line-height: 1.15;
	}

	.c-dashboard-workspace__masthead > p {
		max-width: 34rem;
		overflow-wrap: anywhere;
		text-align: right;
		font-size: 0.84rem;
		color: var(--color-text-secondary);
	}

	.c-dashboard-workspace__eyebrow {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.c-dashboard-workspace__grid {
		display: grid;
		grid-template-columns: minmax(14rem, 17rem) minmax(0, 1fr);
		gap: 0.85rem;
		min-height: 0;
		min-width: 0;
	}

	.c-dashboard-workspace__panel {
		box-sizing: border-box;
		min-height: 34rem;
		min-width: 0;
		padding: 0.85rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		overflow: auto;
	}

	@media (max-width: 880px) {
		.c-dashboard-workspace__masthead {
			align-items: start;
			flex-direction: column;
		}

		.c-dashboard-workspace__masthead > p {
			text-align: left;
		}

		.c-dashboard-workspace__grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.c-dashboard-workspace {
			padding: 0.65rem;
		}

		.c-dashboard-workspace__panel {
			padding: 0.65rem;
		}
	}
</style>
