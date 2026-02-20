<script lang="ts">
  /**
   * CodeBlockWithLineNumbers - Legacy wrapper for unified CodeBlock
   * 
   * @deprecated Use CodeBlock with showLineNumbers={true} instead
   */
  import CodeBlock from '../code-block/index.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    code?: string;
    language?: string;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };

  let props: Props = $props();
</script>

<CodeBlock
  code={props.code}
  language={props.language}
  showLineNumbers={true}
  highlightLines={props.highlightLines}
  title={props.title}
  copyable={props.copyable}
  class={props.class}
  contentClass={props.contentClass}
  lineNumberClass={props.lineNumberClass}
  codeClass={props.codeClass}
  headerClass={props.headerClass}
  {...props}
/>
