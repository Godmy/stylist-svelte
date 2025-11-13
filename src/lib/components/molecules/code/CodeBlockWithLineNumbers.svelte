<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Copy, Check } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

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
    showLineNumbers = true,
    highlightLines = [],
    title,
    copyable = true,
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
</script>

<div class={`code-block-with-line-numbers rounded-lg border border-gray-200 overflow-hidden ${hostClass}`} {...restProps}>
  {#if title}
    <div class={`bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700 ${headerClass}`}>
      {title}
    </div>
  {/if}

  <div class="flex">
    {#if showLineNumbers}
      <div class={`bg-gray-100 py-4 text-right select-none text-gray-500 text-sm ${lineNumberClass}`}>
        {#each codeLines as _, index}
          <div class={`pr-3 pl-2 ${highlightLines.includes(index + 1) ? 'bg-yellow-100' : ''}`}>
            {index + 1}
          </div>
        {/each}
      </div>
    {/if}

    <div class={`flex-1 overflow-x-auto ${contentClass}`}>
      <pre class={`p-4 text-sm overflow-x-auto max-w-full ${codeClass}`}><code class={languageClass}>{code}</code></pre>
    </div>
  </div>

  {#if copyable}
    <div class="absolute top-2 right-2">
      <Button
        variant="ghost"
        size="sm"
        onclick={copyToClipboard}
        aria-label="Copy code"
      >
        {#if copied}
          <Check class="h-4 w-4 text-green-500" />
        {:else}
          <Copy class="h-4 w-4" />
        {/if}
      </Button>
    </div>
  {/if}
</div>

<style>
  .code-block-with-line-numbers {
    position: relative;
  }
  
  pre {
    margin: 0;
    background-color: #f8fafc;
  }
  
  code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    line-height: 1.5;
  }
</style>
