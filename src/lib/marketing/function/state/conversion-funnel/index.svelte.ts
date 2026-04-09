import type { ConversionFunnelProps, FunnelStep } from '$stylist/marketing/type/struct/conversion-funnel';
import { ConversionFunnelStyleManager } from '$stylist/marketing/class/style-manager/conversion-funnel';

export function getConversionRate(steps: FunnelStep[], stepIndex: number): number {
  if (stepIndex === 0 || steps.length <= stepIndex) return 100;
  const current = steps[stepIndex].value;
  const previous = steps[stepIndex - 1].value;
  return previous > 0 ? Math.round((current / previous) * 100) : 0;
}

export function getDropoff(steps: FunnelStep[], stepIndex: number): number {
  if (stepIndex === 0 || steps.length <= stepIndex) return 0;
  const current = steps[stepIndex].value;
  const previous = steps[stepIndex - 1].value;
  return previous > 0 ? Math.round(((previous - current) / previous) * 100) : 0;
}

export function createConversionFunnelState(props: ConversionFunnelProps) {
  const title = $derived(props.title ?? 'Conversion Funnel');
  const subtitle = $derived(props.subtitle);
  const steps = $derived(props.steps ?? []);
  const showPercentage = $derived(props.showPercentage ?? true);
  const showValues = $derived(props.showValues ?? true);
  const showTrend = $derived(props.showTrend ?? true);
  const showConversionRate = $derived(props.showConversionRate ?? true);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const maxValue = $derived(Math.max(...steps.map((s) => s.value), 100));
  const containerClasses = $derived(ConversionFunnelStyleManager.getContainerClass(className));
  const headerClasses = $derived(ConversionFunnelStyleManager.getHeaderClass(headerClassName));

  const restProps = $derived.by(() => {
    const { class: _class, headerClass: _headerClass, ...rest } = props;
    return rest;
  });

  return {
    get title() { return title; },
    get subtitle() { return subtitle; },
    get steps() { return steps; },
    get showPercentage() { return showPercentage; },
    get showValues() { return showValues; },
    get showTrend() { return showTrend; },
    get showConversionRate() { return showConversionRate; },
    get containerClasses() { return containerClasses; },
    get headerClasses() { return headerClasses; },
    get maxValue() { return maxValue; },
    get restProps() { return restProps; }
  };
}
