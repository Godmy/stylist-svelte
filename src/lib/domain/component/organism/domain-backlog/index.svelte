<script lang="ts">
	import KanbanBoard from '$stylist/management/component/organism/kanban-board/index.svelte';
	import ScrumBacklog from '$stylist/management/component/molecule/scrum-backlog/index.svelte';
	import BurnDownChart from '$stylist/management/component/molecule/burn-down-chart/index.svelte';
	import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';
	import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
	import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';
	import type { SlotBurnDownData as BurnDownData } from '$stylist/management/interface/slot/burn-down-data';

	interface DomainBacklogProps {
		title?: string;
		path?: string;
		content?: string;
		loading?: boolean;
		error?: string;
		class?: string;
	}

	let {
		title = 'Backlog',
		path = '',
		content = '',
		loading = false,
		error = '',
		class: className = ''
	}: DomainBacklogProps = $props();

	function createFallbackBacklogItems(): BacklogItem[] {
		return [
			{
				id: 'backlog-1',
				title: 'Map filesystem actions for backlog',
				description: 'Define create, move, copy, delete and write flows for disk-backed backlog entries.',
				assignee: 'Domain workspace',
				priority: 'high',
				estimatedHours: 8,
				status: 'todo',
				tags: ['filesystem', 'server'],
				createdAt: new Date(2026, 4, 11),
				updatedAt: new Date(2026, 4, 11)
			},
			{
				id: 'backlog-2',
				title: 'Split action menus inside domain explorer',
				description: 'Prepare dedicated menus for entity, file and structure actions.',
				assignee: 'Domain workspace',
				priority: 'medium',
				estimatedHours: 5,
				status: 'in-progress',
				tags: ['menu', 'explorer'],
				createdAt: new Date(2026, 4, 12),
				updatedAt: new Date(2026, 4, 12)
			},
			{
				id: 'backlog-3',
				title: 'Rebuild backlog screen as an operations panel',
				description: 'Replace passive markdown preview with planning widgets and status panels.',
				assignee: 'Domain workspace',
				priority: 'low',
				estimatedHours: 3,
				status: 'done',
				tags: ['ui', 'planning'],
				createdAt: new Date(2026, 4, 13),
				updatedAt: new Date(2026, 4, 13)
			}
		];
	}

	function buildBacklogItems(source: string): BacklogItem[] {
		const bulletLines = source
			.split(/\r?\n/)
			.map((line) => line.trim())
			.filter((line) => /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line));

		if (bulletLines.length === 0) {
			return createFallbackBacklogItems();
		}

		return bulletLines.slice(0, 9).map((line, index) => {
			const title = line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim();
			const priorities: Array<'high' | 'medium' | 'low'> = ['high', 'medium', 'low'];
			const statuses: Array<'todo' | 'in-progress' | 'done'> = ['todo', 'in-progress', 'done'];
			const createdAt = new Date(2026, 4, 11 + index);

			return {
				id: `backlog-line-${index + 1}`,
				title: title || `Backlog item ${index + 1}`,
				description: `Generated from backlog note ${index + 1}.`,
				assignee: 'Domain workspace',
				priority: priorities[index % priorities.length],
				estimatedHours: 2 + index * 2,
				status: statuses[index % statuses.length],
				tags: ['backlog', 'derived'],
				createdAt,
				updatedAt: createdAt
			};
		});
	}

	function buildKanbanBoard(backlogData: BacklogData): KanbanBoardType {
		const statuses: Array<{ id: 'todo' | 'in-progress' | 'done'; title: string }> = [
			{ id: 'todo', title: 'To do' },
			{ id: 'in-progress', title: 'In progress' },
			{ id: 'done', title: 'Done' }
		];

		return {
			id: 'domain-backlog-board',
			title: 'Delivery flow',
			columns: statuses.map((status) => ({
				id: status.id,
				title: status.title,
				cards: backlogData.items
					.filter((item) => item.status === status.id)
					.map((item, index) => ({
						id: item.id,
						title: item.title,
						description: item.description,
						order: index,
						priority: item.priority,
						status: item.status,
						tags: item.tags,
						updatedAt: item.updatedAt,
						assignee: item.assignee ? { name: item.assignee } : undefined
					}))
			}))
		};
	}

	function buildBurnDownData(backlogData: BacklogData): BurnDownData {
		const total = backlogData.items.reduce((sum, item) => sum + (item.estimatedHours ?? 4), 0);
		const pointCount = 7;
		const points = Array.from({ length: pointCount }, (_, index) => {
			const ideal = Math.max(0, total - (total / (pointCount - 1)) * index);
			const actual = Math.max(0, total - (total / pointCount) * Math.max(0, index - 1));

			return {
				date: new Date(2026, 4, 11 + index),
				ideal: Math.round(ideal),
				actual: Math.round(actual)
			};
		});

		return {
			sprintStart: points[0].date,
			sprintEnd: points[points.length - 1].date,
			points
		};
	}

	const backlogData = $derived.by<BacklogData>(() => ({
		items: buildBacklogItems(content)
	}));
	const kanbanBoard = $derived.by<KanbanBoardType>(() => buildKanbanBoard(backlogData));
	const burnDownData = $derived.by<BurnDownData>(() => buildBurnDownData(backlogData));
