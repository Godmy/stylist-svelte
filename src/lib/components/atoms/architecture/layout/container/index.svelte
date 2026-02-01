<script lang="ts">
  import type { ContainerProps } from '$stylist/design-system/layout/container';
  import { createContainerState } from '../state.svelte';

  let props: ContainerProps = $props();
  const state = createContainerState(props);
</script>

<div class={state.classes}>
  {@render props.children()}
</div>
