<script lang="ts">
  import type { TabIndicatorProps } from '$stylist/design-system/interaction/controls/tabs/tab-indicator';
  import { createTabIndicatorState } from '../../state.svelte';

  let props: TabIndicatorProps = $props();

  const state = createTabIndicatorState(props);

  const restProps = $derived((() => {
    const { left: _left, width: _width, color: _color, size: _size, class: _class, disabled: _disabled, ...rest } = props;
    return rest;
  })());
</script>

<div
  class={state.classes}
  style={state.style}
  role="presentation"
  aria-hidden="true"
  {...restProps}
></div>
