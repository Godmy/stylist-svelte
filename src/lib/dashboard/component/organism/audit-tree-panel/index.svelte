<script lang="ts">
	import type { RecipeAuditTreePanel } from '$stylist/dashboard/interface/recipe/audit-tree-panel';
	import type { AuditTreeNode } from '$stylist/dashboard/type/struct/audit-tree-node';
	import type { TreeNodeItemNode } from '$stylist/tree/type/struct/tree-node-item-node';
	import TreeViewer from '$stylist/tree/component/molecule/tree-viewer/index.svelte';
	import DashboardCountTile from '$stylist/dashboard/component/atom/dashboard-count-tile/index.svelte';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	let {
		nodes = [],
		summary,
		selectedNodeId,
		severityFilter = 'all',
		domainFilter = '',
		loading = false,
		onSelectNode,
		onSeverityFilterChange,
		onDomainFilterChange,
		class: className = ''
	}: Partial<RecipeAuditTreePanel> = $props();

	let localSelectedId = $state<string | undefined>(selectedNodeId);

	const filteredNodes = $derived(filterAuditNodes(nodes, severityFilter, domainFilter));
	const treeNodes = $derived(filteredNodes.map(toTreeViewerNode));
	const selectedNode = $derived(findAuditNode(filteredNodes, localSelectedId) ?? filteredNodes[0]);
	const totals = $derived(resolveAuditTotals(filteredNodes));

	function handleSelectNode(node: AuditTreeNode) {
		localSelectedId = node.id;
		onSelectNode?.(node);
	}

	function handleDomainInput(event: Event) {
		const value = (event.currentTarget as HTMLInputElement).value;
		onDomainFilterChange?.(value);
	}

	function filterAuditNodes(
		sourceNodes: AuditTreeNode[],
		status: NonNullable<RecipeAuditTreePanel['severityFilter']>,
		domain: string
	): AuditTreeNode[] {
		const normalizedDomain = domain.trim().toLowerCase();
		return sourceNodes
			.map((node) => filterAuditNode(node, status, normalizedDomain))
			.filter((node): node is AuditTreeNode => Boolean(node));
	}

	function filterAuditNode(
		node: AuditTreeNode,
		status: NonNullable<RecipeAuditTreePanel['severityFilter']>,
		domain: string
	): AuditTreeNode | undefined {
		const children = node.children
			?.map((child) => filterAuditNode(child, status, domain))
			.filter((child): child is AuditTreeNode => Boolean(child));
		const matchesStatus = status === 'all' || node.status === status;
		const matchesDomain = !domain || `${node.domain ?? ''} ${node.path} ${node.label}`.toLowerCase().includes(domain);

		if ((matchesStatus && matchesDomain) || (children?.length ?? 0) > 0) {
			return { ...node, children };
		}

		return undefined;
	}

	function toTreeViewerNode(node: AuditTreeNode): TreeNodeItemNode {
		return {
			key: node.id,
			desc: `${node.label} (${node.status}, ${node.errorCount}/${node.warningCount})`,
			child: node.children?.map(toTreeViewerNode)
		};
	}

	function flattenAuditNodes(sourceNodes: AuditTreeNode[]): AuditTreeNode[] {
		return sourceNodes.flatMap((node) => [node, ...flattenAuditNodes(node.children ?? [])]);
	}

	function findAuditNode(sourceNodes: AuditTreeNode[], id: string | undefined): AuditTreeNode | undefined {
		if (!id) return undefined;
		return flattenAuditNodes(sourceNodes).find((node) => node.id === id);
	}

	function resolveAuditTotals(sourceNodes: AuditTreeNode[]): { files: number; errors: number; warnings: number } {
		const flat = flattenAuditNodes(sourceNodes);
		return {
			files: flat.reduce((total, node) => total + (node.kind === 'file' ? 1 : 0), 0),
			errors: sourceNodes.reduce((total, node) => total + node.errorCount, 0),
			warnings: sourceNodes.reduce((total, node) => total + node.warningCount, 0)
		};
	}
</script>

