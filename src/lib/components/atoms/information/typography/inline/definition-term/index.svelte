<script lang="ts">
  import type { DefinitionTermProps } from '$stylist/design-system/typography/inline/definition-term';
  import { createDefinitionTermState } from '../../state.svelte';

  let props: DefinitionTermProps = $props();

  const state = createDefinitionTermState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<dt class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</dt>
