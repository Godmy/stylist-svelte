<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import CodeBlock from '../../atoms/typography/CodeBlock.svelte';

  type SyntaxHighlightedCodeVariant = 'default' | 'terminal' | 'diff';
  type SyntaxHighlightedCodeSize = 'sm' | 'md' | 'lg';

  type Props = {
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Code content to highlight
     */
    code: string;
    /**
     * Variant style
     */
    variant?: SyntaxHighlightedCodeVariant;
    /**
     * Size of the code block
     */
    size?: SyntaxHighlightedCodeSize;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
  } & HTMLAttributes<HTMLElement>;

  let {
    language = 'text',
    code = '',
    variant = 'default',
    size = 'md',
    showLineNumbers = false,
    startLineNumber = 1,
    class: className = '',
    ...restProps
  }: Props = $props();

  // Note: In a real implementation, we would use a syntax highlighter like Shiki here
  // For now, we'll just render the code as-is with basic escaping
  const escapedCode = $derived(code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
  );
</script>

<CodeBlock
  {...restProps}
  {variant}
  {size}
  {showLineNumbers}
  {startLineNumber}
  class={className}
>
  <code class="language-{language}">
    {@html escapedCode}
  </code>
</CodeBlock>