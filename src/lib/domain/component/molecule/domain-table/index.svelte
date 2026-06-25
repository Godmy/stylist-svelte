<script lang="ts">
	import DomainListHeader from '$stylist/domain/component/atom/domain-list-header/index.svelte';

	interface DomainListItem {
		name: string;
		path: string;
		files: { path: string }[];
	}

	interface DomainTableProps {
		entities?: DomainListItem[];
		activePath?: string;
		draggable?: boolean;
		onSelect?: (path: string) => void;
		onAdd?: (path: string) => void;
		onDragStart?: (entity: DomainListItem, event: DragEvent) => void;
		class?: string;
	}

	let {
		entities = [],
		activePath,
		draggable = false,
		onSelect,
		onAdd,
		onDragStart,
		class: className = ''
	}: DomainTableProps = $props();
</script>

<div class="c-domain-table {className}">
	<DomainListHeader count={entities.length} />
	<div class="table-wrap">
		{#if entities.length === 0}
			<p class="empty-state">No entities in selected folder.</p>
		{:else}
			<table class="table">
				<thead class="table-head">
					<tr>
						<th class="th">Name</th>
						<th class="th">Path</th>
						<th class="th th--num">Files</th>
					</tr>
				</thead>
				<tbody>
					{#each entities as entity (entity.path)}
						<tr
							class="table-row"
							class:is-active={activePath === entity.path}
							title={entity.path}
							{draggable}
							ondragstart={(e) => onDragStart?.(entity, e)}
							onclick={() => onSelect?.(entity.path)}
							ondblclick={() => onAdd?.(entity.path)}
						>
							<td class="td td--name">{entity.name}</td>
							<td class="td td--path">{entity.path}</td>
							<td class="td td--num">{entity.files.length}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</div>

<style>
	.c-domain-table {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 0;
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
	}

	.table-wrap {
		overflow: auto;
	}

	.table {
		width: 100%;
		border-collapse: collapse;
	}

	.table-head {
		position: sticky;
		top: 0;
		background: var(--color-background-secondary);
		z-index: 1;
	}

	.th {
		padding: 0.35rem 0.65rem;
		text-align: left;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		white-space: nowrap;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.th--num {
		text-align: right;
	}

	.table-row {
		cursor: pointer;
	}

	.table-row:hover,
	.table-row.is-active {
		background: var(--color-background-primary);
	}

	.td {
		padding: 0.3rem 0.65rem;
		font-size: 11px;
		border-bottom: 1px solid var(--color-border-primary);
		white-space: nowrap;
	}

	.td--name {
		font-family: var(--font-mono, monospace);
		color: var(--color-text-primary);
	}

	.td--path {
		max-width: 20rem;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
	}

	.td--num {
		text-align: right;
		color: var(--color-text-secondary);
	}

	.empty-state {
		margin: 0;
		padding: 1rem;
		color: var(--color-text-secondary);
		font-size: 13px;
	}
</style>
