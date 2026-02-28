<script lang="ts">
  /**
   * CodeEditor - Legacy wrapper for unified Code
   * 
   * @deprecated Use Code with basic props instead
   */
  import Code from '../code-block/index.svelte';
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

<Code
  code={code}
  language={language}
  showLineNumbers={showLineNumbers}
  copyable={showCopyButton}
  class={className}
/>

