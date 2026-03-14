<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Copy = 'copy';
const Check = 'check';

  import { Button } from '$stylist/components/atoms';
  import { CodeStyleManager } from '$stylist/design-system/styles/information/code-block';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  /**
   * Unified Code Component
   * 
   * Consolidates: code-block-with-line-numbers, copyable-code-block, code-editor
   * 
   * Features (all optional):
   * - showLineNumbers: Display line numbers
   * - highlightLines: Array of line numbers to highlight
   * - copyable: Show copy button
   * - title: Code block title
   */

  type CodeBlockProps = RestProps & {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };

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

  let copied = $state(false);
  let codeLines = $derived(code.split('\n'));

  function copyToClipboard() {
    navigator.clipboard.writeText(code)
      .then(() => {
        copied = true;
        setTimeout(() => {
          copied = false;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy code to clipboard:', err);
      });
  }

  let languageClass = $derived(`language-${language}`);

  // Generate CSS classes using the style manager
  const containerClass = $derived(CodeStyleManager.getContainerClass(hostClass));
  const headerClassComputed = $derived(CodeStyleManager.getHeaderClass(headerClass));
  const lineNumbersContainerClass = $derived(CodeStyleManager.getLineNumbersContainerClass(lineNumberClass));
  const lineNumberItemClass = (isHighlighted: boolean) => CodeStyleManager.getLineNumberItemClass(isHighlighted);
  const contentContainerClass = $derived(CodeStyleManager.getContentContainerClass(contentClass));
  const preClass = $derived(CodeStyleManager.getPreClass(codeClass));
  const copyButtonContainerClass = $derived(CodeStyleManager.getCopyButtonContainerClass());
  const iconClass = $derived(CodeStyleManager.getIconClass());
</script>

<div class={containerClass} {...restProps}>
  {#if title}
    <div class={headerClassComputed}>
      {title}
    </div>
  {/if}

  <div class={CodeStyleManager.getMainContentClass()}>
    {#if showLineNumbers}
      <div class={lineNumbersContainerClass}>
        {#each codeLines as _, index}
          <div class={lineNumberItemClass(highlightLines.includes(index + 1))}>
            {index + 1}
          </div>
        {/each}
      </div>
    {/if}

    <div class={contentContainerClass}>
      <pre class={preClass}><code class={languageClass}>{code}</code></pre>
    </div>
  </div>

  {#if copyable}
    <div class={copyButtonContainerClass}>
      <Button
        variant="ghost"
        size="sm"
        onclick={copyToClipboard}
        aria-label="Copy code"
      >
        {#if copied}
          <BaseIcon name={Check} class={iconClass} />
        {:else}
          <BaseIcon name={Copy} class={iconClass} />
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





