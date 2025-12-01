<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Check, Copy } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

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
</script>

<div {...restProps} class="relative group">
  <div class="code-content">
    {#if children}
      {@render children()}
    {/if}
  </div>
  <button
    class="absolute top-2 right-2 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
    aria-label="Copy code"
    onclick={copyToClipboard}
  >
    {#if copied}
      <Check class="w-4 h-4 text-green-600" />
    {:else}
      <Copy class="w-4 h-4" />
    {/if}
  </button>
</div>