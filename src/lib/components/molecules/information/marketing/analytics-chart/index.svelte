<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { AnalyticsChartStyleManager } from '$stylist/design-system/styles/information/analytics-chart';
  import BarChart from '$stylist/components/molecules/architecture/canvas/charts/bar-chart/index.svelte';
  import LineChart from '$stylist/components/organisms/architecture/canvas/charts/line-chart/index.svelte';
  import PieChart from '$stylist/components/atoms/information/data-display/charts/chart-pie/index.svelte';

  type ChartType = 'line' | 'bar' | 'pie';

  type ChartDataPoint = {
    label: string;
    value: number;
    color?: string;
  };

  interface AnalyticsChartProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    data: ChartDataPoint[];
    type?: ChartType;
    showLegend?: boolean;
    showTrend?: boolean;
    trendValue?: number;
    height?: number;
    width?: number;
    class?: string;
    chartClass?: string;
    legendClass?: string;
  }

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
  }: AnalyticsChartProps = $props();

  const maxValue = $derived(
    data.length > 0 ? Math.max(...data.map((item) => item.value), 0) : 100
  );

  const chartPoints = $derived(data.map((item, index) => ({
    id: `point-${index}`,
    name: item.label,
    label: item.label,
    value: item.value,
    color: item.color
  })));
  const pieChartPoints = $derived(data.map((item) => ({
    x: item.label,
    y: item.value,
    label: item.label,
    color: item.color
  })));

  const lineSeries = $derived([
    {
      id: 'analytics-series',
      label: title,
      data: data.map((item, index) => ({
        id: `${index}`,
        name: item.label,
        value: item.value,
        color: item.color
      }))
    }
  ]);
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
            <span class="ml-1">{Math.abs(trendValue)}%</span>
          </span>
        </div>
      {/if}
    </div>
  </div>

  <div class={AnalyticsChartStyleManager.getChartContainerClass(chartClass)}>
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
      <div class={AnalyticsChartStyleManager.getLegendContainerClass(legendClass)}>
        {#each data as item}
          <div class={AnalyticsChartStyleManager.getLegendItemClass()}>
            <div class={AnalyticsChartStyleManager.getLegendColorClass()} style={`background-color: ${item.color || '#3B82F6'};`}></div>
            <span class={AnalyticsChartStyleManager.getLegendLabelClass()}>{item.label}</span>
            <span class={AnalyticsChartStyleManager.getLegendValueClass()}>({item.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

