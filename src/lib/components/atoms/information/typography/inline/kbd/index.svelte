<script lang="ts">
  import type { KbdProps } from '$stylist/design-system/typography/inline/kbd';
  import { createKbdState } from '../../state.svelte';

  let props: KbdProps = $props();

  const state = createKbdState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<kbd class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</kbd>
