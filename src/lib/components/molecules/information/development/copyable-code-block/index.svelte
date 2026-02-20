<script lang="ts">
  /**
   * CopyableCodeBlock - Legacy wrapper for unified CodeBlock
   * 
   * @deprecated Use CodeBlock with copyable={true} instead
   */
  import CodeBlock from '../code-block/index.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    code?: string;
    language?: string;
    title?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
  };

  let props: Props = $props();
</script>

<CodeBlock
  code={props.code}
  language={props.language}
  title={props.title}
  copyable={true}
  class={props.class}
  contentClass={props.contentClass}
  headerClass={props.headerClass}
  {...props}
/>
