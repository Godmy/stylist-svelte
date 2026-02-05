<script lang="ts">
  import type { StatusIndicatorProps } from '$stylist/design-system';
  import { createStatusIndicatorState } from '../../state.svelte';

  let props: StatusIndicatorProps = $props();

  const state = createStatusIndicatorState(props);

  const restProps = $derived((() => {
    const { class: _class, status: _status, label: _label, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<span class={state.classes} {...restProps}>
  <span class={state.dotClasses}></span>
  <span>{state.label}</span>
</span>
