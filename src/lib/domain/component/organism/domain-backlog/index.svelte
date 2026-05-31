<script lang="ts">
	import { Icon } from '$stylist/media';
	import BacklogViewTabs from '$stylist/management/component/molecule/backlog-view-tabs/index.svelte';
	import IssuesTable from '$stylist/management/component/molecule/issues-table/index.svelte';
	import KanbanBoard from '$stylist/management/component/organism/kanban-board/index.svelte';
	import ScrumBacklog from '$stylist/management/component/molecule/scrum-backlog/index.svelte';
	import BurnDownChart from '$stylist/management/component/molecule/burn-down-chart/index.svelte';
	import type {
		KanbanBoardAction,
		KanbanBoardType
	} from '$stylist/management/type/struct/kanban-board';
	import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
	import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';
	import type { SlotBurnDownData as BurnDownData } from '$stylist/management/interface/slot/burn-down-data';
	import type { SlotIssueMessage as IssueMessage } from '$stylist/management/interface/slot/issue-message';

	interface DomainBacklogProps {
		title?: string;
		sprintName?: string;
		path?: string;
		sourceLabel?: string;
		saveStatus?: 'idle' | 'dirty' | 'saving' | 'saved' | 'error';
		isFallback?: boolean;
		lastSavedAt?: Date | null;
		issues?: IssueMessage[];
		backlogData?: BacklogData;
		kanbanBoard?: KanbanBoardType;
		burnDownData?: BurnDownData;
		loading?: boolean;
		saving?: boolean;
		dirty?: boolean;
		error?: string;
		onSave?: () => void;
		onReload?: () => void;
		onItemAdd?: (item: BacklogItem) => void;
		onItemUpdate?: (item: BacklogItem) => void;
		onItemDelete?: (id: string) => void;
		onIssuesMoveToBacklog?: (items: IssueMessage[]) => void;
		onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
		class?: string;
	}

	let {
		title = 'Backlog',
		sprintName = 'Current sprint',
		path = '',
		sourceLabel = '',
		saveStatus = 'idle',
		isFallback = false,
		lastSavedAt = null,
		issues = [],
		backlogData = { items: [] },
		kanbanBoard = { id: 'domain-backlog-board', title: 'Delivery flow', columns: [] },
		burnDownData = { sprintStart: new Date(), sprintEnd: new Date(), points: [] },
		loading = false,
		saving = false,
		dirty = false,
		error = '',
		onSave,
		onReload,
		onItemAdd,
		onItemUpdate,
		onItemDelete,
		onIssuesMoveToBacklog,
		onBoardChange,
		class: className = ''
	}: DomainBacklogProps = $props();

	let activeView = $state<'issues' | 'backlog' | 'kanban' | 'sprint' | 'burn-down' | 'archive'>(
		'issues'
	);

	const issuesCount = $derived(issues.length);
	const todoCount = $derived(backlogData.items.filter((item) => item.status === 'todo').length);
	const inProgressCount = $derived(
		backlogData.items.filter((item) => item.status === 'in-progress').length
	);
	const doneCount = $derived(backlogData.items.filter((item) => item.status === 'done').length);
</script>

