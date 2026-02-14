<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Copy, Check } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { CopyableCodeBlockStyleManager } from '$stylist/design-system/styles/copyable-code-block';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(CopyableCodeBlockStyleManager.getContainerClass(hostClass));
  const headerClassComputed = $derived(CopyableCodeBlockStyleManager.getHeaderClass(headerClass));
  const relativeContainerClass = $derived(CopyableCodeBlockStyleManager.getRelativeContainerClass());
  const preClass = $derived(CopyableCodeBlockStyleManager.getPreClass(contentClass));
  const copyButtonContainerClass = $derived(CopyableCodeBlockStyleManager.getCopyButtonContainerClass());
  const iconClass = (isCopied: boolean) => CopyableCodeBlockStyleManager.getIconClass(isCopied);
</script>

<div class={containerClass} {...restProps}>
  {#if title}
    <div class={headerClassComputed}>
      {title}
    </div>
  {/if}

  <div class={relativeContainerClass}>
    <pre class={preClass}><code class={languageClass}>{code}</code></pre>

    <div class={copyButtonContainerClass}>
      <Button
        variant="ghost"
        size="sm"
        onclick={copyToClipboard}
        aria-label="Copy code"
      >
        {#if copied}
          <Check class={iconClass(true)} />
        {:else}
          <Copy class={iconClass(false)} />
        {/if}
      </Button>
    </div>
  </div>
</div>

<style>
  :global(.c-copyable-code-block) {
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

