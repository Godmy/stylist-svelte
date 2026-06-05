<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import createOperationsHistoryState from '$stylist/management/function/state/operations-history/index.svelte';
	import type { BehaviorOperationsHistoryEvents } from '$stylist/management/interface/behavior/operations-history-events';
	import type { SlotOperationsHistory as OperationsHistoryProps } from '$stylist/management/interface/slot/operations-history';

	let props: OperationsHistoryProps & BehaviorOperationsHistoryEvents = $props();
	const state = createOperationsHistoryState(props);
</script>

<div class={state.baseClasses}>
	<div class={state.toolbarClasses}>
		<h3 class="text-sm font-medium text-[--color-gray-700] dark:text-[--color-gray-300]">
			Operations History
		</h3>
		<div class="flex items-center space-x-2">
			<input
				type="text"
				placeholder="Search..."
				bind:value={state.searchQuery}
				class={state.searchInputClasses}
			/>
			<Button variant="ghost" size="sm" title="Clear History" onclick={() => props.onClear?.()}>
				<Icon name="trash-2" class="h-4 w-4" />
			</Button>
		</div>
	</div>

	<div class={state.resultsContainerClasses}>
		{#if state.filteredOperations.length === 0}
			<div class="p-4 text-center text-sm text-[--color-gray-500] dark:text-[--color-gray-400]">
				<Icon
					name="clock"
					class="mx-auto mb-2 h-8 w-8 text-[--color-gray-400] dark:text-[--color-gray-500]"
				/>
				<p>No operations yet</p>
			</div>
		{:else}
			<ul class="divide-y divide-[--color-gray-200] dark:divide-[--color-gray-700]">
				{#each state.filteredOperations as operation (operation.id)}
					<div
						class={state.selectedOperation?.id === operation.id ? 'selected' : ''}
						onclick={() => state.handleSelect(operation)}
						role="button"
						tabindex="0"
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								state.handleSelect(operation);
							}
						}}
					>
						<div class="flex items-start justify-between">
							<div class="min-w-0 flex-1">
								<div class="flex items-center">
									<h4
										class="truncate text-sm font-medium text-[--color-gray-900] dark:text-[var(--color-text-inverse)]"
									>
										{operation.name || 'Untitled Operation'}
									</h4>
									<Badge variant={state.getStatusVariant(operation.status)} size="sm" class="ml-2"
										>{state.getStatusText(operation.status)}</Badge
									>
								</div>
								<p
									class="mt-1 truncate text-xs text-[--color-gray-500] dark:text-[--color-gray-400]"
								>
									{operation.query.substring(0, 60)}{operation.query.length > 60 ? '...' : ''}
								</p>
								<div
									class="mt-1 flex items-center text-xs text-[--color-gray-500] dark:text-[--color-gray-400]"
								>
									<span>{state.formatDate(operation.timestamp)}</span>
									{#if operation.executionTime !== undefined}
										<span class="mx-2"></span>
										<span>{operation.executionTime} ms</span>
									{/if}
								</div>
							</div>
							<button
								class="rounded-full p-1 text-[--color-gray-400] hover:bg-[--color-gray-200] hover:text-[--color-gray-500] dark:hover:bg-[--color-gray-700] dark:hover:text-[--color-gray-300]"
								onclick={(e) => state.handleDelete(operation.id, e)}
								title="Delete operation"
								aria-label={`Delete ${operation.name || 'operation'}`}
							>
								<Icon name="x" class="h-4 w-4" />
							</button>
						</div>
					</div>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.operations-history {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.toolbar {
		flex-shrink: 0;
	}
</style>
