<script lang="ts">
  import type { DefinitionDescriptionProps } from '$stylist/design-system/typography/inline/definition-description';
  import { createDefinitionDescriptionState } from '../../state.svelte';

  let props: DefinitionDescriptionProps = $props();

  const state = createDefinitionDescriptionState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const { class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<dd class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</dd>
