<script lang="ts">
  import type { GridProps } from '$stylist/layout/type/struct/grid/grid-props';
  import { stateFn } from '$stylist/layout/function/state/grid';

  let props: GridProps = $props();
  const state = stateFn(props);
</script>

<div class={state.gridClass} {...state.restProps}>
  {@render props.children()}
</div>
