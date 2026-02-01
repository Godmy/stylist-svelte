<script lang="ts">
  import type { TabPanelsProps } from '$stylist/design-system/interaction/controls/tabs/tab-panels';
  import { createTabPanelsState } from '../../state.svelte';

  let props: TabPanelsProps = $props();

  const state = createTabPanelsState(props);

  const restProps = $derived((() => {
    const { disabled: _disabled, class: _class, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<div {...restProps} class={state.classes}>
  {@render props.children?.()}
</div>
