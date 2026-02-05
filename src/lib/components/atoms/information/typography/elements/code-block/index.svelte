<script lang="ts">
  import type { CodeBlockProps } from '$stylist/design-system';
  import { createCodeBlockState } from '../../state.svelte';

  let props: CodeBlockProps = $props();

  const state = createCodeBlockState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const {
      class: _class,
      children: _children,
      language: _language,
      variant: _variant,
      size: _size,
      showLineNumbers: _showLineNumbers,
      startLineNumber: _startLineNumber,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>
