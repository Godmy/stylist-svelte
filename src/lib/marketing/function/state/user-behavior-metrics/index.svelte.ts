import type { UserBehaviorMetricsProps, UserBehaviorMetric, TimeRange } from '$stylist/marketing/type/struct/user-behavior-metrics';
import { untrack } from 'svelte';

export function createUserBehaviorMetricsState(props: UserBehaviorMetricsProps) {
  const title = $derived(props.title ?? 'User Behavior Metrics');
  const subtitle = $derived(props.subtitle);
  const metrics = $derived(props.metrics ?? []);
  const timeRange = $derived(props.timeRange ?? '7d');
  const onTimeRangeChange = $derived(props.onTimeRangeChange);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const metricsClassName = $derived(props.metricsClass ?? '');
  const metricCardClassName = $derived(props.metricCardClass ?? '');

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
    const { class: _class, headerClass: _headerClass, metricsClass: _metricsClass, metricCardClass: _metricCardClass, ...rest } = props;
    return rest;
  });

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get metrics() { return metrics; },
    get timeRange() { return timeRange; },
    get selectedTimeRange() { return selectedTimeRange; },
    set selectedTimeRange(v: TimeRange) { selectedTimeRange = v; },
    get containerClasses() { return containerClasses; },
    get headerClassName() { return headerClassName; },
    get metricsClassName() { return metricsClassName; },
    get metricCardClassName() { return metricCardClassName; },
    get restProps() { return restProps; },
    handleTimeRangeChange
  };
}

export default createUserBehaviorMetricsState;
