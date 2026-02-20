<script lang="ts">
  // Define local types for graph visualization
  interface GraphNode {
    id: string;
    x: number;
    y: number;
    label?: string;
    children?: import('svelte').Snippet;
  }

  interface GraphEdge {
    id: string;
    fromNodeId: string;
    toNodeId: string;
    label?: string;
  }

  interface GraphVisualizationData {
    nodes: GraphNode[];
    edges: GraphEdge[];
  }

  import { createEventDispatcher } from 'svelte';

  type Props = {
    data: GraphVisualizationData;
    selectedNode?: GraphNode | null;
    selectedField?: any | null;
  };

  let {
    data,
    selectedNode = null,
    selectedField = null
  }: Props = $props();

  // Events
  const dispatch = createEventDispatcher<{
    nodeClick: { node: GraphNode };
    fieldClick: { node: GraphNode; field: any };
  }>();

  // Handle node clicks
  function handleNodeClick(node: GraphNode) {
    dispatch('nodeClick', { node });
  }

  // Handle field clicks
  function handleFieldClick(node: GraphNode, field: any) {
    dispatch('fieldClick', { node, field });
  }

  // Determine if a node should be highlighted
  const isNodeHighlighted = (node: GraphNode) => {
    if (!selectedField) return false;
    return (
      (selectedNode && selectedNode.id === node.id) ||
      (node.label && node.label.includes(selectedField.name))
    );
  };

  // Determine if an edge should be highlighted
  const isEdgeHighlighted = (edge: GraphEdge) => {
    if (!selectedField) return false;
    if (!selectedNode) return false;
    return edge.fromNodeId === selectedNode.id || edge.toNodeId === selectedNode.id;
  };
</script>

<div class="field-highlighter-visualization">
  {#each data.edges as edge}
    <div
      class="rounded border px-2 py-1 text-xs"
      class:border-blue-400={isEdgeHighlighted(edge)}
      class:border-gray-200={!isEdgeHighlighted(edge)}
    >
      {edge.fromNodeId} -> {edge.toNodeId}{#if edge.label} ({edge.label}){/if}
    </div>
  {/each}

  {#each data.nodes as node}
    <button
      type="button"
      class="absolute rounded border bg-white px-3 py-2 text-left shadow-sm"
      class:border-blue-500={selectedNode?.id === node.id || isNodeHighlighted(node)}
      class:border-gray-200={!(selectedNode?.id === node.id || isNodeHighlighted(node))}
      onclick={() => handleNodeClick(node)}
      style="left: {node.x || 0}px; top: {node.y || 0}px;"
    >
      <div class="font-medium">{node.label || node.id}</div>
      {#if node.children}
        <div class="mt-1 text-xs text-gray-600">
          {@render node.children()}
        </div>
      {/if}
    </button>
  {/each}
</div>
