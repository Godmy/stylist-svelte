<script lang="ts">
	import { Button } from '$stylist/control';
	import Switch from '$stylist/control/component/atom/switch/index.svelte';
	import { Badge } from '$stylist/typography';
	import { createIssuesTableState } from '$stylist/management/function/state/issues-table';
	import type { SlotIssueMessage as IssueMessage } from '$stylist/management/interface/slot/issue-message';

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
		<div class="flex flex-wrap items-center gap-3">
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
								state.filteredItems.every((item) =>
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
								<div class="break-all">{item.file}</div>
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
