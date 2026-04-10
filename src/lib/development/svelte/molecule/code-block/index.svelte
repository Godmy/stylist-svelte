<script lang="ts">
  import type { CodeBlockProps } from '$stylist/development/type/struct/code-block';
  import { copyToClipboard } from '$stylist/development/function/script/code-block';
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$stylist';
  import { CodeStyleManager } from '$stylist/development/class/style-manager/code-block';

  const Copy = 'copy';
  const Check = 'check';

  function stateFn(props: CodeBlockProps) {
    let copied = $state(false);
    let codeLines = $derived(props.code?.split('\n') ?? []);
    let languageClass = $derived(`language-${props.language ?? 'text'}`);
    const containerClass = $derived(CodeStyleManager.getContainerClass(props.class ?? ''));
    const headerClassComputed = $derived(CodeStyleManager.getHeaderClass(props.headerClass ?? ''));
    const lineNumbersContainerClass = $derived(CodeStyleManager.getLineNumbersContainerClass(props.lineNumberClass ?? ''));
    const lineNumberItemClass = (isHighlighted: boolean) => CodeStyleManager.getLineNumberItemClass(isHighlighted);
    const contentContainerClass = $derived(CodeStyleManager.getContentContainerClass(props.contentClass ?? ''));
    const preClass = $derived(CodeStyleManager.getPreClass(props.codeClass ?? ''));
    const copyButtonContainerClass = $derived(CodeStyleManager.getCopyButtonContainerClass());
    const iconClass = $derived(CodeStyleManager.getIconClass());

    function handleCopy() {
      copyToClipboard(props.code ?? '', (copiedValue) => {
        copied = copiedValue;
      });
    }

    return {
      get copied() { return copied; },
      get codeLines() { return codeLines; },
      get languageClass() { return languageClass; },
      get containerClass() { return containerClass; },
      get headerClassComputed() { return headerClassComputed; },
      get lineNumbersContainerClass() { return lineNumbersContainerClass; },
      lineNumberItemClass,
      get contentContainerClass() { return contentContainerClass; },
      get preClass() { return preClass; },
      get copyButtonContainerClass() { return copyButtonContainerClass; },
      get iconClass() { return iconClass; },
      handleCopy
    };
  }

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

  const codeBlockState = stateFn({ code, language, showLineNumbers, highlightLines, title, copyable, class: hostClass, contentClass, lineNumberClass, codeClass, headerClass });
</script>

<div class={codeBlockState.containerClass} {...restProps}>
  {#if title}
    <div class={codeBlockState.headerClassComputed}>
      {title}
    </div>
  {/if}

  <div class={CodeStyleManager.getMainContentClass()}>
    {#if showLineNumbers}
      <div class={codeBlockState.lineNumbersContainerClass}>
        {#each codeBlockState.codeLines as _, index}
          <div class={codeBlockState.lineNumberItemClass(highlightLines.includes(index + 1))}>
            {index + 1}
          </div>
        {/each}
      </div>
    {/if}

    <div class={codeBlockState.contentContainerClass}>
      <pre class={codeBlockState.preClass}><code class={codeBlockState.languageClass}>{code}</code></pre>
    </div>
  </div>

  {#if copyable}
    <div class={codeBlockState.copyButtonContainerClass}>
      <Button
        variant="ghost"
        size="sm"
        onclick={codeBlockState.handleCopy}
        aria-label="Copy code"
      >
        {#if codeBlockState.copied}
          <BaseIcon name={Check} class={codeBlockState.iconClass} />
        {:else}
          <BaseIcon name={Copy} class={codeBlockState.iconClass} />
        {/if}
      </Button>
    </div>
  {/if}
</div>

<style>
  :global(.c-code-block) {
    position: relative;
  }

  :global(pre) {
    margin: 0;
    background-color: var(--color-background-secondary);
  }

  :global(code) {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    line-height: var(--line-height-normal);
  }
</style>





