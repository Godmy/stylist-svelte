<script lang="ts">
  /**
   * CodeWithLineNumbers - Legacy wrapper for unified Code
   *
   * @deprecated Use Code with showLineNumbers={true} instead
   */
  import Code from '../code-block/index.svelte';
  import type { CodeBlockWithLineNumbersProps } from '$stylist/development/type/struct/code-block-with-line-numbers';

  function stateFn(props: CodeBlockWithLineNumbersProps) {
    return { props };
  }

  let props: CodeBlockWithLineNumbersProps = $props();
  const state = stateFn(props);
</script>

<Code
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




