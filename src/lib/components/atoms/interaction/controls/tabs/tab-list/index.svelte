<script lang="ts">
  import type { TabListProps } from '$stylist/design-system/attributes';
  import { createTabListState } from '../../state.svelte';

  let props: TabListProps = $props();

  const state = createTabListState(props);

  const restProps = $derived((() => {
    const { disabled: _disabled, class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<div
  {...restProps}
  role="tablist"
  aria-orientation="horizontal"
  class={state.classes}
>
  {@render props.children?.()}
</div>
