<script lang="ts">
  // Define local types
  interface GraphNode {
    id: string;
    name: string;
    type: string;
    position?: { x: number; y: number };
    width?: number;
    height?: number;
    attributes?: Record<string, any>;
    description?: string;
    fields?: Array<{
      name: string;
      type: string;
      isRequired?: boolean;
      description?: string;
    }>;
  }
  import Button from '../../atoms/controls/Button.svelte';
  import Icon from '../../atoms/media/Icon.svelte';
  import { createEventDispatcher } from 'svelte';

  import type { HTMLAttributes } from 'svelte/elements';

  // Props
  let { 
    node,
    expanded = false,
    showDetails = true,
    selected = false,
    highlight = false,
    ...restProps
  }: {
    node: GraphNode;
    expanded?: boolean;
    showDetails?: boolean;
    selected?: boolean;
    highlight?: boolean;
  } & HTMLAttributes<HTMLDivElement> = $props();

  // Events
  const dispatch = createEventDispatcher<{
    toggleExpand: { node: GraphNode };
    viewDetails: { node: GraphNode };
    addField: { node: GraphNode };
    fieldClick: { field: any };
  }>();

  // Local state
  let isExpanded = $state(expanded);

  // Toggle expanded state
  function toggleExpanded() {
    isExpanded = !isExpanded;
    dispatch('toggleExpand', { node });
  }

  // Determine node type for styling
  const nodeTypeClass = (type: string) => {
    switch (type) {
      case 'object': return 'node-card-object';
      case 'interface': return 'node-card-interface';
      case 'union': return 'node-card-union';
      case 'enum': return 'node-card-enum';
      case 'scalar': return 'node-card-scalar';
      case 'input': return 'node-card-input';
      default: return 'node-card-default';
    }
  };

  // Get appropriate icon for type
  const getIconName = (type: string) => {
    switch (type) {
      case 'object': return 'object';
      case 'interface': return 'interface';
      case 'union': return 'union';
      case 'enum': return 'enum';
      case 'scalar': return 'scalar';
      case 'input': return 'input';
      default: return 'default';
    }
  };
</script>

<style>
  .node-card {
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .node-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .node-card.selected {
    border-color: #3b82f6; /* blue-500 */
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* blue-500 with opacity */
  }

  .node-card.highlight {
    border-color: #f59e0b; /* amber-500 */
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3); /* amber-500 with opacity */
  }

  .node-card.selected.highlight {
    border-color: #8b5cf6; /* violet-500 */
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3); /* violet-500 with opacity */
  }

  .node-header {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid #e2e8f0;
    cursor: pointer;
  }

  .node-icon {
    margin-right: 0.5rem;
  }

  .node-title {
    font-weight: 600;
    font-size: 0.875rem;
    color: #1e293b;
  }

  .node-type {
    margin-left: auto;
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    background-color: #e2e8f0;
    color: #64748b;
  }

  .node-card-object .node-type { background-color: #dbeafe; color: #2563eb; }
  .node-card-interface .node-type { background-color: #d1fae5; color: #059669; }
  .node-card-union .node-type { background-color: #fce7f3; color: #db2777; }
  .node-card-enum .node-type { background-color: #ede9fe; color: #7c3aed; }
  .node-card-scalar .node-type { background-color: #fef3c7; color: #d97706; }
  .node-card-input .node-type { background-color: #ecfeff; color: #0891b2; }

  .node-content {
    padding: 0.75rem;
  }

  .node-description {
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.75rem;
  }

  .fields-list {
    margin-top: 0.5rem;
  }

  .field-item {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    font-size: 0.75rem;
  }

  .field-name {
    color: #1e293b;
  }

  .field-type {
    color: #64748b;
  }

  .field-required {
    color: #dc2626;
  }

  .node-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e2e8f0;
  }
</style>

<div class="node-card {nodeTypeClass(node.type)} {selected ? 'selected' : ''} {highlight ? 'highlight' : ''}" {...restProps}>
  <div 
    class="node-header" 
    onclick={toggleExpanded}
    role="button"
    tabindex="0"
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpanded();
      }
    }}
  >
    <div class="node-icon">
      <Icon name={getIconName(node.type)} size="sm" />
    </div>
    <div class="node-title">{node.name}</div>
    <div class="node-type">{node.type}</div>
  </div>
  
  {#if isExpanded}
    <div class="node-content">
      {#if node.description}
        <div class="node-description">{node.description}</div>
      {/if}
      
      {#if node.fields && node.fields.length > 0}
        <div class="fields-list">
          {#each node.fields as field}
            <div 
              class="field-item" 
              onclick={() => dispatch('fieldClick', { field })}
              role="button"
              tabindex="0"
              onkeydown={(e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  dispatch('fieldClick', { field });
                }
              }}
            >
              <span class="field-name">
                {field.name}
                {#if field.isRequired}<span class="field-required">*</span>{/if}
              </span>
              <span class="field-type">{field.type}</span>
            </div>
          {/each}
        </div>
      {/if}
      
      <div class="node-actions">
        <Button 
          size="sm" 
          variant="ghost" 
          onclick={() => dispatch('viewDetails', { node })}
        >
          Details
        </Button>
        <Button 
          size="sm" 
          variant="ghost" 
          onclick={() => dispatch('addField', { node })}
        >
          Add Field
        </Button>
      </div>
    </div>
  {/if}
</div>