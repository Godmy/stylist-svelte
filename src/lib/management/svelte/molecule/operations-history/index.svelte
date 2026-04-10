<script lang="ts">
  import { Badge, Button, Icon } from '$stylist';
  import { createOperationsHistoryState, type Operation, type OperationsHistoryEvents } from '$stylist/management/function/state/operations-history';
  import type { OperationsHistoryProps } from '$stylist/management/interface/component/operations-history/other';

  let props: OperationsHistoryProps & OperationsHistoryEvents = $props();
  const state = createOperationsHistoryState(props);
</script>

<div class={state.baseClasses}>
  <div class={state.toolbarClasses}>
    <h3 class="text-sm font-medium text-[--color-gray-700] dark:text-[--color-gray-300]">Operations History</h3>
    <div class="flex items-center space-x-2">
      <input type="text" placeholder="Search..." bind:value={state.searchQuery} class={state.searchInputClasses} />
      <Button variant="ghost" size="sm" title="Clear History" onclick={() => props.onClear?.()}>
        <Icon name="trash-2" class="h-4 w-4" />
      </Button>
    </div>
  </div>

  <div class={state.resultsContainerClasses}>
    {#if state.filteredOperations.length === 0}
      <div class="p-4 text-center text-[--color-gray-500] dark:text-[--color-gray-400] text-sm">
        <Icon name="clock" class="h-8 w-8 mx-auto mb-2 text-[--color-gray-400] dark:text-[--color-gray-500]" />
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
              <div class="flex-1 min-w-0">
                <div class="flex items-center">
                  <h4 class="text-sm font-medium text-[--color-gray-900] dark:text-[var(--color-text-inverse)] truncate">{operation.name || 'Untitled Operation'}</h4>
                  <Badge variant={state.getStatusVariant(operation.status)} size="sm" class="ml-2">{state.getStatusText(operation.status)}</Badge>
                </div>
                <p class="text-xs text-[--color-gray-500] dark:text-[--color-gray-400] mt-1 truncate">
                  {operation.query.substring(0, 60)}{operation.query.length > 60 ? '...' : ''}
                </p>
                <div class="mt-1 flex items-center text-xs text-[--color-gray-500] dark:text-[--color-gray-400]">
                  <span>{state.formatDate(operation.timestamp)}</span>
                  {#if operation.executionTime !== undefined}
                    <span class="mx-2"></span>
                    <span>{operation.executionTime} ms</span>
                  {/if}
                </div>
              </div>
              <button
                class="text-[--color-gray-400] hover:text-[--color-gray-500] dark:hover:text-[--color-gray-300] p-1 rounded-full hover:bg-[--color-gray-200] dark:hover:bg-[--color-gray-700]"
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
