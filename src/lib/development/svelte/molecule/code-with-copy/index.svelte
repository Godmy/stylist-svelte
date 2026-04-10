<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { createEventDispatcher } from 'svelte';
  import { createCodeWithCopyState } from '$stylist/development/function/state/code-with-copy';

  const Check = 'check';
  const Copy = 'copy';

  type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';

  type Props = {
    language?: string;
    variant?: CodeWithCopyVariant;
    showLineNumbers?: boolean;
    startLineNumber?: number;
    copySuccessMessage?: string;
    copyErrorMessage?: string;
    children: import('svelte').Snippet;
  } & InformationHTMLAttributes<HTMLElement>;

  let {
    language = 'text',
    variant = 'default',
    showLineNumbers = false,
    startLineNumber = 1,
    copySuccessMessage = 'Copied to clipboard!',
    copyErrorMessage = 'Failed to copy',
    children,
    ...restProps
  }: Props = $props();

  const dispatch = createEventDispatcher();
  const state = createCodeWithCopyState({ language, variant, showLineNumbers, startLineNumber, copySuccessMessage, copyErrorMessage, children, ...restProps }, dispatch);
</script>

<div {...restProps} class={state.containerClass}>
  <div class={state.codeContentClass}>
    {#if children}
      {@render children()}
    {/if}
  </div>
  <button
    class={state.copyButtonClass}
    aria-label="Copy code"
    onclick={state.handleCopyToClipboard}
  >
    {#if state.copied}
      <BaseIcon name={Check} class={state.iconClass(true)} />
    {:else}
      <BaseIcon name={Copy} class={state.iconClass(false)} />
    {/if}
  </button>
</div>





