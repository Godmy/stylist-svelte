<script lang="ts">
  import { AnalyticsChartStyleManager } from '$stylist/analytics/class/style-manager/analytics-chart';
  import { ObjectManagerAnalyticsChart } from '$stylist/analytics/class/object-manager/analytics-chart';
  import type { AnalyticsChartRecipe } from '$stylist/analytics/interface/recipe/analytics-chart';
  import BarChart from '$stylist/analytics/svelte/molecule/charts/bar-chart/index.svelte';
  import LineChart from '$stylist/analytics/svelte/organism/charts/line-chart/index.svelte';
  import PieChart from '$stylist/analytics/svelte/atom/charts/chart-pie/index.svelte';

  let {
    title = 'Analytics Chart',
    subtitle,
    data = [],
    type = 'bar',
    showLegend = true,
    showTrend = true,
    trendValue = 0,
    height = 300,
    width = 600,
    class: className = '',
    chartClass = '',
    legendClass = '',
    ...restProps
  }: AnalyticsChartRecipe = $props();

  const classNameStr = className == null ? undefined : String(className);
  const chartClassStr = chartClass == null ? undefined : String(chartClass);
  const legendClassStr = legendClass == null ? undefined : String(legendClass);

  const maxValue = $derived(ObjectManagerAnalyticsChart.resolveMaxValue(data));
  const chartPoints = $derived(ObjectManagerAnalyticsChart.buildBarChartPoints(data));
  const pieChartPoints = $derived(ObjectManagerAnalyticsChart.buildPieChartPoints(data));
  const lineSeries = $derived(ObjectManagerAnalyticsChart.buildLineSeries(data, title));
</script>

<div class={AnalyticsChartStyleManager.getContainerClass(classNameStr)} {...restProps}>
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
            <span class="ml-1">{Math.abs(trendValue)}%</span>
          </span>
        </div>
      {/if}
    </div>
  </div>

  <div class={AnalyticsChartStyleManager.getChartContainerClass(chartClassStr)}>
    <div class="relative" style={`height: ${height}px; width: ${width}px;`}>
      {#if type === 'bar'}
        <BarChart data={chartPoints} {width} {height} {maxValue} />
      {:else if type === 'line'}
        <LineChart data={lineSeries} {width} {height} {maxValue} />
      {:else if type === 'pie' && data.length > 0}
        <PieChart data={pieChartPoints} />
      {/if}
    </div>

    {#if showLegend}
      <div class={AnalyticsChartStyleManager.getLegendContainerClass(legendClassStr)}>
        {#each data as item}
          <div class={AnalyticsChartStyleManager.getLegendItemClass()}>
            <div class={AnalyticsChartStyleManager.getLegendColorClass()} style={`background-color: ${ObjectManagerAnalyticsChart.resolveLegendColor(item.color)};`}></div>
            <span class={AnalyticsChartStyleManager.getLegendLabelClass()}>{item.label}</span>
            <span class={AnalyticsChartStyleManager.getLegendValueClass()}>({item.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>














