<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { CodeWithCopyProps } from '$stylist/development/type/struct/code-with-copy-props';
  import { TOKEN_DEVELOPMENT_ICON } from '$stylist/development/const/icon';
  import { createEventDispatcher } from 'svelte';
  import { createCodeWithCopyState } from '$stylist/development/function/state/code-with-copy';

  let props: CodeWithCopyProps = $props();
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
      <BaseIcon
        name={TOKEN_DEVELOPMENT_ICON.find((icon) => icon === 'check') ?? 'check'}
        class={state.iconClass(true)}
      />
    {:else}
      <BaseIcon
        name={TOKEN_DEVELOPMENT_ICON.find((icon) => icon === 'copy') ?? 'copy'}
        class={state.iconClass(false)}
      />
    {/if}
  </button>
</div>
