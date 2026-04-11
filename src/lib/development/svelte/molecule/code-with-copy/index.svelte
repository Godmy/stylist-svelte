<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { Props } from '$stylist/development/type/struct/code-with-copy';
  import { CODE_WITH_COPY_CHECK, CODE_WITH_COPY_COPY } from '$stylist/development/const/map/code-with-copy';
  import { createEventDispatcher } from 'svelte';
  import { createCodeWithCopyState } from '$stylist/development/function/state/code-with-copy';

  let props: Props = $props();
  const dispatch = createEventDispatcher();
  const state = createCodeWithCopyState(props, dispatch);
</script>

<div {...props} class={state.containerClass}>
  <div class={state.codeContentClass}>
    {#if props.children}
      {@render props.children()}
    {/if}
  </div>
  <button
    class={state.copyButtonClass}
    aria-label="Copy code"
    onclick={state.handleCopyToClipboard}
  >
    {#if state.copied}
      <BaseIcon name={CODE_WITH_COPY_CHECK} class={state.iconClass(true)} />
    {:else}
      <BaseIcon name={CODE_WITH_COPY_COPY} class={state.iconClass(false)} />
    {/if}
  </button>
</div>
