<script lang="ts">
  /**
   * CopyableCode - Legacy wrapper for unified Code
   *
   * @deprecated Use Code with copyable={true} instead
   */
  import Code from '../code-block/index.svelte';
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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

<Code
  code={props.code}
  language={props.language}
  title={props.title}
  copyable={true}
  class={props.class}
  contentClass={props.contentClass}
  headerClass={props.headerClass}
  {...props}
/>




