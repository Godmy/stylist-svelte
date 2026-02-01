<script lang="ts">
  import type { TableHeaderProps } from '$stylist/design-system/data-display';
  import { createTableHeaderState } from '../state.svelte';

  let props: TableHeaderProps = $props();
  const state = createTableHeaderState(props);
</script>

<thead {...props} class={state.classes}>
  {#if props.content}
    {@render props.content()}
  {/if}
</thead>
