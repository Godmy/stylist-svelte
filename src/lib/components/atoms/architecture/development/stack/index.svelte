<script lang="ts">
  import type { StackProps } from '$stylist/design-system';
  import { createStackState } from '../state.svelte';

  let props: StackProps = $props();
  const state = createStackState(props);
</script>

<div style:gap={state.gap} class={state.classes} role="group" aria-label="Stack layout container">
  {@render props.children?.()}
</div>
