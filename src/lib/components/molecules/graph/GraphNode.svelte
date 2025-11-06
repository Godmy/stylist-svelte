<script lang="ts">
  import { onMount } from 'svelte';

  // Define types locally
  interface Position2D {
    x: number;
    y: number;
  }

  interface GraphNode {
    id: string;
    name: string;
    type: string;
    position: Position2D;
    width?: number;
    height?: number;
    description?: string;
    fields?: Array<{
      name: string;
      type: string;
      isRequired?: boolean;
      description?: string;
    }>;
  }

  // Props
  let { 
    node,
    selected = false,
    highlight = false,
    showType = true,
    showDescription = true,
    showFields = true,
    maxVisibleFields = 3,
    onClick,
    onFieldClick,
    onContextMenu
  }: {
    node: GraphNode;
    selected?: boolean;
    highlight?: boolean;
    showType?: boolean;
    showDescription?: boolean;
    showFields?: boolean;
    maxVisibleFields?: number;
    onClick?: (node: GraphNode) => void;
    onFieldClick?: (node: GraphNode, field: any) => void;
    onContextMenu?: (node: GraphNode, event: MouseEvent) => void;
  } = $props();

  // Local state
  let nodeElement: HTMLElement;
  let nodeWidth = $state(120);
  let nodeHeight = $state(80);
  let isHovered = $state(false);
  let showAllFields = $state(false);
  let selectedField: any | null = $state(null);

  // Determine node type for styling
  const nodeTypeClass = (type: string) => {
    switch (type) {
      case 'object': return 'node-object';
      case 'interface': return 'node-interface';
      case 'union': return 'node-union';
      case 'enum': return 'node-enum';
      case 'scalar': return 'node-scalar';
      case 'input': return 'node-input';
      default: return 'node-default';
    }
  };

  // Handle mouse events
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    onClick?.(node);
  }

  function handleFieldClick(field: any, e: Event) {
    e.stopPropagation(); // Prevent node click event
    selectedField = field === selectedField ? null : field;
    onFieldClick?.(node, field);
  }

  function handleRightClick(e: MouseEvent) {
    e.preventDefault();
    onContextMenu?.(node, e);
  }

  // Toggle showing all fields
  function toggleShowFields() {
    showAllFields = !showAllFields;
  }

  // Calculate dimensions based on content
  onMount(() => {
    // In a real implementation, we might calculate the required size based on content
    // For now, we'll use default values that can be overridden via props
    nodeWidth = node.width || 120;
    nodeHeight = node.height || (node.fields?.length ? 80 + Math.min(node.fields.length, 5) * 20 : 80);
  });

  // Compute node classes
  let nodeClasses = $derived([
    'graph-node',
    nodeTypeClass(node.type),
    selected ? 'selected' : '',
    highlight ? 'highlighted' : '',
    isHovered ? 'hovered' : ''
  ].filter(Boolean).join(' '));
  
  // Get fields to display
  let displayedFields = $derived(
    showAllFields 
      ? node.fields || [] 
      : (node.fields || []).slice(0, maxVisibleFields)
  );
  
  // Check if there are more fields to show
  let hasMoreFields = $derived((node.fields || []).length > maxVisibleFields);
</script>

<style>
  .graph-node {
    position: absolute;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #cbd5e0;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 140px;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .graph-node:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .graph-node.selected {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  .graph-node.highlighted {
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
  }

  .node-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #e2e8f0;
  }

  .node-name {
    font-weight: bold;
    font-size: 14px;
    color: #1e293b;
    word-break: break-word;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .node-type {
    font-size: 10px;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: #e2e8f0;
    color: #64748b;
    flex-shrink: 0;
    margin-left: 6px;
  }

  .node-object { border-color: #60a5fa; }
  .node-object .node-type { background-color: #dbeafe; color: #2563eb; }

  .node-interface { border-color: #34d399; }
  .node-interface .node-type { background-color: #d1fae5; color: #059669; }

  .node-union { border-color: #f472b6; }
  .node-union .node-type { background-color: #fce7f3; color: #db2777; }

  .node-enum { border-color: #a78bfa; }
  .node-enum .node-type { background-color: #ede9fe; color: #7c3aed; }

  .node-scalar { border-color: #fbbf24; }
  .node-scalar .node-type { background-color: #fef3c7; color: #d97706; }

  .node-input { border-color: #67e8f9; }
  .node-input .node-type { background-color: #ecfeff; color: #0891b2; }

  .node-fields {
    font-size: 12px;
    color: #475569;
    overflow-y: auto;
    max-height: 100px;
    flex-grow: 1;
  }

  .field {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 2px 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 2px;
    border-radius: 3px;
    transition: background-color 0.1s;
  }

  .field:hover {
    background-color: #f1f5f9;
  }

  .field.selected {
    background-color: #dbeafe;
    font-weight: 500;
  }

  .field-name {
    flex-grow: 1;
  }

  .field-type {
    color: #64748b;
    margin-left: 4px;
  }

  .field-required {
    color: #dc2626;
  }

  .node-description {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 6px;
    padding-top: 4px;
    border-top: 1px dashed #e2e8f0;
    flex-shrink: 0;
  }

  .show-all-btn {
    background: none;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 10px;
    cursor: pointer;
    margin-top: 4px;
    color: #475569;
  }

  .show-all-btn:hover {
    background-color: #f1f5f9;
  }
</style>

<div
  bind:this={nodeElement}
  class={nodeClasses}
  style="left: {node.position.x}px; top: {node.position.y}px; width: {nodeWidth}px; height: {nodeHeight}px;"
  onclick={handleClick}
  onkeydown={(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      handleClick(mouseEvent);
    }
  }}
  oncontextmenu={handleRightClick}
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  role="button"
  tabindex="0"
  aria-label={`Graph node: ${node.name}, type: ${node.type}`}
>
  <div class="node-header">
    <div class="node-name" title={node.name}>{node.name}</div>
    {#if showType}
      <div class="node-type">{node.type}</div>
    {/if}
  </div>
  
  {#if showFields && node.fields && node.fields.length > 0}
    <div class="node-fields">
      {#each displayedFields as field (field.name)}
        <div 
          class="field {selectedField === field ? 'selected' : ''}"
          onclick={(e) => handleFieldClick(field, e)}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFieldClick(field, e);
            }
          }}
          title={field.description || `${field.name}: ${field.type}`}
          role="button"
          tabindex="0"
          aria-label={`Field: ${field.name}, type: ${field.type}`}
        >
          <span class="field-name">{field.name}</span>
          <span class="field-type">
            {field.type}{#if field.isRequired}<span class="field-required">*</span>{/if}
          </span>
        </div>
      {/each}
      
      {#if hasMoreFields && !showAllFields}
        <button class="show-all-btn" onclick={toggleShowFields}>
          + {node.fields.length - maxVisibleFields} more
        </button>
      {/if}
      
      {#if showAllFields && hasMoreFields}
        <button class="show-all-btn" onclick={toggleShowFields}>
          Show less
        </button>
      {/if}
    </div>
  {/if}
  
  {#if showDescription && node.description}
    <div class="node-description">
      {node.description}
    </div>
  {/if}
</div>