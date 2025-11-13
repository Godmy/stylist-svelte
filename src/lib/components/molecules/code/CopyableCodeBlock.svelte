<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Copy, Check } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    code?: string;
    language?: string;
    title?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
  };

  let {
    code = '',
    language = 'text',
    title,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    ...restProps
  }: Props = $props();

  let copied = $state(false);

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

<div class={`copyable-code-block rounded-lg border border-gray-200 overflow-hidden ${hostClass}`} {...restProps}>
  {#if title}
    <div class={`bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700 ${headerClass}`}>
      {title}
    </div>
  {/if}

  <div class="relative">
    <pre class={`p-4 text-sm overflow-x-auto max-w-full ${contentClass}`}><code class={languageClass}>{code}</code></pre>
    
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
  </div>
</div>

<style>
  .copyable-code-block {
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
