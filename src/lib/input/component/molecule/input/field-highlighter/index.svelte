<script lang="ts">
  import type { SlotFieldHighlighter as IFieldHighlighterProps } from '$stylist/input/interface/slot/field-highlighter';
  import { createFieldHighlighterState } from '$stylist/input/function/state/field-highlighter';

  let props: IFieldHighlighterProps = $props();
  const state = createFieldHighlighterState(props);
</script>

<div class="field-highlighter-visualization">
  {#each state.data.edges as edge}
    <div
      class="rounded border px-2 py-1 text-xs"
      class:border-[var(--color-primary-400)]={state.isEdgeHighlighted(edge)}
      class:border-[var(--color-border-primary)]={!state.isEdgeHighlighted(edge)}
    >
      {edge.fromNodeId} -> {edge.toNodeId}{#if edge.label} ({edge.label}){/if}
    </div>
  {/each}

  {#each state.data.nodes as node}
    <button
      type="button"
      class="absolute rounded border bg-[var(--color-background-primary)] px-3 py-2 text-left shadow-sm"
      class:border-[var(--color-primary-500)]={state.selectedNode?.id === node.id || state.isNodeHighlighted(node)}
      class:border-[var(--color-border-primary)]={!(state.selectedNode?.id === node.id || state.isNodeHighlighted(node))}
      onclick={() => state.handleNodeClick(node)}
      style="left: {node.x || 0}px; top: {node.y || 0}px;"
    >
      <div class="font-medium">{node.label || node.id}</div>
      {#if node.children}
        <div class="mt-1 text-xs text-[var(--color-text-secondary)]">
          {@render node.children()}
        </div>
      {/if}
    </button>
  {/each}
</div>




