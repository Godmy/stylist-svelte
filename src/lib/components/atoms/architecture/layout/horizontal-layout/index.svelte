<script lang="ts">
  import type { HorizontalLayoutProps } from '$stylist/design-system/layout/horizontal-layout';
  import { createHorizontalLayoutState } from '../state.svelte';

  let props: HorizontalLayoutProps = $props();
  const state = createHorizontalLayoutState(props);
</script>

<div class={state.classes} {...props}>
  {@render props.children()}
</div>
