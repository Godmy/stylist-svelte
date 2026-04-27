<script lang="ts">
  import { createSplitLayoutState } from '$stylist/layout/function/state/split-layout';
  import type { SplitLayoutProps } from '$stylist/layout/type/struct/layout-extended/split-layout-props';

  let props: SplitLayoutProps = $props();
  const state = createSplitLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
  <div class={state.primaryClasses}>
    {@render props.primary()}
  </div>
  <div class={state.secondaryClasses}>
    {@render props.secondary()}
  </div>
</div>
