<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import Switch from '$stylist/control/component/atom/switch/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import { createIssuesTableState } from '$stylist/portfolio/function/state/issues-table/index.svelte';
	import type { SlotIssueMessage as IssueMessage } from '$stylist/portfolio/interface/slot/issue-message';

	let {
		items = [],
		onMoveToBacklog,
		class: className = ''
	}: {
		items?: IssueMessage[];
		onMoveToBacklog?: (items: IssueMessage[]) => void;
		class?: string;
	} = $props();

	const state = createIssuesTableState({
		getItems: () => items,
		onMoveToBacklog
	});
</script>

<section class="{state.containerClass} {className}" aria-label="Issues table">
	<div class={state.toolbarClass}>
		<div class="_c1">
			<Switch id="issues-state-filter" label="Only new" bind:checked={state.showNewOnly} />
			<p class={state.toolbarMetaClass}>
				{state.filteredItems.length} visible / {items.length} total
			</p>
		</div>
		<div class={state.actionsClass}>
			<Badge variant="default" size="sm">{state.selectedItems.length} selected</Badge>
			<Button variant="secondary" size="sm" onclick={state.clearSelection}>Clear selection</Button>
			<Button
				variant="primary"
				size="sm"
				onclick={state.moveSelectedToBacklog}
				disabled={state.selectedItems.length === 0}
			>
				Move to backlog
			</Button>
		</div>
	</div>

	<div class={state.tableWrapClass}>
		<table class={state.tableClass}>
			<thead>
				<tr class={state.headRowClass}>
					<th class={state.headCellClass}>
						<input
							class={state.checkboxClass}
							type="checkbox"
							checked={state.filteredItems.length > 0 &&
								state.filteredItems.every((item: IssueMessage) =>
									state.selectedIds.includes(state.getIssueKey(item))
								)}
							onchange={state.toggleAllVisible}
							aria-label="Select all visible issues"
						/>
					</th>
					<th class={state.headCellClass}>Created</th>
					<th class={state.headCellClass}>ID</th>
					<th class={state.headCellClass}>State</th>
					<th class={state.headCellClass}>File</th>
					<th class={state.headCellClass}>Message</th>
					<th class={state.headCellClass}>Image</th>
					<th class={state.headCellClass}>Audio</th>
				</tr>
			</thead>
			<tbody>
				{#if state.filteredItems.length === 0}
					<tr>
						<td class={state.bodyCellClass} colspan="8">
							<p class={state.mutedTextClass}>No issues found for the current filter.</p>
						</td>
					</tr>
				{:else}
					{#each state.filteredItems as item}
						<tr class={state.getBodyRowClass(state.selectedIds.includes(state.getIssueKey(item)))}>
							<td class={state.bodyCellClass}>
								<input
									class={state.checkboxClass}
									type="checkbox"
									checked={state.selectedIds.includes(state.getIssueKey(item))}
									onchange={() => state.toggleSelection(item)}
									aria-label={`Select issue ${item.id} ${item.text}`}
								/>
							</td>
							<td class={state.bodyCellClass}>
								<div>{new Date(item.created_at).toLocaleString()}</div>
							</td>
							<td class={state.bodyCellClass}>
								<code>{item.id}</code>
							</td>
							<td class={state.bodyCellClass}>
								{#if item.status === 'backlog'}
									<Badge variant="success" size="sm">Moved to backlog</Badge>
								{:else}
									<Badge variant="default" size="sm">New</Badge>
								{/if}
							</td>
							<td class={state.bodyCellClass}>
								<div class="_c2">{item.file}</div>
							</td>
							<td class={state.bodyCellClass}>
								<p class={state.messageTextClass}>{item.text}</p>
							</td>
							<td class={state.bodyCellClass}>
								{#if item.image}
									<code>{item.image}</code>
								{:else}
									<span class={state.mutedTextClass}>None</span>
								{/if}
							</td>
							<td class={state.bodyCellClass}>
								{#if item.audio}
									<code>{item.audio}</code>
								{:else}
									<span class={state.mutedTextClass}>None</span>
								{/if}
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</section>

<style>
	._c1 {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
	}
	._c2 {
		word-break: break-all;
	}

	.issues-table {
		overflow: hidden;
		border-radius: 1rem;
		background-color: var(--color-background-primary);
	}

	.issues-table__toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}

	.issues-table__toolbar-meta {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.issues-table__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.issues-table__table-wrap {
		overflow-x: auto;
	}

	.issues-table__table {
		min-width: 100%;
	}

	.issues-table__head-cell {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.issues-table__body-row {
		background-color: var(--color-background-primary);
	}

	.issues-table__body-cell {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.issues-table__muted-text {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.issues-table__message-text {
		max-width: 34rem;
		white-space: pre-wrap;
		line-height: 1.5rem;
		color: var(--color-text-primary);
	}

	.issues-table__checkbox {
		height: 1rem;
		width: 1rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}
</style>
