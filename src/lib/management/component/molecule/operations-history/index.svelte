<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import createOperationsHistoryState from '$stylist/management/function/state/operations-history/index.svelte';
	import type { BehaviorOperationsHistoryEvents } from '$stylist/management/interface/behavior/operations-history-events';
	import type { SlotOperationsHistory as OperationsHistoryProps } from '$stylist/management/interface/slot/operations-history';

	let props: OperationsHistoryProps & BehaviorOperationsHistoryEvents = $props();
	const state = createOperationsHistoryState(props);
</script>

<div class="operations-history__base">
	<div class="operations-history__toolbar">
		<h3 class="_c1 _c1">Operations History</h3>
		<div class="_c2">
			<input
				type="text"
				placeholder="Search..."
				bind:value={state.searchQuery}
				class="operations-history__search-input"
			/>
			<Button variant="ghost" size="sm" title="Clear History" onclick={() => props.onClear?.()}>
				<Icon name="trash-2" class="_c3" />
			</Button>
		</div>
	</div>

	<div class="operations-history__results-container">
		{#if state.filteredOperations.length === 0}
			<div class="_c4 _c2">
				<Icon name="clock" class="_c5 _c3" />
				<p>No operations yet</p>
			</div>
		{:else}
			<ul class="_c6 divide-[--color-gray-200]">
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
						<div class="_c7">
							<div class="_c8">
								<div class="_c9">
									<h4 class="_c10 _c4">
										{operation.name || 'Untitled Operation'}
									</h4>
									<Badge variant={state.getStatusVariant(operation.status)} size="sm" class="_c11"
										>{state.getStatusText(operation.status)}</Badge
									>
								</div>
								<p class="_c12 _c2">
									{operation.query.substring(0, 60)}{operation.query.length > 60 ? '...' : ''}
								</p>
								<div class="_c13 _c2">
									<span>{state.formatDate(operation.timestamp)}</span>
									{#if operation.executionTime !== undefined}
										<span class="_c14"></span>
										<span>{operation.executionTime} ms</span>
									{/if}
								</div>
							</div>
							<button
								class="_c15 _c5"
								onclick={(e) => state.handleDelete(operation.id, e)}
								title="Delete operation"
								aria-label={`Delete ${operation.name || 'operation'}`}
							>
								<Icon name="x" class="_c3" />
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

	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-gray-700);
	}
	._c10 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-gray-900);
	}
	._c11 {
		margin-left: 0.5rem;
	}
	._c12 {
		margin-top: 0.25rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-gray-500);
	}
	._c13 {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-gray-500);
	}
	._c14 {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
	._c15 {
		border-radius: 9999px;
		padding: 0.25rem;
		color: var(--color-gray-400);
	}
	._c2 {
		display: flex;
		align-items: center;
	}
	._c2 > * + * {
		margin-left: 0.5rem;
	}
	._c3 {
		height: 1rem;
		width: 1rem;
	}
	._c4 {
		padding: 1rem;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-gray-500);
	}
	._c5 {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0.5rem;
		height: 2rem;
		width: 2rem;
		color: var(--color-gray-400);
	}
	._c6 > * + * {
		border-top-width: 1px;
		border-style: solid;
	}
	._c7 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	._c8 {
		min-width: 0;
		flex: 1 1 0%;
	}
	._c9 {
		display: flex;
		align-items: center;
	}

	@media (prefers-color-scheme: dark) {
		._c1 {
			color: var(--color-gray-300);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c2 {
			color: var(--color-gray-400);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c3 {
			color: var(--color-gray-500);
		}
	}
	@media (prefers-color-scheme: dark) {
		._c4 {
			color: var(--color-text-inverse);
		}
	}
	._c5:hover {
		background-color: var(--color-gray-200);
		color: var(--color-gray-500);
	}
	@media (prefers-color-scheme: dark) {
		._c5 {
			background-color: var(--color-gray-700);
			color: var(--color-gray-300);
		}
	}
</style>
