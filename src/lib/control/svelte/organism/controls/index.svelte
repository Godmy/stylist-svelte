<script lang="ts">
  import { createControlsState } from '$stylist/control/function/state/controls';

  let props = $props();
  const state = createControlsState(props);
</script>

<div class="sr-only" aria-hidden="true"></div>
