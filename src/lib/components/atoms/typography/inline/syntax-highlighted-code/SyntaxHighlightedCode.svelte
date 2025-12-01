<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ISyntaxHighlightedCodeProps } from './types';
  import { SyntaxHighlightedCodeStyleManager } from './styles';
  import CodeBlock from '../../atoms/typography/elements/CodeBlock.svelte';

  let {
    language = 'text',
    code = '',
    variant = 'default',
    size = 'md',
    showLineNumbers = false,
    startLineNumber = 1,
    class: className = '',
    ...restProps
  }: ISyntaxHighlightedCodeProps = $props();

  const containerClasses = SyntaxHighlightedCodeStyleManager.getContainerClasses(variant, size, className);
  const codeClasses = SyntaxHighlightedCodeStyleManager.getCodeClasses(language);

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
  class={containerClasses}
>
  <code class={codeClasses}>
    {@html escapedCode}
  </code>
</CodeBlock>