<script lang="ts">
  import type { BadgeProps } from '$stylist/design-system/typography/elements/badge';
  import { createBadgeState } from '../../state.svelte';

  let props: BadgeProps = $props();

  const state = createBadgeState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<span class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</span>
