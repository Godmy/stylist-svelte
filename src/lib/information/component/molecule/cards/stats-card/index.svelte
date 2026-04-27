<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createStatsCardState } from '$stylist/information/function/state/stats-card';
  import type { StatsCardRecipe } from '$stylist/information/interface/recipe/stats-card';

  let stateProps: StatsCardRecipe = $props();

  const state = createStatsCardState(stateProps as Parameters<typeof createStatsCardState>[0]);
</script>

<article class={state.containerClasses}>
  <div class={state.headerClasses}>
    <div>
      <p class={state.labelClasses}>{state.label}</p>
      <p class={state.valueClasses}>{state.value}</p>
    </div>

    {#if state.icon}
      <div class={state.iconWrapperClasses}>
        {@render state.icon()}
      </div>
    {/if}
  </div>

  <div class={state.footerClasses}>
    {#if state.trendValue}
      <span class={state.trendContainerClasses}>
        <BaseIcon name={state.trendIconName} class={state.trendIconClasses} />
        {state.trendValue}
      </span>
    {/if}

    {#if state.description}
      <span class={state.descriptionClasses}>{state.description}</span>
    {/if}
  </div>
</article>















