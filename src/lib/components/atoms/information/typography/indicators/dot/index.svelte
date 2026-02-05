<script lang="ts">
  import type { DotProps } from '$stylist/design-system';
  import { createDotState } from '../../state.svelte';

  let props: DotProps = $props();

  const state = createDotState(props);

  const restProps = $derived((() => {
    const { class: _class, color: _color, size: _size, ...rest } = props;
    return rest;
  })());
</script>

<span class={state.classes} {...restProps}></span>
