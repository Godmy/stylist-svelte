<script lang="ts">
  import type { SpacerProps } from '$stylist/design-system';
  import { createSpacerState } from '../state.svelte';

  let props: SpacerProps = $props();
  const state = createSpacerState(props);
</script>

<div
  class={state.classes}
  style="--spacer-size: {state.sizeValue}"
  aria-hidden="true"
></div>
