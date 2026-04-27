<script lang="ts">
  import type { ComponentLibraryStatsProps } from '$stylist/development/type/struct/component-library-stats-props';
  import { createComponentLibraryStatsState } from '$stylist/development/function/state/component-library-stats';

  let { ...props }: ComponentLibraryStatsProps = $props();
  const state = createComponentLibraryStatsState(props);
</script>

<div id={state.sectionId} class={state.containerClass} {...state.restProps}>
  <div class={state.statsGridClass}>
    <div class={state.getStatCardClass('orange')}>
      <div class={state.getStatValueClass('orange')}>
        {state.animatedStats.totalComponents}
      </div>
      <div class={state.getStatLabelClass}>
        Components
      </div>
    </div>

    <div class={state.getStatCardClass('blue')}>
      <div class={state.getStatValueClass('blue')}>
        {state.animatedStats.atoms}
      </div>
      <div class={state.getStatLabelClass}>
        Atoms
      </div>
    </div>

    <div class={state.getStatCardClass('purple')}>
      <div class={state.getStatValueClass('purple')}>
        {state.animatedStats.molecules}
      </div>
      <div class={state.getStatLabelClass}>
        Molecules
      </div>
    </div>

    <div class={state.getStatCardClass('green')}>
      <div class={state.getStatValueClass('green')}>
        {state.animatedStats.organisms}
      </div>
      <div class={state.getStatLabelClass}>
        Organisms
      </div>
    </div>
  </div>
</div>
