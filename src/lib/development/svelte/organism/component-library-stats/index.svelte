<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/component-library-stats';
  import { createComponentLibraryStatsState } from '$stylist/development/function/state/component-library-stats';

  let { ...props }: Props = $props();
  const state = createComponentLibraryStatsState(props);
</script>

<div id={state.sectionId} class={state.containerClass} {...state.restProps}>
  <div class={state.gridClass}>
    <div class={state.getCardClass('orange')}>
      <div class={state.getCounterClass('orange')}>
        {state.animatedStats.totalComponents}
      </div>
      <div class={state.getLabelClass}>
        Components
      </div>
    </div>

    <div class={state.getCardClass('blue')}>
      <div class={state.getCounterClass('blue')}>
        {state.animatedStats.atoms}
      </div>
      <div class={state.getLabelClass}>
        Atoms
      </div>
    </div>

    <div class={state.getCardClass('purple')}>
      <div class={state.getCounterClass('purple')}>
        {state.animatedStats.molecules}
      </div>
      <div class={state.getLabelClass}>
        Molecules
      </div>
    </div>

    <div class={state.getCardClass('green')}>
      <div class={state.getCounterClass('green')}>
        {state.animatedStats.organisms}
      </div>
      <div class={state.getLabelClass}>
        Organisms
      </div>
    </div>
  </div>
</div>
