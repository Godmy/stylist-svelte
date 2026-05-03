<script lang="ts">
  import type { CodeBlockProps } from '$stylist/development/type/struct/code-block-props';
  import { createCodeBlockState } from '$stylist/development/function/state/code-block';
  import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
  import Button from '$stylist/control/component/atom/button/index.svelte';

  const Copy = 'copy';
  const Check = 'check';

  let {
    code = '',
    language = 'text',
    showLineNumbers = false,
    highlightLines = [],
    title,
    copyable = false,
    class: hostClass = '',
    contentClass = '',
    lineNumberClass = '',
    codeClass = '',
    headerClass = '',
    ...restProps
  }: CodeBlockProps = $props();

  const state = createCodeBlockState({ code, language, showLineNumbers, highlightLines, title, copyable, class: hostClass, contentClass, lineNumberClass, codeClass, headerClass });
</script>

<div class={state.containerClass} {...restProps}>
  {#if title}
    <div class={state.headerClassComputed}>
      {title}
    </div>
  {/if}

  <div class={state.getMainContentClass}>
    {#if showLineNumbers}
      <div class={state.lineNumbersContainerClass}>
        {#each state.codeLines as _, index}
          <div class={state.lineNumberItemClass(highlightLines.includes(index + 1))}>
            {index + 1}
          </div>
        {/each}
      </div>
    {/if}

    <div class={state.contentContainerClass}>
      <pre class={state.preClass}><code class={state.languageClass}>{code}</code></pre>
    </div>
  </div>

  {#if copyable}
    <div class={state.copyButtonContainerClass}>
      <Button
        variant="ghost"
        size="sm"
        onclick={state.handleCopy}
        aria-label="Copy code"
      >
        {#if state.copied}
          <BaseIcon name={Check} class={state.iconClass} />
        {:else}
          <BaseIcon name={Copy} class={state.iconClass} />
        {/if}
      </Button>
    </div>
  {/if}
</div>

<style>
  :global(.c-code-block) {
    position: relative;
  }
</style>

