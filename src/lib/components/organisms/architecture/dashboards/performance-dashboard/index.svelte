<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { IconActivity, IconTrendingUp, IconTrendingDown, IconArrowUp, IconArrowDown } from '$stylist/components/atoms';
  import { PerformanceDashboardStyleManager } from '$stylist/design-system/styles';
  import type { PerformanceDashboardProps, Metric, TimeRange } from '$stylist/design-system/props';

  let {
    title = 'Performance Dashboard',
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
  }: PerformanceDashboardProps & HTMLAttributes<HTMLDivElement> = $props();

  let selectedTimeRange = $state(timeRange);

  function handleTimeRangeChange(range: TimeRange) {
    selectedTimeRange = range;
    if (onTimeRangeChange) {
      onTimeRangeChange(range);
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(PerformanceDashboardStyleManager.getContainerClass(variant, size, className));
  const headerClassComputed = $derived(PerformanceDashboardStyleManager.getHeaderClass(headerClass));
  const timeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getTimeRangeButtonClass());
  const activeTimeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getActiveTimeRangeButtonClass());
  const metricsGridClass = $derived(PerformanceDashboardStyleManager.getMetricsGridClass(metricsClass));
  const metricCardClassComputed = $derived(PerformanceDashboardStyleManager.getMetricCardClass(metricCardClass));
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
          <IconActivity size="md" class="text-[--color-text-secondary] mr-2" />
          <h3 class="text-lg font-medium text-[--color-text-primary]">{title}</h3>
        </div>
        {#if subtitle}
          <p class="text-sm text-[--color-text-secondary] mt-1">{subtitle}</p>
        {/if}
      </div>

      {#if showTimeRangeSelector}
        <div class="mt-4 sm:mt-0">
          <div class="flex rounded-md shadow-sm">
            {#each ['1d', '7d', '30d', '90d'] as range}
              <button
                type="button"
                class={selectedTimeRange === range ? activeTimeRangeButtonClass : timeRangeButtonClass}
                onclick={() => handleTimeRangeChange(range as TimeRange)}
                aria-label={`Set time range to ${range}`}
              >
                {range === '1d' ? '1D' : range === '7d' ? '7D' : range === '30d' ? '30D' : '90D'}
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
          <div class={`p-3 rounded-md ${metric.color} text-white`}>
            <metric.icon class="h-6 w-6" />
          </div>
          <div class={`flex items-center text-sm font-medium ${
            metric.changeType === 'positive' ? trendPositiveClass : trendNegativeClass
          }`}>
            {#if metric.changeType === 'positive'}
              <IconTrendingUp size="sm" class="mr-1" />
            {:else}
              <IconTrendingDown size="sm" class="mr-1" />
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

    <!-- Additional performance chart or visualization could go here -->
    <div class={chartContainerClass}>
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-medium text-[--color-text-primary]">Performance Trend</h4>
        <div class="flex items-center text-sm">
          <span class="text-[--color-success-600] mr-4">
            <IconArrowUp size="sm" class="inline mr-1" />
            Good
          </span>
          <span class="text-[--color-danger-600]">
            <IconArrowDown size="sm" class="inline mr-1" />
            Needs attention
          </span>
        </div>
      </div>
      <div class="h-48 flex items-end space-x-2">
        {#each Array(12) as _, i}
          <div
            class={chartBarClass}
            style={`height: ${Math.floor(Math.random() * 80) + 10}%`}
            aria-label={`Chart bar ${i+1}`}
          ></div>
        {/each}
      </div>
    </div>
  </div>
</div>
