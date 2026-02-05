<script lang="ts">
  import type { TableRowProps } from '$stylist/design-system';
  import { createTableRowState } from '../state.svelte';

  let props: TableRowProps = $props();
  const state = createTableRowState(props);
</script>

<tr {...props} class={state.classes}>
  {#if props.content}
    {@render props.content()}
  {/if}
</tr>
