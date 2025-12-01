<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TrendingUp, TrendingDown } from 'lucide-svelte';

  import type { IMoleculeMetricCardProps } from './types';
  import { MetricCardStyleManager } from './styles';

  /**
   * MetricCard component - A card that displays a metric with trend information
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles metric card rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other card components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param title - Title of the metric
   * @param value - Value of the metric
   * @param change - Change percentage
   * @param changeLabel - Label for the change (e.g. 'from last month')
   * @param icon - Directional icon ('up' | 'down')
   * @param trend - Trend direction ('positive' | 'negative' | 'neutral')
   * @param size - Size of the card ('sm' | 'md' | 'lg')
   * @param class - Additional CSS classes for the container
   * @param valueClass - Additional CSS classes for the value
   * @param titleClass - Additional CSS classes for the title
   * @returns An accessible, styled metric card component
   */
  let props: IMoleculeMetricCardProps = $props();

  let {
    title = props.title,
    value = props.value,
    change = props.change ?? 0,
    changeLabel = props.changeLabel ?? 'from last month',
    icon = props.icon,
    trend = props.trend ?? 'neutral',
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    valueClass = props.valueClass ?? '',
    titleClass = props.titleClass ?? '',
    ...restProps
  } = props;

  const IconComponent = $derived(
    icon === 'up' ? TrendingUp : icon === 'down' ? TrendingDown : null
  );

  // Derived classes using StyleManager
  let containerClasses = $derived(MetricCardStyleManager.getContainerClasses(size, className));
  let titleClasses = $derived(MetricCardStyleManager.getTitleClasses(titleClass));
  let valueClasses = $derived(MetricCardStyleManager.getValueClasses(size, valueClass));
  let iconContainerClasses = $derived(MetricCardStyleManager.getIconContainerClasses(trend));
  let iconClasses = $derived(MetricCardStyleManager.getIconClasses(trend));
  let trendContainerClasses = $derived(MetricCardStyleManager.getTrendContainerClasses(trend));
  let trendIconClasses = $derived(MetricCardStyleManager.getTrendIconClasses());
  let trendValueClasses = $derived(MetricCardStyleManager.getTrendValueClasses());
</script>

<div class={containerClasses} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <p class={titleClasses}>{title}</p>
      <p class={valueClasses}>{value}</p>
    </div>
    {#if IconComponent}
      <div class={iconContainerClasses}>
        <IconComponent class={iconClasses} />
      </div>
    {/if}
  </div>
  {#if change !== 0}
    <div class={trendContainerClasses}>
      {#if change > 0}
        <TrendingUp class={trendIconClasses} />
      {:else}
        <TrendingDown class={trendIconClasses} />
      {/if}
      <span class={trendValueClasses}>
        {Math.abs(change)}% {changeLabel}
      </span>
    </div>
  {/if}
</div>