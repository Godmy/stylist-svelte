<script lang="ts">
  import type { InlineCodeProps } from '$stylist/design-system/typography/inline/inline-code';
  import { createInlineCodeState } from '../../state.svelte';

  let props: InlineCodeProps = $props();

  const state = createInlineCodeState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, variant: _variant, ...rest } = props;
    return rest;
  })());
</script>

<code class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</code>
