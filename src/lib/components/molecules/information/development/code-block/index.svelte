<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Copy, Check } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { CodeBlockStyleManager } from '$stylist/design-system/styles/information/code-block';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  /**
   * Unified CodeBlock Component
   * 
   * Consolidates: code-block-with-line-numbers, copyable-code-block, code-editor
   * 
   * Features (all optional):
   * - showLineNumbers: Display line numbers
   * - highlightLines: Array of line numbers to highlight
   * - copyable: Show copy button
   * - title: Code block title
   */

  type Props = RestProps & {
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
  }: Props = $props();

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
  const containerClass = $derived(CodeBlockStyleManager.getContainerClass(hostClass));
  const headerClassComputed = $derived(CodeBlockStyleManager.getHeaderClass(headerClass));
  const lineNumbersContainerClass = $derived(CodeBlockStyleManager.getLineNumbersContainerClass(lineNumberClass));
  const lineNumberItemClass = (isHighlighted: boolean) => CodeBlockStyleManager.getLineNumberItemClass(isHighlighted);
  const contentContainerClass = $derived(CodeBlockStyleManager.getContentContainerClass(contentClass));
  const preClass = $derived(CodeBlockStyleManager.getPreClass(codeClass));
  const copyButtonContainerClass = $derived(CodeBlockStyleManager.getCopyButtonContainerClass());
  const iconClass = $derived(CodeBlockStyleManager.getIconClass());
</script>

<div class={containerClass} {...restProps}>
  {#if title}
    <div class={headerClassComputed}>
      {title}
    </div>
  {/if}

  <div class={CodeBlockStyleManager.getMainContentClass()}>
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
          <Check class={iconClass} />
        {:else}
          <Copy class={iconClass} />
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
    background-color: #f8fafc;
  }

  :global(code) {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    line-height: 1.5;
  }
</style>
