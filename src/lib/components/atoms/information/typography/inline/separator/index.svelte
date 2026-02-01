<script lang="ts">
  import type { SeparatorProps } from '$stylist/design-system/typography/inline/separator';
  import { createSeparatorState } from '../../state.svelte';

  let props: SeparatorProps = $props();

  const state = createSeparatorState(props);

  const restProps = $derived((() => {
    const { class: _class, orientation: _orientation, decorative: _decorative, ...rest } = props;
    return rest;
  })());
</script>

<hr
  class={state.classes}
  aria-orientation={state.orientation}
  role={state.decorative ? 'presentation' : 'separator'}
  {...restProps}
/>
