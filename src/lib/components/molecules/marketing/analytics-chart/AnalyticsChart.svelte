<script lang="ts">
  import type { IAnalyticsChartProps } from './types';
  import { AnalyticsChartStyleManager } from './styles';
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, TrendingUp, TrendingDown } from 'lucide-svelte';
  import BarChart from './_BarChart.svelte';
  import LineChart from './_LineChart.svelte';
  import PieChart from '../../../atoms/data-display/charts/chart-pie/PieChart.svelte';

  let {
    title = 'Analytics Chart',
    subtitle,
    data = [],
    type = 'bar',
    showLegend = true,
    showTooltip = true,
    showTrend = true,
    trendValue = 0,
    height = 300,
    width = 600,
    class: className = '',
    chartClass = '',
    legendClass = '',
    ...restProps
  }: IAnalyticsChartProps & HTMLAttributes<HTMLDivElement> = $props();

  // Calculate max value for charts that need it
  const maxValue = $derived(
    data.length > 0
      ? Math.max(...data.map(item => typeof item.value === 'number' ? item.value : 0), 0)
      : 100
  );


</script>

<div class={AnalyticsChartStyleManager.getContainerClass(className)} {...restProps}>
  <div class={AnalyticsChartStyleManager.getHeaderClass()}>
    <div class={AnalyticsChartStyleManager.getTitleContainerClass()}>
      <div>
        <h3 class={AnalyticsChartStyleManager.getTitleClass()}>{title}</h3>
        {#if subtitle}
          <p class={AnalyticsChartStyleManager.getSubtitleClass()}>{subtitle}</p>
        {/if}
      </div>
      {#if showTrend && trendValue !== 0}
        <div class="flex items-center">
          <span class={AnalyticsChartStyleManager.getTrendContainerClass(trendValue)}>
            <trendIcon class="h-5 w-5"></trendIcon>
            <span class="ml-1">{Math.abs(trendValue)}%</span>
          </span>
        </div>
      {/if}
    </div>
  </div>

  <div class={AnalyticsChartStyleManager.getChartContainerClass(chartClass)}>
    <div class="relative" style={`height: ${height}px; width: ${width}px;`}>
      {#if type === 'bar'}
        <BarChart {data} {width} {height} {maxValue} />
      {:else if type === 'line'}
        <LineChart {data} {width} {height} {maxValue} />
      {:else if type === 'pie' && data.length > 0}
        <PieChart {data} />
      {/if}
    </div>

    {#if showLegend}
      <div class={AnalyticsChartStyleManager.getLegendContainerClass(legendClass)}>
        {#each data as item}
          <div class={AnalyticsChartStyleManager.getLegendItemClass()}>
            <div
              class={AnalyticsChartStyleManager.getLegendColorClass()}
              style={`background-color: ${item.color || '#3B82F6'};`}
            ></div>
            <span class={AnalyticsChartStyleManager.getLegendLabelClass()}>{item.label}</span>
            <span class={AnalyticsChartStyleManager.getLegendValueClass()}>({item.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>