<script lang="ts">
  /**
   * CodeEditor - Legacy wrapper for unified CodeBlock
   * 
   * @deprecated Use CodeBlock with basic props instead
   */
  import CodeBlock from '../code-block/index.svelte';
  type Props = {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    class?: string;
  };

  let {
    code = '',
    language = 'text',
    showLineNumbers = false,
    showCopyButton = false,
    class: className = ''
  }: Props = $props();
</script>

<CodeBlock
  code={code}
  language={language}
  showLineNumbers={showLineNumbers}
  copyable={showCopyButton}
  class={className}
/>
