<script lang="ts">
  import type { GridLayoutProps } from '$stylist/design-system/layout/grid-layout';
  import { getGridLayoutItemClass } from '$stylist/design-system/layout/grid-layout';
  import { createGridLayoutState } from '../state.svelte';

  let props: GridLayoutProps = $props();
  const state = createGridLayoutState(props);
  const items = $derived(props.items ?? []);
</script>

<div class={state.containerClass} style={state.containerStyle} {...props}>
  {#each items as item}
    <div
      class={getGridLayoutItemClass(item.class ?? '', state.itemClass)}
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