<section class="c-domain-backlog {className}" aria-label="Domain backlog">
	<div class="panel-body">
		{#if loading}
			<p class="panel-status">Loading...</p>
		{:else}
			<div class="panel-layout">
				<section class="workspace-summary">
					<div class="workspace-title-block">
						<p class="workspace-title">BACKLOG</p>
					</div>
					<div class="workspace-toolbar">
						<BacklogViewTabs value={activeView} onValueChange={(value) => (activeView = value)} />
					</div>
					<div class="hero-metrics">
						<div class="metric" data-label="Issues" title="Issues" aria-label="Issues">
							<Icon name="backlog-status-issues" size={16} class="metric-icon" />
							<strong>{issuesCount}</strong>
						</div>
						<div class="metric" data-label="To do" title="To do" aria-label="To do">
							<Icon name="backlog-status-todo" size={16} class="metric-icon" />
							<strong>{todoCount}</strong>
						</div>
						<div
							class="metric"
							data-label="In progress"
							title="In progress"
							aria-label="In progress"
						>
							<Icon name="backlog-status-progress" size={16} class="metric-icon" />
							<strong>{inProgressCount}</strong>
						</div>
						<div class="metric" data-label="Done" title="Done" aria-label="Done">
							<Icon name="backlog-status-done" size={16} class="metric-icon" />
							<strong>{doneCount}</strong>
						</div>
					</div>
				</section>

				<section
					class="workspace-card workspace-card--content"
					class:workspace-card--content-chart={activeView === 'burn-down'}
					class:workspace-card--content-backlog={activeView === 'backlog'}
				>
					{#if activeView === 'issues'}
						<IssuesTable items={issues} onMoveToBacklog={onIssuesMoveToBacklog} />
					{:else if activeView === 'kanban'}
						<KanbanBoard
							board={kanbanBoard}
							controlled={true}
							allowColumnAdd={false}
							allowCardAdd={false}
							allowInlineEdit={false}
							allowCardArchive={false}
							{onBoardChange}
						/>
					{:else if activeView === 'burn-down'}
						<BurnDownChart data={burnDownData} width={1180} height={520} title="" />
					{:else if activeView === 'sprint'}
						<div class="placeholder-card">
							<h2>Sprint</h2>
							<p>
								TDD placeholder: sprint items will be selected from backlog and tracked as a
								separate execution surface.
							</p>
						</div>
					{:else if activeView === 'archive'}
						<div class="placeholder-card">
							<h2>Archive</h2>
							<p>
								TDD placeholder: archived backlog items and resolution records will be stored and
								shown here.
							</p>
						</div>
					{:else}
						<ScrumBacklog data={backlogData} {onItemAdd} {onItemUpdate} {onItemDelete} />
					{/if}
				</section>
			</div>
		{/if}
	</div>
</section>

<style>
	.c-domain-backlog {
		--domain-menu-top: 0.75rem;
		--domain-menu-right: 0.75rem;
		--domain-menu-height: 3.85rem;
		--domain-menu-width: 24.15rem;
		display: grid;
		grid-template-rows: minmax(0, 1fr);
		min-height: 100vh;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 28px;
		background:
			radial-gradient(
				circle at top,
				color-mix(in srgb, var(--color-primary-500) 12%, transparent),
				transparent 34%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 96%, white 4%) 0%,
				color-mix(
						in srgb,
						var(--color-background-primary) 90%,
						var(--color-background-secondary) 10%
					)
					100%
			);
		color: var(--color-text-primary);
	}

	.eyebrow {
		margin: 0 0 0.3rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.panel-body {
		min-height: 0;
		padding: calc(var(--domain-menu-top) + var(--domain-menu-height) + 0.65rem) 0 0;
		display: grid;
		gap: 0.85rem;
		overflow: auto;
	}

	.panel-layout {
		display: grid;
		gap: 1rem;
	}

	.workspace-card {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 24px;
		background: color-mix(in srgb, var(--color-background-primary) 95%, white 5%);
		box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
	}

	.workspace-summary {
		position: fixed;
		top: var(--domain-menu-top);
		left: 1rem;
		right: calc(var(--domain-menu-right) + var(--domain-menu-width) + 1rem);
		z-index: 15;
		display: grid;
		grid-template-columns: auto auto auto;
		align-items: center;
		justify-content: start;
		gap: 1rem;
		height: var(--domain-menu-height);
		padding: 0 0.2rem;
	}

	.workspace-title {
		margin: 0;
		font-size: 1.4rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-primary);
		text-shadow: 0 1px 0 color-mix(in srgb, var(--color-background-primary) 70%, transparent);
	}

	.workspace-title-block {
		display: flex;
		align-items: center;
	}

	.hero-metrics {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		gap: 0.5rem;
		margin-left: 0.25rem;
	}

	.metric {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		min-width: 3.4rem;
		height: 2.7rem;
		padding: 0 0.75rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-secondary) 72%, transparent);
		box-sizing: border-box;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		color: var(--color-text-primary);
		transition:
			transform 140ms ease,
			border-color 140ms ease,
			background-color 140ms ease;
	}

	.metric:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--color-primary-500) 38%, var(--color-border-primary) 62%);
		background: color-mix(in srgb, var(--color-background-primary) 88%, transparent);
	}

	.metric::after {
		content: attr(data-label);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.45rem);
		transform: translateX(-50%) translateY(-4px);
		padding: 0.3rem 0.55rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-primary) 78%, black 22%);
		color: color-mix(in srgb, var(--color-text-primary) 8%, white 92%);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.03em;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition:
			opacity 140ms ease,
			transform 140ms ease;
		box-shadow: 0 14px 24px rgba(15, 23, 42, 0.2);
	}

	.metric:hover::after {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}

	.metric-icon {
		color: var(--color-text-secondary);
	}

	.metric strong {
		font-size: 1rem;
		font-weight: 800;
		line-height: 1;
	}

	.workspace-toolbar {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 2.7rem;
	}

	.workspace-card {
		padding: 1rem;
		overflow: hidden;
	}

	.workspace-card--content {
		min-height: 24rem;
	}

	.workspace-card--content-chart {
		display: grid;
		align-items: start;
		padding: 1.1rem;
	}

	.workspace-card--content-backlog {
		padding: 0;
	}

	.placeholder-card {
		display: grid;
		gap: 0.6rem;
		padding: 1.35rem 1.45rem;
		border: 1px dashed color-mix(in srgb, var(--color-border-primary) 86%, transparent);
		border-radius: 20px;
		background: color-mix(in srgb, var(--color-background-secondary) 52%, transparent);
	}

	.placeholder-card h2 {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.placeholder-card p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.panel-content {
		margin: 0;
		white-space: pre-wrap;
		word-break: break-word;
		padding: 1rem 1.1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 18px;
		background: color-mix(in srgb, var(--color-background-primary) 94%, transparent);
		color: inherit;
		font: inherit;
		line-height: 1.6;
	}

	.panel-status,
	.panel-error {
		margin: 0;
		font-size: 0.88rem;
	}

	.panel-error {
		color: #b91c1c;
	}

	@media (max-width: 840px) {
		.c-domain-backlog {
			padding: 0.75rem;
			border-radius: 22px;
		}

		.panel-body {
			padding-top: calc(env(safe-area-inset-top, 0px) + 7.75rem);
		}

		.workspace-summary {
			position: static;
			right: auto;
			height: auto;
			grid-template-columns: 1fr;
			gap: 0.9rem;
		}

		.panel-body {
			padding-inline: 0;
		}

		.hero-metrics {
			justify-content: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
