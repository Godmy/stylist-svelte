<script lang="ts">
  
  import { Icon } from '$stylist';
  import { PerformanceDashboardStyleManager } from '$stylist';
  import type { PerformanceDashboardRecipe } from '$stylist/analytics/interface/recipe/performance-dashboard';
  import type { TokenTimeRange } from '$stylist/analytics/type/enum/time-range';
  import { ObjectManagerPerformanceDashboard } from '$stylist/analytics/class/object-manager/performance-dashboard';

  let {
    label = 'Performance Dashboard',
    subtitle,
    metrics = [],
    timeRange = '7d',
    onTimeRangeChange,
    showTimeRangeSelector = true,
    class: className = '',
    headerClass = '',
    metricsClass = '',
    metricCardClass = '',
    variant = 'default',
    size = 'md',
    ...restProps
  }: PerformanceDashboardRecipe = $props();

  const classNameStr = className == null ? undefined : String(className);
  const headerClassStr = headerClass == null ? undefined : String(headerClass);
  const metricsClassStr = metricsClass == null ? undefined : String(metricsClass);
  const metricCardClassStr = metricCardClass == null ? undefined : String(metricCardClass);

  let selectedTimeRange = $state(timeRange);
  const timeRanges = ObjectManagerPerformanceDashboard.resolveTimeRanges();
  const chartBarHeights = ObjectManagerPerformanceDashboard.resolveChartBarHeights();

  const containerClass = $derived(PerformanceDashboardStyleManager.getContainerClass(variant, size, classNameStr));
  const headerClassComputed = $derived(PerformanceDashboardStyleManager.getHeaderClass(headerClassStr));
  const timeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getTimeRangeButtonClass());
  const activeTimeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getActiveTimeRangeButtonClass());
  const metricsGridClass = $derived(PerformanceDashboardStyleManager.getMetricsGridClass(metricsClassStr));
  const metricCardClassComputed = $derived(PerformanceDashboardStyleManager.getMetricCardClass(metricCardClassStr));
  const metricHeaderClass = $derived(PerformanceDashboardStyleManager.getMetricHeaderClass());
  const metricTitleClass = $derived(PerformanceDashboardStyleManager.getMetricTitleClass());
  const metricValueClass = $derived(PerformanceDashboardStyleManager.getMetricValueClass());
  const trendPositiveClass = $derived(PerformanceDashboardStyleManager.getTrendPositiveClass());
  const trendNegativeClass = $derived(PerformanceDashboardStyleManager.getTrendNegativeClass());
  const chartContainerClass = $derived(PerformanceDashboardStyleManager.getChartContainerClass());
  const chartBarClass = $derived(PerformanceDashboardStyleManager.getChartBarClass());
</script>

<div class={containerClass} {...restProps}>
  <div class={headerClassComputed}>
    <div class="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center">
          <Icon name="activity" size="md" class="text-[--color-text-secondary] mr-2" />
          <h3 class="text-lg font-medium text-[--color-text-primary]">{label}</h3>
        </div>
        {#if subtitle}
          <p class="text-sm text-[--color-text-secondary] mt-1">{subtitle}</p>
        {/if}
      </div>

      {#if showTimeRangeSelector}
        <div class="mt-4 sm:mt-0">
          <div class="flex rounded-md shadow-sm">
            {#each timeRanges as range}
              <button
                type="button"
                class={selectedTimeRange === range ? activeTimeRangeButtonClass : timeRangeButtonClass}
                onclick={() => selectedTimeRange = ObjectManagerPerformanceDashboard.selectTimeRange(range as TokenTimeRange, onTimeRangeChange)}
                aria-label={`Set time range to ${range}`}
              >
                {ObjectManagerPerformanceDashboard.resolveTimeRangeLabel(range as TokenTimeRange)}
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <div class={metricsGridClass}>
    {#each metrics as metric}
      <div class={metricCardClassComputed}>
        <div class={metricHeaderClass}>
          <div class={`p-3 rounded-md ${metric.color} text-[var(--color-text-inverse)]`}>
            <metric.icon class="h-6 w-6" />
          </div>
          <div class={`flex items-center text-sm font-medium ${
            metric.changeType === 'positive' ? trendPositiveClass : trendNegativeClass
          }`}>
            {#if metric.changeType === 'positive'}
              <Icon name="trending-up" size="sm" class="mr-1" />
            {:else}
              <Icon name="trending-down" size="sm" class="mr-1" />
            {/if}
            <span>{Math.abs(metric.change)}%</span>
          </div>
        </div>
        <div class="mt-4">
          <h3 class={metricTitleClass}>{metric.title}</h3>
          <p class={metricValueClass}>{metric.value}</p>
        </div>
      </div>
    {/each}

    <div class={chartContainerClass}>
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-medium text-[--color-text-primary]">Performance Trend</h4>
        <div class="flex items-center text-sm">
          <span class="text-[--color-success-600] mr-4">
            <Icon name="arrow-up" size="sm" class="inline mr-1" />
            Good
          </span>
          <span class="text-[--color-danger-600]">
            <Icon name="arrow-down" size="sm" class="inline mr-1" />
            Needs attention
          </span>
        </div>
      </div>
      <div class="h-48 flex items-end space-x-2">
        {#each chartBarHeights as chartBarHeight, i}
          <div
            class={chartBarClass}
            style={`height: ${chartBarHeight}%`}
            aria-label={`Chart bar ${i+1}`}
          ></div>
        {/each}
      </div>
    </div>
  </div>
</div>






