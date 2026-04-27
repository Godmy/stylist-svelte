<script lang="ts">
  import type { SideBySideLayoutProps } from '$stylist/navigation/type/struct/side-by-side-layout-props';
  import { createSideBySideLayoutState } from '$stylist/navigation/function/state/side-by-side-layout';

  let props: SideBySideLayoutProps = $props();
  const state = createSideBySideLayoutState(props);
</script>

<div class={state.layoutClass} {...state.restProps}>
  {#each props.sections as section}
    <div
      class={`flex-1 ${state.getSectionWidthClass(section.size ?? '1/2')} ${section.className ?? ''}`}
    >
      {@render section.content()}
    </div>
  {/each}
</div>
