<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Check, Copy } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';
  import { CodeWithCopyStyleManager } from '$stylist/design-system/styles/code-with-copy';

  type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';

  type Props = {
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Variant style
     */
    variant?: CodeWithCopyVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Content to render inside the component
     */
    children: import('svelte').Snippet;
  } & HTMLAttributes<HTMLElement>;

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

  let copied = $state(false);
  const dispatch = createEventDispatcher();

  async function copyToClipboard() {
    const codeElement = document.querySelector<HTMLElement>('.code-content');
    if (!codeElement) return;

    try {
      const code = codeElement.textContent || '';
      await navigator.clipboard.writeText(code);
      copied = true;
      dispatch('copySuccess', { message: copySuccessMessage });
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      dispatch('copyError', { message: copyErrorMessage });
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(CodeWithCopyStyleManager.getContainerClass());
  const codeContentClass = $derived(CodeWithCopyStyleManager.getCodeContentClass());
  const copyButtonClass = $derived(CodeWithCopyStyleManager.getCopyButtonClass());
  const iconClass = (isCopied: boolean) => CodeWithCopyStyleManager.getIconClass(isCopied);
</script>

<div {...restProps} class={containerClass}>
  <div class={codeContentClass}>
    {#if children}
      {@render children()}
    {/if}
  </div>
  <button
    class={copyButtonClass}
    aria-label="Copy code"
    onclick={copyToClipboard}
  >
    {#if copied}
      <Check class={iconClass(true)} />
    {:else}
      <Copy class={iconClass(false)} />
    {/if}
  </button>
</div>
