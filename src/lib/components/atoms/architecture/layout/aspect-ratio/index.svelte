<script lang="ts">
  import type { AspectRatioProps } from '$stylist/design-system';
  import { createAspectRatioState } from '../state.svelte';

  let props: AspectRatioProps = $props();
  const state = createAspectRatioState(props);
</script>

<div style:--aspect-ratio={state.ratio} class={state.classes}>
  {@render props.children()}
</div>
