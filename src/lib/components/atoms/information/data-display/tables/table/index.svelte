<script lang="ts">
  import type { TableProps } from '$stylist/design-system/data-display';
  import { createTableState } from '../state.svelte';

  let props: TableProps = $props();
  const state = createTableState(props);
</script>

<table {...props} class={state.classes}>
  {#if props.caption}
    <caption class={state.captionClasses}>{props.caption}</caption>
  {/if}
  {#if props.content}
    {@render props.content()}
  {/if}
</table>
