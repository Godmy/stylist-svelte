<script lang="ts">
  import type { EmProps } from '$stylist/design-system/typography/inline/em';
  import { createEmState } from '../../state.svelte';

  let props: EmProps = $props();

  const state = createEmState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<em class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</em>
