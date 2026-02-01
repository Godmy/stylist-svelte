<script lang="ts">
  import type { AbbrProps } from '$stylist/design-system/typography/inline/abbr';
  import { createAbbrState } from '../../state.svelte';

  let props: AbbrProps = $props();

  const state = createAbbrState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, title: _title, ...rest } = props;
    return rest;
  })());
</script>

<abbr class={state.classes} title={state.title} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</abbr>
