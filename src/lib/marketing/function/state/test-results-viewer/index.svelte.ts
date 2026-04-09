import type { TestResultsViewerProps, TestResult } from '$stylist/marketing/type/struct/test-results-viewer';

export function getBestVariant(results: TestResult[]): TestResult | undefined {
  if (results.length === 0) return undefined;
  return results.reduce((best, current) =>
    current.conversionRate > best.conversionRate ? current : best
  );
}

export function createTestResultsViewerState(props: TestResultsViewerProps) {
  const testResults = $derived(props.testResults ?? []);
  const testOverview = $derived(props.testOverview);
  const title = $derived(props.title ?? 'Test Results Viewer');
  const description = $derived(props.description ?? 'Detailed analysis of your A/B test performance');
  const showCharts = $derived(props.showCharts ?? true);
  const showStatisticalSignificance = $derived(props.showStatisticalSignificance ?? true);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const resultsClassName = $derived(props.resultsClass ?? '');
  const chartClassName = $derived(props.chartClass ?? '');
  const footerClassName = $derived(props.footerClass ?? '');

  const totalVisitors = $derived(testResults.reduce((sum, result) => sum + result.visitors, 0));
  const totalConversions = $derived(testResults.reduce((sum, result) => sum + result.conversions, 0));
  const overallConversionRate = $derived(totalVisitors > 0 ? (totalConversions / totalVisitors) * 100 : 0);
  const bestVariant = $derived(getBestVariant(testResults));

  const containerClasses = $derived(
    `bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`.trim()
  );
  const headerClasses = $derived(
    `border-b px-6 py-5 ${headerClassName}`.trim()
  );

  const restProps = $derived.by(() => {
    const { class: _class, headerClass: _headerClass, resultsClass: _resultsClass, chartClass: _chartClass, footerClass: _footerClass, ...rest } = props;
    return rest;
  });

  return {
    get testResults() { return testResults; },
    get testOverview() { return testOverview; },
    get title() { return title; },
    get description() { return description; },
    get showCharts() { return showCharts; },
    get showStatisticalSignificance() { return showStatisticalSignificance; },
    get totalVisitors() { return totalVisitors; },
    get totalConversions() { return totalConversions; },
    get overallConversionRate() { return overallConversionRate; },
    get bestVariant() { return bestVariant; },
    get containerClasses() { return containerClasses; },
    get headerClasses() { return headerClasses; },
    get resultsClassName() { return resultsClassName; },
    get chartClassName() { return chartClassName; },
    get footerClassName() { return footerClassName; },
    get restProps() { return restProps; }
  };
}
