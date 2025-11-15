<script lang="ts">
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };
  
  import { Badge, Button, Icon } from '$lib/components/atoms';
  
  type Operation = {
    id: string;
    name: string;
    query: string;
    timestamp: Date;
    status: 'success' | 'error' | 'pending';
    executionTime?: number;
  };

  type Props = BaseComponentProps & {
    operations?: Operation[];
  };

  let { 
    operations = [],
    class: className = '' 
  }: Props = $props();
  
  // State
  let searchQuery = $state('');
  let selectedOperation: Operation | null = $state(null);
  
  // Filter operations based on search
  let filteredOperations = $derived(
    operations.filter((op: any) => 
      !searchQuery || 
      op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.query.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  // Events
  let onSelect: ((operation: Operation) => void) | undefined;
  let onDelete: ((id: string) => void) | undefined;
  let onClear: (() => void) | undefined;
  
  // Handle operation selection
  const handleSelect = (op: Operation) => {
    selectedOperation = op;
    onSelect?.(op);
  };
  
  // Handle operation deletion
  const handleDelete = (id: string, e: Event) => {
    e.stopPropagation();
    onDelete?.(id);
  };
  
  // Format date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Status badge variant
  const getStatusVariant = (status: Operation['status']) => {
    switch (status) {
      case 'success': return 'success';
      case 'error': return 'danger';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };
  
  // Status badge text
  const getStatusText = (status: Operation['status']) => {
    switch (status) {
      case 'success': return 'Success';
      case 'error': return 'Error';
      case 'pending': return 'Pending';
      default: return status;
    }
  };
</script>

<div class="operations-history border border-gray-300 rounded-md dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden {className}">
  <div class="toolbar bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 p-2 flex items-center justify-between">
    <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Operations History</h3>
    <div class="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        bind:value={searchQuery}
        class="px-2 py-1 text-xs border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
      />
      <Button 
        variant="ghost" 
        size="sm" 
        title="Clear History"
        onclick={() => onClear?.()}
      >
        <Icon name="trash-2" class="h-4 w-4" />
      </Button>
    </div>
  </div>
  
  <div class="overflow-y-auto max-h-64">
    {#if filteredOperations.length === 0}
      <div class="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        <Icon name="clock" class="h-8 w-8 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
        <p>No operations yet</p>
      </div>
    {:else}
      <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        {#each filteredOperations as operation (operation.id)}
          <div 
            class="p-3 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors w-full text-left border border-transparent {selectedOperation?.id === operation.id ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700' : ''} rounded hover:shadow-sm"
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
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {operation.name || 'Untitled Operation'}
                  </h4>
                  <Badge 
                    variant={getStatusVariant(operation.status)} 
                    size="sm" 
                    class="ml-2"
                  >
                    {getStatusText(operation.status)}
                  </Badge>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                  {operation.query.substring(0, 60)}{operation.query.length > 60 ? '...' : ''}
                </p>
                <div class="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatDate(operation.timestamp)}</span>
                  {#if operation.executionTime !== undefined}
                    <span class="mx-2">•</span>
                    <span>{operation.executionTime} ms</span>
                  {/if}
                </div>
              </div>
              <button 
                class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
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
  .hover\:bg-gray-50:hover {
    background-color: #f8fafc;
  }
</style>
