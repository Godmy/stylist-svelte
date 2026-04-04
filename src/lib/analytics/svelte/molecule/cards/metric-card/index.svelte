<script lang="ts">
  import type { MetricCardRecipe } from '$stylist/analytics/interface/recipe/metric-card';
  import { MetricCardStyleManager } from '$stylist/analytics/class/style-manager/metric-card';
  import { cn } from '$stylist/layout/function/script/merge-class-names';
  import { ObjectManagerMetricCard } from '$stylist/analytics/class/object-manager/metric-card';
  
  let {
    label,
    value,
    max,
    percentage,
    description,
    variant = 'info',
    showProgressBar = true,
    class: className = ''
  }: MetricCardRecipe = $props();
  
  const containerClasses = $derived(MetricCardStyleManager.getContainerClasses(cn(className)));
  const titleClasses = $derived(MetricCardStyleManager.getTitleClasses());
  const valueClasses = $derived(MetricCardStyleManager.getValueClasses());
  const descriptionClasses = $derived(MetricCardStyleManager.getDescriptionClasses());
  const progressBarContainerClasses = $derived(MetricCardStyleManager.getProgressBarContainerClasses());
  const progressBarClasses = $derived(MetricCardStyleManager.getProgressBarClasses());
  const progressBarFillClasses = $derived(MetricCardStyleManager.getProgressBarFillClasses(variant, percentage));
  const percentageClasses = $derived(MetricCardStyleManager.getPercentageClasses(variant));
  const progressBarWidth = $derived(ObjectManagerMetricCard.resolveProgressBarWidth(percentage));
</script>

<div class={containerClasses} role="region" aria-label={`Metric: ${label}`}>
  <h3 class={titleClasses} aria-label={`Metric title: ${label}`}>{label}</h3>
  <div class={valueClasses} aria-label={`Value: ${value}`}>
    {value}
  </div>
  {#if description}
    <p class={descriptionClasses} aria-label={`Description: ${description}`}>
      {description}
    </p>
  {/if}
  
  {#if showProgressBar}
    <div class={progressBarContainerClasses}>
      <div class={progressBarClasses} role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-label={`Progress: ${percentage}%`}>
        <div
          class={progressBarFillClasses}
          style={`width: ${progressBarWidth};`}
          aria-hidden="true"
        ></div>
      </div>
      <div class={percentageClasses}>
        {percentage}%
      </div>
    </div>
  {/if}
</div>






