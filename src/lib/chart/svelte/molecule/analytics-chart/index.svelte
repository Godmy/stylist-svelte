<script lang="ts">
  import { AnalyticsChartStyleManager } from '$stylist/chart/class/style-manager/analytics-chart';
  import { ObjectManagerAnalyticsChart } from '$stylist/chart/class/object-manager/analytics-chart';
  import type { AnalyticsChartRecipe } from '$stylist/chart/interface/recipe/analytics-chart';
  import { createAnalyticsChartState } from '$stylist/chart/function/state/analytics-chart';
  import BarChart from '$stylist/chart/svelte/molecule/charts/bar-chart/index.svelte';
  import LineChart from '$stylist/chart/svelte/organism/charts/line-chart/index.svelte';
  import PieChart from '$stylist/chart/svelte/atom/charts/chart-pie/index.svelte';

  let props: AnalyticsChartRecipe = $props();
  const state = createAnalyticsChartState(props);

  const maxValue = $derived(ObjectManagerAnalyticsChart.resolveMaxValue(props.data ?? []));
  const chartPoints = $derived(ObjectManagerAnalyticsChart.buildBarChartPoints(props.data ?? []));
  const pieChartPoints = $derived(ObjectManagerAnalyticsChart.buildPieChartPoints(props.data ?? []));
  const lineSeries = $derived(ObjectManagerAnalyticsChart.buildLineSeries(props.data ?? [], props.title ?? ''));
</script>

<div class={state.containerClasses} {...props}>
  <div class={state.headerClasses}>
    <div class={state.titleContainerClasses}>
      <div>
        <h3 class={state.titleClasses}>{props.title ?? 'Analytics Chart'}</h3>
        {#if props.subtitle}
          <p class={state.subtitleClasses}>{props.subtitle}</p>
        {/if}
      </div>
      {#if props.showTrend && props.trendValue !== 0}
        <div class="flex items-center">
          <span class={state.trendContainerClasses}>
            <span class="ml-1">{Math.abs(props.trendValue ?? 0)}%</span>
          </span>
        </div>
      {/if}
    </div>
  </div>

  <div class={state.chartContainerClasses}>
    <div class="relative" style={`height: ${props.height ?? 300}px; width: ${props.width ?? 600}px;`}>
      {#if props.type === 'bar'}
        <BarChart data={chartPoints} width={props.width ?? 600} height={props.height ?? 300} maxValue={maxValue} />
      {:else if props.type === 'line'}
        <LineChart data={lineSeries} width={props.width ?? 600} height={props.height ?? 300} maxValue={maxValue} />
      {:else if props.type === 'pie' && (props.data?.length ?? 0) > 0}
        <PieChart data={pieChartPoints} />
      {/if}
    </div>

    {#if props.showLegend}
      <div class={state.legendContainerClasses}>
        {#each props.data ?? [] as item}
          <div class={state.legendItemClasses}>
            <div class={state.legendColorClasses} style={`background-color: ${ObjectManagerAnalyticsChart.resolveLegendColor(item.color)};`}></div>
            <span class={state.legendLabelClasses}>{item.label}</span>
            <span class={state.legendValueClasses}>({item.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