</script>

<section class="c-domain-backlog {className}" aria-label="Domain backlog">
	<header class="panel-head">
		<div>
			<p class="eyebrow">Backlog</p>
			<h2>{title}</h2>
			{#if path}<p class="panel-path">{path}</p>{/if}
		</div>
	</header>

	<div class="panel-body">
		{#if loading}
			<p class="panel-status">Loading...</p>
		{:else}
			<div class="panel-layout">
				<section class="hero-card">
					<div>
						<p class="hero-label">Planning surface</p>
						<h3>Backlog is now rendered as an active delivery workspace.</h3>
						<p class="hero-copy">
							Kanban lanes, sprint backlog and burn down chart stay attached to the active domain family.
						</p>
					</div>
					<div class="hero-metrics">
						<div class="metric">
							<strong>{backlogData.items.length}</strong>
							<span>items</span>
						</div>
						<div class="metric">
							<strong>{backlogData.items.filter((item) => item.status === 'done').length}</strong>
							<span>done</span>
						</div>
						<div class="metric">
							<strong>{backlogData.items.filter((item) => item.priority === 'high').length}</strong>
							<span>high priority</span>
						</div>
					</div>
				</section>

				<section class="workspace-grid">
					<div class="workspace-card workspace-card--board">
						<KanbanBoard board={kanbanBoard} />
					</div>

					<div class="workspace-card workspace-card--chart">
						<BurnDownChart data={burnDownData} width={760} height={320} title="Backlog burn down" />
					</div>
				</section>

				<div class="workspace-card workspace-card--scrum">
					<ScrumBacklog data={backlogData} />
				</div>

				<div class="workspace-card workspace-card--raw">
					<div class="raw-head">
						<h3>Raw backlog note</h3>
						<p>Source markdown remains visible for audit and transformation checks.</p>
					</div>
					{#if content.trim()}
						<pre class="panel-content">{content}</pre>
					{:else}
						<p class="panel-status">Backlog note is empty. Showing fallback planning data.</p>
					{/if}
				</div>
			</div>
		{/if}

		{#if error}
			<p class="panel-error">{error}</p>
		{/if}
	</div>
</section>

<style>
	.c-domain-backlog {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		min-height: 100vh;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 28px;
		background:
			radial-gradient(circle at top, rgba(148, 163, 184, 0.14), transparent 34%),
			linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
		color: var(--color-foreground-primary, #0f172a);
	}

	.panel-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.2rem 1.2rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 24px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
	}

	.eyebrow {
		margin: 0 0 0.3rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h2 {
		margin: 0;
		font-size: 1.15rem;
	}

	.panel-path {
		margin: 0.35rem 0 0;
		font-family: var(--font-mono, monospace);
		font-size: 0.78rem;
		line-height: 1.45;
		color: var(--color-text-secondary);
		word-break: break-all;
	}

	.panel-body {
		min-height: 0;
		padding: 1rem 0 0;
		display: grid;
		gap: 0.85rem;
		overflow: auto;
	}

	.panel-layout {
		display: grid;
		gap: 1rem;
	}

	.hero-card,
	.workspace-card {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 24px;
		background: color-mix(in srgb, var(--color-background-primary) 95%, white 5%);
		box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
	}

	.hero-card {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(16rem, 0.8fr);
		gap: 1rem;
		padding: 1.15rem 1.2rem;
	}

	.hero-label {
		margin: 0 0 0.4rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.hero-card h3 {
		margin: 0 0 0.45rem;
		font-size: 1.2rem;
	}

	.hero-copy {
		margin: 0;
		line-height: 1.65;
		color: var(--color-text-secondary);
	}

	.hero-metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.metric {
		display: grid;
		gap: 0.2rem;
		padding: 0.9rem;
		border-radius: 18px;
		background: color-mix(in srgb, var(--color-background-secondary) 72%, transparent);
	}

	.metric strong {
		font-size: 1.65rem;
		line-height: 1;
	}

	.metric span {
		font-size: 0.76rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-secondary);
	}

	.workspace-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		gap: 1rem;
	}

	.workspace-card {
		padding: 1rem;
		overflow: hidden;
	}

	.workspace-card--board {
		min-height: 24rem;
	}

	.workspace-card--chart {
		display: grid;
		align-items: start;
	}

	.workspace-card--scrum {
		padding: 0;
	}

	.workspace-card--raw {
		display: grid;
		gap: 0.85rem;
	}

	.raw-head h3 {
		margin: 0 0 0.25rem;
		font-size: 1rem;
	}

	.raw-head p {
		margin: 0;
		font-size: 0.88rem;
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

		.hero-card,
		.workspace-grid,
		.hero-metrics {
			grid-template-columns: 1fr;
		}

		.panel-head,
		.panel-body {
			padding-inline: 0.9rem;
		}
	}
</style>
