<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type ClusterStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded';

  type GraphvizClusterProps = {
    id: string;
    label?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
    fillColor?: string;
    style?: ClusterStyle;
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
    width = 200,
    height = 150,
    color = '#94a3b8',
    fillColor = 'transparent',
    style = 'solid',
    fontSize = 12,
    padding = 20,
    selected = false,
    highlight = false,
    children,
    ...restProps
  }: GraphvizClusterProps = $props();

  // Local state
  let isHovered = $state(false);

  // Compute cluster classes
  let clusterClasses = $derived([
    'graphviz-cluster',
    `style-${style}`,
    selected ? 'selected' : '',
    highlight ? 'highlighted' : '',
    isHovered ? 'hovered' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .graphviz-cluster {
    position: absolute;
    border: 2px solid;
    border-radius: 8px;
    background-color: transparent;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  .graphviz-cluster:hover {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }

  .graphviz-cluster.selected {
    border-color: #3b82f6 !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  .graphviz-cluster.highlighted {
    border-color: #f59e0b !important;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
  }

  /* Style-specific classes */
  .graphviz-cluster.style-solid { border-style: solid; }
  .graphviz-cluster.style-dashed { border-style: dashed; }
  .graphviz-cluster.style-dotted { border-style: dotted; }
  .graphviz-cluster.style-bold { border-width: 4px; }
  .graphviz-cluster.style-rounded { border-radius: 16px; }

  .cluster-label {
    position: absolute;
    top: -10px;
    left: 10px;
    background: white;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color, #334155);
    white-space: nowrap;
  }
</style>

<div
  class={clusterClasses}
  style="left: {x - padding/2}px; top: {y - padding/2}px; width: {width + padding}px; height: {height + padding}px; border-color: {color}; background: {fillColor};"
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  role="group"
  aria-label={label || 'Graphviz cluster'}
  {...restProps}
>
  {#if label}
    <div class="cluster-label" style="--color: {color};">
      {label}
    </div>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</div>