<script lang="ts">
  import { createMetricCardState } from '$stylist/information/function/state/metric-card';
  import type { MetricCardRecipe } from '$stylist/information/interface/recipe/metric-card';

  let {
    ...stateProps
  }: MetricCardRecipe = $props();

  const state = createMetricCardState(stateProps as Parameters<typeof createMetricCardState>[0]);
</script>

<div class={state.containerClasses} role="region" aria-label={`Metric: ${state.label}`} {...state.restProps}>
  <h3 class={state.titleClasses} aria-label={`Metric title: ${state.label}`}>{state.label}</h3>
  <div class={state.valueClasses} aria-label={`Value: ${state.value}`}>
    {state.value}
  </div>
  {#if state.description}
    <p class={state.descriptionClasses} aria-label={`Description: ${state.description}`}>
      {state.description}
    </p>
  {/if}

  {#if state.showProgressBar}
    <div class={state.progressBarContainerClasses}>
      <div class={state.progressBarClasses} role="progressbar" aria-valuenow={state.percentage} aria-valuemin="0" aria-valuemax="100" aria-label={`Progress: ${state.percentage}%`}>
        <div
          class={state.progressBarFillClasses}
          style={`width: ${state.progressBarWidth};`}
          aria-hidden="true"
        ></div>
      </div>
      <div class={state.percentageClasses}>
        {state.percentage}%
      </div>
    </div>
  {/if}
</div>






