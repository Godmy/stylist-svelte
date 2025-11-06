<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type SubgraphStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded' | 'filled';

  type GraphvizSubgraphProps = {
    id: string;
    label?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
    fillColor?: string;
    style?: SubgraphStyle;
    fontSize?: number;
    padding?: number;
    selected?: boolean;
    highlight?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  // Props
  let { 
    id,
    label = '',
    x = 0,
    y = 0,
    width = 250,
    height = 200,
    color = '#64748b',
    fillColor = 'rgba(100, 116, 139, 0.05)',
    style = 'solid',
    fontSize = 14,
    padding = 30,
    selected = false,
    highlight = false,
    children,
    ...restProps
  }: GraphvizSubgraphProps = $props();

  // Local state
  let isHovered = $state(false);

  // Compute subgraph classes
  let subgraphClasses = $derived([
    'graphviz-subgraph',
    `style-${style}`,
    selected ? 'selected' : '',
    highlight ? 'highlighted' : '',
    isHovered ? 'hovered' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .graphviz-subgraph {
    position: absolute;
    border: 2px solid;
    border-radius: 12px;
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  .graphviz-subgraph:hover {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  .graphviz-subgraph.selected {
    border-color: #3b82f6 !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 241, 0.3);
  }

  .graphviz-subgraph.highlighted {
    border-color: #f59e0b !important;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
  }

  /* Style-specific classes */
  .graphviz-subgraph.style-solid { border-style: solid; }
  .graphviz-subgraph.style-dashed { border-style: dashed; }
  .graphviz-subgraph.style-dotted { border-style: dotted; }
  .graphviz-subgraph.style-bold { border-width: 4px; }
  .graphviz-subgraph.style-rounded { border-radius: 20px; }
  .graphviz-subgraph.style-filled { background-color: var(--fill-color); }

  .subgraph-label {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color, #475569);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2px 10px;
    border-radius: 20px;
    white-space: nowrap;
  }
</style>

<div
  class={subgraphClasses}
  style="left: {x - padding/2}px; top: {y - padding/2}px; width: {width + padding}px; height: {height + padding}px; border-color: {color}; --fill-color: {fillColor};"
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  role="region"
  aria-label={label || 'Graphviz subgraph'}
  {...restProps}
>
  {#if label}
    <div class="subgraph-label" style="--color: {color};">
      {label}
    </div>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</div>