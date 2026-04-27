import { untrack } from 'svelte';
import type { TrafficAnalyticsProps, TrafficSource, TrafficDataPoint, TimeRange } from '$stylist/marketing/type/struct/traffic-analytics';

export function createTrafficAnalyticsState(props: TrafficAnalyticsProps) {
  const title = $derived(props.title ?? 'Traffic Analytics');
  const subtitle = $derived(props.subtitle);
  const totalVisitors = $derived(props.totalVisitors ?? 0);
  const uniqueVisitors = $derived(props.uniqueVisitors ?? 0);
  const pageViews = $derived(props.pageViews ?? 0);
  const timeOnPage = $derived(props.timeOnPage ?? '0s');
  const bounceRate = $derived(props.bounceRate ?? 0);
  const trafficSources = $derived(props.trafficSources ?? []);
  const trafficData = $derived(props.trafficData ?? []);
  const timeRange = $derived(props.timeRange ?? '7d');
  const onTimeRangeChange = $derived(props.onTimeRangeChange);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const summaryClassName = $derived(props.summaryClass ?? '');
  const chartClassName = $derived(props.chartClass ?? '');
  const sourcesClassName = $derived(props.sourcesClass ?? '');
  const maxValue = $derived(Math.max(...trafficData.map(d => d.value), 100));

  let selectedTimeRange = $state(untrack(() => timeRange));

  $effect(() => {
    selectedTimeRange = timeRange;
  });

  function handleTimeRangeChange(range: TimeRange): void {
    selectedTimeRange = range;
    if (onTimeRangeChange) {
      onTimeRangeChange(range);
    }
  }

  const containerClasses = $derived(
    `bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`.trim()
  );

  const restProps = $derived.by(() => {
    const { class: _class, headerClass: _headerClass, summaryClass: _summaryClass, chartClass: _chartClass, sourcesClass: _sourcesClass, ...rest } = props;
    return rest;
  });

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get totalVisitors() { return totalVisitors; },
    get uniqueVisitors() { return uniqueVisitors; },
    get pageViews() { return pageViews; },
    get timeOnPage() { return timeOnPage; },
    get bounceRate() { return bounceRate; },
    get trafficSources() { return trafficSources; },
    get trafficData() { return trafficData; },
    get timeRange() { return timeRange; },
    get selectedTimeRange() { return selectedTimeRange; },
    set selectedTimeRange(v: TimeRange) { selectedTimeRange = v; },
    get maxValue() { return maxValue; },
    get containerClasses() { return containerClasses; },
    get headerClassName() { return headerClassName; },
    get summaryClassName() { return summaryClassName; },
    get chartClassName() { return chartClassName; },
    get sourcesClassName() { return sourcesClassName; },
    get restProps() { return restProps; },
    handleTimeRangeChange
  };
}

export default createTrafficAnalyticsState;
