<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    id: string;
    x: number;
    y: number;
    label?: string;
    type?: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    children?: Snippet;
  };

  let {
    id,
    x,
    y,
    label,
    type = 'default',
    color = '#3b82f6',
    size = 'md',
    children
  }: Props = $props();

  let sizeClasses = $derived({
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }[size]);

  let positionStyle = $derived({ left: `${x}px`, top: `${y}px` });
</script>

<!-- Placeholder for graph node implementation -->
<div class={`graph-node ${sizeClasses}`} style="position: absolute; {Object.entries(positionStyle).map(([key, value]) => `${key}:${value}`).join(';')}">
  {#if children}
    {@render children()}
  {:else}
    {label || id}
  {/if}
</div>

<style>
  .graph-node {
    background-color: var(--color, #3b82f6);
    border: 2px solid #94a3b8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
  }
</style>