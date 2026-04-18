<script lang="ts">
  /**
   * CopyableCode - Legacy wrapper for unified Code
   *
   * @deprecated Use Code with copyable={true} instead
   */
  import Code from '../code-block/index.svelte';
  import type { CopyableCodeBlockProps } from '$stylist/development/type/struct/copyable-code-block-props';
  import { createCopyableCodeBlockState } from '$stylist/development/function/state/copyable-code-block';

  let props: CopyableCodeBlockProps = $props();
  const state = createCopyableCodeBlockState(props);
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
