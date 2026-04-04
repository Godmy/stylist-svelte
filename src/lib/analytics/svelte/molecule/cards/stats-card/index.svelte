<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { StatsCardRecipe } from '$stylist/analytics/interface/recipe/stats-card';
  import { ObjectManagerStatsCard } from '$stylist/analytics/class/object-manager/stats-card';
  import { StatsCardStyleManager } from '$stylist/analytics/class/style-manager/stats-card';

  let {
    label,
    value,
    trend = 'neutral',
    trendValue,
    description,
    icon,
    class: className = ''
  }: StatsCardRecipe = $props();

  const classNameStr = className == null ? undefined : String(className);

  const trendClasses = $derived(ObjectManagerStatsCard.resolveTrendClass(trend));
  const trendIconName = $derived(ObjectManagerStatsCard.resolveTrendIconName(trend));
  const containerClasses = $derived(StatsCardStyleManager.getContainerClasses(classNameStr));
  const headerClasses = $derived(StatsCardStyleManager.getHeaderClasses());
  const labelClasses = $derived(StatsCardStyleManager.getLabelClasses());
  const valueClasses = $derived(StatsCardStyleManager.getValueClasses());
  const iconWrapperClasses = $derived(StatsCardStyleManager.getIconWrapperClasses());
  const footerClasses = $derived(StatsCardStyleManager.getFooterClasses());
  const trendContainerClasses = $derived(StatsCardStyleManager.getTrendClasses(trendClasses));
  const trendIconClasses = $derived(StatsCardStyleManager.getTrendIconClasses());
  const descriptionClasses = $derived(StatsCardStyleManager.getDescriptionClasses());
</script>

<article class={containerClasses}>
  <div class={headerClasses}>
    <div>
      <p class={labelClasses}>{label}</p>
      <p class={valueClasses}>{value}</p>
    </div>

    {#if icon}
      <div class={iconWrapperClasses}>
        {@render icon()}
      </div>
    {/if}
  </div>

  <div class={footerClasses}>
    {#if trendValue}
      <span class={trendContainerClasses}>
        <BaseIcon name={trendIconName} class={trendIconClasses} />
        {trendValue}
      </span>
    {/if}

    {#if description}
      <span class={descriptionClasses}>{description}</span>
    {/if}
  </div>
</article>