<section class="c-audit-tree-panel {className}" aria-label="Audit tree panel">
	<header class="c-audit-tree-panel__header">
		<div>
			<p class="c-audit-tree-panel__eyebrow">Audit Tree</p>
			<h2 class="c-audit-tree-panel__title">Domain structure</h2>
		</div>
		<DashboardStatusPill status={summary?.status === 'success' ? 'ok' : summary?.status ?? 'unknown'} label={summary?.status ?? 'unknown'} />
	</header>

	<div class="c-audit-tree-panel__metrics">
		<DashboardCountTile label="Errors" value={totals.errors} status={totals.errors > 0 ? 'error' : 'ok'} />
		<DashboardCountTile label="Warnings" value={totals.warnings} status={totals.warnings > 0 ? 'warning' : 'ok'} />
		<DashboardCountTile label="Files" value={summary?.totalFiles ?? totals.files} status="ok" />
	</div>

	<div class="c-audit-tree-panel__filters">
		<input
			class="c-audit-tree-panel__input"
			type="search"
			value={domainFilter}
			placeholder="Filter domain or path"
			oninput={handleDomainInput}
		/>
		<select
			class="c-audit-tree-panel__select"
			value={severityFilter}
			onchange={(event) =>
				onSeverityFilterChange?.(
					(event.currentTarget as HTMLSelectElement).value as NonNullable<RecipeAuditTreePanel['severityFilter']>
				)}
		>
			<option value="all">All statuses</option>
			<option value="error">Errors</option>
			<option value="warning">Warnings</option>
			<option value="ok">Ok</option>
			<option value="stale">Stale</option>
			<option value="unknown">Unknown</option>
		</select>
	</div>

	{#if loading}
		<p class="c-audit-tree-panel__state">Loading audit tree...</p>
	{:else if filteredNodes.length === 0}
		<p class="c-audit-tree-panel__state">No audit nodes match the current filters.</p>
	{:else}
		<div class="c-audit-tree-panel__body">
			<div class="c-audit-tree-panel__tree">
				<TreeViewer tree={treeNodes} />
				<div class="c-audit-tree-panel__flat-list" aria-label="Selectable audit nodes">
					{#each flattenAuditNodes(filteredNodes) as node}
						<button
							type="button"
							class="c-audit-tree-panel__node"
							class:c-audit-tree-panel__node--active={node.id === selectedNode?.id}
							onclick={() => handleSelectNode(node)}
						>
							<span>{node.label}</span>
							<DashboardStatusPill status={node.status} label={`${node.errorCount}/${node.warningCount}`} compact />
						</button>
					{/each}
				</div>
			</div>

			<aside class="c-audit-tree-panel__detail" aria-label="Selected audit node">
				{#if selectedNode}
					<div class="c-audit-tree-panel__detail-head">
						<div>
							<p class="c-audit-tree-panel__eyebrow">{selectedNode.kind}</p>
							<h3 class="c-audit-tree-panel__detail-title">{selectedNode.label}</h3>
						</div>
						<DashboardStatusPill status={selectedNode.status} label={selectedNode.status} />
					</div>
					<dl class="c-audit-tree-panel__properties">
						<div><dt>Path</dt><dd>{selectedNode.path}</dd></div>
						<div><dt>Domain</dt><dd>{selectedNode.domain ?? 'unknown'}</dd></div>
						<div><dt>Errors</dt><dd>{selectedNode.errorCount}</dd></div>
						<div><dt>Warnings</dt><dd>{selectedNode.warningCount}</dd></div>
						<div><dt>Files</dt><dd>{selectedNode.fileCount}</dd></div>
						<div><dt>Report</dt><dd>{selectedNode.sourceReportPath ?? summary?.readmePath ?? 'server report pending'}</dd></div>
					</dl>
				{/if}
			</aside>
		</div>
	{/if}
</section>

<style>
	.c-audit-tree-panel {
		box-sizing: border-box;
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-audit-tree-panel__header,
	.c-audit-tree-panel__detail-head,
	.c-audit-tree-panel__filters {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-audit-tree-panel__eyebrow,
	.c-audit-tree-panel__title,
	.c-audit-tree-panel__detail-title,
	.c-audit-tree-panel__state {
		margin: 0;
	}

	.c-audit-tree-panel__eyebrow {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.c-audit-tree-panel__title,
	.c-audit-tree-panel__detail-title {
		margin-top: 0.2rem;
		font-size: 1rem;
		line-height: 1.2;
		overflow-wrap: anywhere;
	}

	.c-audit-tree-panel__metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.6rem;
	}

	.c-audit-tree-panel__metrics :global(.c-dashboard-count-tile) {
		min-width: 0;
		min-height: 5.8rem;
		padding: 0.65rem;
	}

	.c-audit-tree-panel__input,
	.c-audit-tree-panel__select {
		box-sizing: border-box;
		min-height: 2.35rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.82rem;
	}

	.c-audit-tree-panel__input {
		flex: 1 1 auto;
		min-width: 0;
		padding: 0.45rem 0.7rem;
	}

	.c-audit-tree-panel__select {
		flex: 0 0 10rem;
		padding: 0.45rem 0.55rem;
	}

	.c-audit-tree-panel__state {
		min-height: 8rem;
		padding: 1rem;
		border: 1px dashed color-mix(in srgb, var(--color-border-primary) 84%, transparent);
		border-radius: 0.5rem;
		color: var(--color-text-secondary);
	}

	.c-audit-tree-panel__body {
		display: grid;
		grid-template-columns: minmax(18rem, 24rem) minmax(0, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}

	.c-audit-tree-panel__tree,
	.c-audit-tree-panel__detail {
		box-sizing: border-box;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-audit-tree-panel__flat-list {
		display: grid;
		gap: 0.35rem;
		margin-top: 0.75rem;
		max-height: 18rem;
		overflow: auto;
	}

	.c-audit-tree-panel__node {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.5rem;
		align-items: center;
		min-width: 0;
		width: 100%;
		padding: 0.45rem 0.55rem;
		border: 1px solid transparent;
		border-radius: 0.45rem;
		background: transparent;
		color: var(--color-text-primary);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	.c-audit-tree-panel__node span:first-child {
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.78rem;
	}

	.c-audit-tree-panel__node--active {
		border-color: color-mix(in srgb, var(--color-primary-500) 38%, var(--color-border-primary));
		background: color-mix(in srgb, var(--color-primary-500) 8%, var(--color-background-primary));
	}

	.c-audit-tree-panel__properties {
		display: grid;
		gap: 0.45rem;
		margin: 0.75rem 0 0;
	}

	.c-audit-tree-panel__properties div {
		display: grid;
		grid-template-columns: 6rem minmax(0, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}

	.c-audit-tree-panel__properties dt,
	.c-audit-tree-panel__properties dd {
		margin: 0;
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.8rem;
	}

	.c-audit-tree-panel__properties dt {
		color: var(--color-text-secondary);
	}

	.c-audit-tree-panel__properties dd {
		font-family: var(--font-family-mono, ui-monospace, monospace);
	}

	@media (max-width: 860px) {
		.c-audit-tree-panel__body,
		.c-audit-tree-panel__metrics {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 620px) {
		.c-audit-tree-panel__filters,
		.c-audit-tree-panel__header {
			align-items: stretch;
			flex-direction: column;
		}

		.c-audit-tree-panel__select {
			flex-basis: auto;
			width: 100%;
		}
	}
</style>
