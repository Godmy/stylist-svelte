<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import CodeBlock from '../../atoms/typography/CodeBlock.svelte';
  import { Check, Copy } from 'lucide-svelte';

  type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';
  type CodeWithCopySize = 'sm' | 'md' | 'lg';

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
     * Size of the code block
     */
    size?: CodeWithCopySize;
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
     * Content for the code block
     */
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    language = 'text',
    variant = 'default',
    size = 'md',
    showLineNumbers = false,
    startLineNumber = 1,
    copySuccessMessage = 'Code copied to clipboard!',
    copyErrorMessage = 'Failed to copy code',
    children,
    class: className = '',
    ...restProps
  }: Props = $props();

  let copied = $state(false);

  async function copyCode() {
    const codeElement = document.querySelector('.code-content');
    if (codeElement) {
      try {
        const codeText = (codeElement as HTMLElement).innerText || (codeElement as HTMLElement).textContent || '';
        await navigator.clipboard.writeText(codeText);
        copied = true;
        
        // Show a simple native notification instead of toast
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(copySuccessMessage);
        } else {
          // Fallback: we can show a simple alert or just rely on the UI feedback
          console.log(copySuccessMessage);
        }
        
        setTimeout(() => {
          copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
        // Show error feedback
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(copyErrorMessage);
        } else {
          console.log(copyErrorMessage);
        }
      }
    }
  }
</script>

<div class="relative group">
  <CodeBlock
    {...restProps}
    {language}
    {variant}
    {size}
    {showLineNumbers}
    {startLineNumber}
    class={`pr-10 ${className}`}
  >
    <div class="code-content">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </CodeBlock>
  
  <button
    class="absolute top-2 right-2 p-1.5 rounded-md bg-black/20 hover:bg-black/30 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none"
    onclick={copyCode}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyCode();
      }
    }}
    role="button"
    tabindex="0"
    aria-label={copied ? "Copied!" : "Copy code"}
    title={copied ? "Copied!" : "Copy code"}
  >
    {#if copied}
      <Check size={16} />
    {:else}
      <Copy size={16} />
    {/if}
  </button>
</div>