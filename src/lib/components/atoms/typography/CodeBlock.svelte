<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент блока кода с подсветкой синтаксиса
   * Приоритет: если передан `children`, он будет отображен,
   * иначе выводится пустой блок
   */
  type CodeBlockVariant = 'default' | 'terminal' | 'diff';
  type CodeBlockSize = 'sm' | 'md' | 'lg';

  type CodeBlockProps = {
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Variant style
     */
    variant?: CodeBlockVariant;
    /**
     * Size of the code block
     */
    size?: CodeBlockSize;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Содержимое блока кода
     */
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    language = 'text',
    variant = 'default',
    size = 'md',
    showLineNumbers = false,
    startLineNumber = 1,
    children,
    class: className = '',
    ...restProps
  }: CodeBlockProps = $props();

  let variantClasses = $derived({
    default: 'bg-gray-900 text-gray-100',
    terminal: 'bg-black text-green-400 font-mono',
    diff: 'bg-gray-50 text-gray-800'
  }[variant]);

  let sizeClasses = $derived({
    sm: 'text-xs p-2',
    md: 'text-sm p-4',
    lg: 'text-base p-6'
  }[size]);

  let classes = $derived(`${variantClasses} ${sizeClasses} rounded-md overflow-x-auto font-mono ${className}`);

  // Function to generate line numbers
  function getLineNumbers(code: string): number[] {
    const lines = code.split('\n');
    return Array.from({ length: lines.length }, (_, i) => i + startLineNumber);
  }
</script>

<div {...restProps} class={classes}>
  {#if children}
    {@render children()}
  {/if}
</div>