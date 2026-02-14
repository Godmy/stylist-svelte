<script lang="ts">
  // Define local types
  export interface GraphNode {
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
  
  import { Button, Icon } from '$stylist/components/atoms';
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
  .c-graph-node-card {
    border-radius: 0.5rem;
    border: 1px solid var(--color-border-default, #e2e8f0);
    background-color: var(--color-background-primary, white);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .c-graph-node-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .c-graph-node-card.selected {
    border-color: var(--color-primary-500, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  .c-graph-node-card.highlight {
    border-color: var(--color-warning-500, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
  }

  .c-graph-node-card.selected.highlight {
    border-color: var(--color-accent-500, #8b5cf6);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
  }

  .node-header {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid var(--color-border-default, #e2e8f0);
    cursor: pointer;
  }

  .node-icon {
    margin-right: 0.5rem;
  }

  .node-title {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-text-primary, #1e293b);
  }

  .node-type {
    margin-left: auto;
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    background-color: var(--color-surface-muted, #e2e8f0);
    color: var(--color-text-secondary, #64748b);
  }

  .node-card-object .node-type { background-color: var(--color-surface-accent, #dbeafe); color: var(--color-primary-600, #2563eb); }
  .node-card-interface .node-type { background-color: var(--color-success-100, #d1fae5); color: var(--color-success-600, #059669); }
  .node-card-union .node-type { background-color: var(--color-danger-100, #fce7f3); color: var(--color-danger-600, #db2777); }
  .node-card-enum .node-type { background-color: var(--color-accent-100, #ede9fe); color: var(--color-accent-600, #7c3aed); }
  .node-card-scalar .node-type { background-color: var(--color-warning-100, #fef3c7); color: var(--color-warning-600, #d97706); }
  .node-card-input .node-type { background-color: var(--color-info-100, #ecfeff); color: var(--color-info-600, #0891b2); }

  .node-content {
    padding: 0.75rem;
  }

  .node-description {
    font-size: 0.75rem;
    color: var(--color-text-secondary, #64748b);
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
    color: var(--color-text-primary, #1e293b);
  }

  .field-type {
    color: var(--color-text-secondary, #64748b);
  }

  .field-required {
    color: var(--color-danger-500, #dc2626);
  }

  .node-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--color-border-default, #e2e8f0);
  }
</style>

<div class="c-graph-node-card {nodeTypeClass(node.type)} {selected ? 'selected' : ''} {highlight ? 'highlight' : ''}" {...restProps}>
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

