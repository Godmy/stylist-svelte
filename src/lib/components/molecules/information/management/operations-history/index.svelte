<script lang="ts">
  import { OperationsHistoryStyleManager } from '$stylist/design-system/styles/operations-history';
  import { Badge, Button, Icon } from '$stylist/components/atoms';

  interface Operation {
    id: string;
    name: string;
    query: string;
    timestamp: Date;
    status: 'success' | 'error' | 'pending';
    executionTime?: number;
  }

  interface OperationsHistoryProps {
    operations?: Operation[];
    class?: string;
  }

  interface OperationsHistoryEvents {
    onSelect?: (operation: Operation) => void;
    onDelete?: (id: string) => void;
    onClear?: () => void;
  }

  let {
    operations = [],
    class: className = ''
  }: OperationsHistoryProps = $props();

  let onSelect: OperationsHistoryEvents['onSelect'];
  let onDelete: OperationsHistoryEvents['onDelete'];
  let onClear: OperationsHistoryEvents['onClear'];

  let searchQuery = $state('');
  let selectedOperation: Operation | null = $state(null);

  let filteredOperations = $derived(
    operations.filter((op: Operation) =>
      !searchQuery ||
      op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.query.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSelect = (op: Operation) => {
    selectedOperation = op;
    onSelect?.(op);
  };

  const handleDelete = (id: string, e: Event) => {
    e.stopPropagation();
    onDelete?.(id);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusVariant = (status: Operation['status']) => {
    const variant = OperationsHistoryStyleManager.getStatusBadgeVariant(status);
    switch (variant) {
      case 'success': return 'success';
      case 'danger': return 'danger';
      case 'warning': return 'warning';
      default: return 'default';
    }
  };

  const getStatusText = (status: Operation['status']) => {
    switch (status) {
      case 'success': return 'Success';
      case 'error': return 'Error';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  const baseClasses = $derived(OperationsHistoryStyleManager.getBaseClasses(className));
  const toolbarClasses = $derived(OperationsHistoryStyleManager.getToolbarClasses());
  const searchInputClasses = $derived(OperationsHistoryStyleManager.getSearchInputClasses());
  const resultsContainerClasses = $derived(OperationsHistoryStyleManager.getResultsContainerClasses());
</script>

<div class={baseClasses}>
  <div class={toolbarClasses}>
    <h3 class="text-sm font-medium text-[--color-gray-700] dark:text-[--color-gray-300]">Operations History</h3>
    <div class="flex items-center space-x-2">
      <input type="text" placeholder="Search..." bind:value={searchQuery} class={searchInputClasses} />
      <Button variant="ghost" size="sm" title="Clear History" onclick={() => onClear?.()}>
        <Icon name="trash-2" class="h-4 w-4" />
      </Button>
    </div>
  </div>

  <div class={resultsContainerClasses}>
    {#if filteredOperations.length === 0}
      <div class="p-4 text-center text-[--color-gray-500] dark:text-[--color-gray-400] text-sm">
        <Icon name="clock" class="h-8 w-8 mx-auto mb-2 text-[--color-gray-400] dark:text-[--color-gray-500]" />
        <p>No operations yet</p>
      </div>
    {:else}
      <ul class="divide-y divide-[--color-gray-200] dark:divide-[--color-gray-700]">
        {#each filteredOperations as operation (operation.id)}
          <div
            class={OperationsHistoryStyleManager.getOperationItemClasses(selectedOperation?.id === operation.id)}
            onclick={() => handleSelect(operation)}
            role="button"
            tabindex="0"
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSelect(operation);
              }
            }}
          >
            <div class="flex items-start justify-between">
              <div class="flex-1 min-w-0">
                <div class="flex items-center">
                  <h4 class="text-sm font-medium text-[--color-gray-900] dark:text-white truncate">{operation.name || 'Untitled Operation'}</h4>
                  <Badge variant={getStatusVariant(operation.status)} size="sm" class="ml-2">{getStatusText(operation.status)}</Badge>
                </div>
                <p class="text-xs text-[--color-gray-500] dark:text-[--color-gray-400] mt-1 truncate">
                  {operation.query.substring(0, 60)}{operation.query.length > 60 ? '...' : ''}
                </p>
                <div class="mt-1 flex items-center text-xs text-[--color-gray-500] dark:text-[--color-gray-400]">
                  <span>{formatDate(operation.timestamp)}</span>
                  {#if operation.executionTime !== undefined}
                    <span class="mx-2">•</span>
                    <span>{operation.executionTime} ms</span>
                  {/if}
                </div>
              </div>
              <button
                class="text-[--color-gray-400] hover:text-[--color-gray-500] dark:hover:text-[--color-gray-300] p-1 rounded-full hover:bg-[--color-gray-200] dark:hover:bg-[--color-gray-700]"
                onclick={(e) => handleDelete(operation.id, e)}
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
