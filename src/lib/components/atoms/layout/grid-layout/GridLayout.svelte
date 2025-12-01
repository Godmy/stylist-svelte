<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  // Allow both Snippet and string content for flexibility
  type GridItemContent = Snippet | string;

  type GridItem = {
    id: string;
    content: GridItemContent;
    colSpan?: number;
    rowSpan?: number;
    class?: string;
  };

  type Props = {
    items: GridItem[];
    columns?: string; // CSS grid-template-columns value
    gap?: string; // CSS gap value
    class?: string;
    itemClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    items = [],
    columns = 'repeat(auto-fit, minmax(250px, 1fr))',
    gap = '1rem',
    class: className = '',
    itemClass = '',
    ...restProps
  }: Props = $props();

  // Export the type for use in stories
  export type { GridItem };
</script>

<div class={`grid ${className}`} style={`grid-template-columns: ${columns}; gap: ${gap};`} {...restProps}>
  {#each items as item}
    <div
      class={`bg-white rounded-lg shadow p-4 ${item.class || ''} ${itemClass}`}
      style={
        (item.colSpan ? `grid-column: span ${item.colSpan};` : '') +
        (item.rowSpan ? `grid-row: span ${item.rowSpan};` : '')
      }
    >
      {#if typeof item.content === 'string'}
        {@html item.content}
      {:else}
        {@render item.content()}
      {/if}
    </div>
  {/each}
</div>