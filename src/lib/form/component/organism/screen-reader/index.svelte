<script lang="ts">
  import { createScreenReaderState } from '$stylist/form/function/state/screen-reader';

  const props = $props();
  const state = createScreenReaderState(props);
</script>
<div class={state.rootClass} {...props}>
  <h3 class={state.titleClass}>{props.title}</h3>
  <p class={state.contentClass}>{props.content}</p>
  <button class={state.actionButtonClass} aria-label="Hidden accessible action">Action</button>
</div>







