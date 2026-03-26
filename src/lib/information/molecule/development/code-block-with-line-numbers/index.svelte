<script lang="ts">
  /**
   * CodeWithLineNumbers - Legacy wrapper for unified Code
   *
   * @deprecated Use Code with showLineNumbers={true} instead
   */
  import Code from '../code-block/index.svelte';
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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




